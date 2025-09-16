// Service Worker para poupe.com.br
// Versão do cache - incrementar quando houver mudanças
const CACHE_VERSION = 'poupe-v1.0.0';
const CACHE_NAME = `poupe-cache-${CACHE_VERSION}`;

// Arquivos essenciais para funcionamento offline
const CORE_FILES = [
  '/',
  '/index.html',
  '/app.html',
  '/lista.html',
  '/privacidade.html',
  '/termosdeuso.html',
  '/favicon/favicon.ico',
  '/favicon/android-chrome-192x192.png',
  '/favicon/android-chrome-512x512.png',
  '/favicon/apple-touch-icon.png',
  '/img/image.png',
  '/img/shopping-2613984_1280.jpg',
  // CDN resources
  'https://cdn.tailwindcss.com/3.4.0',
  'https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache aberto, adicionando arquivos essenciais...');
        return cache.addAll(CORE_FILES);
      })
      .then(() => {
        console.log('[SW] Todos os arquivos foram cacheados com sucesso!');
        // Força a ativação imediata do novo SW
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Erro ao cachear arquivos:', error);
      })
  );
});

// Ativar Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativando Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        // Remove caches antigos
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName.startsWith('poupe-cache-')) {
              console.log('[SW] Removendo cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker ativado e pronto!');
        // Assume controle de todas as abas abertas
        return self.clients.claim();
      })
  );
});

// Interceptar requisições de rede
self.addEventListener('fetch', (event) => {
  // Ignora requisições que não são GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Ignora requisições para outros domínios (exceto CDNs conhecidos)
  const url = new URL(event.request.url);
  const isOwnDomain = url.origin === self.location.origin;
  const isTrustedCDN = [
    'cdn.tailwindcss.com',
    'cdn.jsdelivr.net',
    'cdnjs.cloudflare.com'
  ].some(domain => url.hostname.includes(domain));

  if (!isOwnDomain && !isTrustedCDN) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Se encontrou no cache, retorna
        if (cachedResponse) {
          console.log('[SW] Servindo do cache:', event.request.url);
          return cachedResponse;
        }

        // Se não encontrou no cache, busca na rede
        console.log('[SW] Buscando na rede:', event.request.url);
        return fetch(event.request)
          .then((networkResponse) => {
            // Se a resposta é válida, adiciona ao cache
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseClone);
                });
            }
            return networkResponse;
          })
          .catch((error) => {
            console.error('[SW] Erro na rede:', error);
            
            // Se é uma página HTML e falhou, retorna página offline
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
            
            // Para outros recursos, retorna erro
            throw error;
          });
      })
  );
});

// Escutar mensagens do cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_VERSION });
  }
});

// Notificar sobre atualizações
self.addEventListener('updatefound', () => {
  console.log('[SW] Nova versão encontrada!');
});