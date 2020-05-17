# Gatsby-App Example

  Projeto de exemplo baseado na [playlist](https://www.youtube.com/playlist?list=PLN9uKzK0o3GR3ky2Q6zc2v0Dlej3oOBtT) sobre Gatsby do *Thiago Franchin*.

## Criação do projeto e instalação de dependencias
  - gatsby new gatsby-app
  - yarn add node-sass gatsby-plugin-sass
    > Adicionar no arquivo `gatsby-config.js` em plugins a nova opção `gatsby-plugin-sass`
  - yarn add react-bootstrap bootstrap popper.js jquery
    > Adicionar o *import* do bootstrap no arquivo `gatsby-browser`:
    > `import 'bootstrap/dist/css/bootstrap.min.css';`
    > `import 'jquery/dist/jquery.min.js';`
    > `import 'popper.js/dist/popper.min.js';`
    > `import 'bootstrap/dist/js/bootstrap.min.js';`
  - yarn add gatsby-plugin-styled-components styled-components babel-plugin-styled-components
    > Adicionar no arquivo `gatsby-config.js` em plugins a nova opção `gatsby-plugin-styled-components`
  - yarn add styled-icons
  - yarn add gatsby-plugin-sitemap
