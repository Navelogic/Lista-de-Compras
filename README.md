# Lista de Compras 🛒

Um aplicativo web simples e elegante para gerenciar suas listas de compras, desenvolvido com tecnologias modernas e design responsivo.

## 🚀 Funcionalidades

- ✅ **Criação de listas personalizadas** - Crie e organize suas listas de compras
- 📱 **Design responsivo** - Funciona perfeitamente em desktop e mobile
- 🎨 **Interface moderna** - Design clean e minimalista usando DaisyUI
- 🌙 **Múltiplos temas** - Suporte a diferentes temas visuais
- 💾 **Armazenamento local** - Suas listas são salvas no navegador
- 🔒 **Privacidade** - Todos os dados ficam no seu dispositivo

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna
- **JavaScript** - Interatividade e funcionalidades
- **Tailwind CSS** - Framework CSS utilitário
- **DaisyUI** - Componentes prontos para Tailwind
- **Service Worker** - Funcionalidade offline (PWA)

## 🎨 Tema Padrão

O aplicativo utiliza o tema **"emerald"** do DaisyUI como padrão, oferecendo uma paleta de cores suave e agradável:
- Cores claras e neutras para melhor legibilidade
- Design minimalista sem sombras
- Interface limpa e moderna

## 📁 Estrutura do Projeto

```
Lista-de-Compras/
├── index.html          # Página inicial
├── app.html           # Aplicativo principal
├── lista.html         # Interface da lista
├── privacidade.html   # Política de privacidade
├── termosdeuso.html   # Termos de uso
├── sw.js             # Service Worker
├── favicon/          # Ícones do aplicativo
└── img/             # Imagens e recursos
```

## 🚀 Como Usar

### Instalação Local

1. Clone ou baixe este repositório
2. Navegue até a pasta do projeto
3. Inicie um servidor local:

```bash
# Usando Python 3
python3 -m http.server 8000

# Usando Node.js
npx serve .

# Usando PHP
php -S localhost:8000
```

4. Acesse `http://localhost:8000` no seu navegador

### Uso Online

O aplicativo pode ser hospedado em qualquer servidor web estático como:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## 📱 Funcionalidades PWA

O aplicativo suporta Progressive Web App (PWA):
- Instalação no dispositivo
- Funcionamento offline
- Ícones personalizados
- Experiência nativa

## 🔧 Personalização

### Alterando Temas

Para alterar o tema padrão, edite o atributo `data-theme` nos arquivos HTML:

```html
<html data-theme="seu-tema-aqui">
```

Temas disponíveis: light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset

### Cores Personalizadas

O projeto utiliza variáveis CSS do DaisyUI. Para personalizar cores, consulte a [documentação oficial](https://daisyui.com/docs/themes/).

## 📄 Páginas

- **Início** (`index.html`) - Landing page com apresentação do projeto
- **App** (`app.html`) - Interface principal do aplicativo
- **Lista** (`lista.html`) - Visualização e edição de listas
- **Privacidade** (`privacidade.html`) - Política de privacidade
- **Termos** (`termosdeuso.html`) - Termos de uso

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma issue.

---

**Desenvolvido com ❤️ para facilitar suas compras do dia a dia!**