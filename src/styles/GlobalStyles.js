import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background: #F6F8F9;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  main {
    width: 100%;
    max-width: 1390px;
    margin: 0 auto auto auto;
    padding: 1em;
    flex: 1;
    background: #F6F8F9;

  .toast-font-size {
    color: #fff;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
  }

  .toast-background {
    background: #DD2D4A;
  }

  .toast-progress-bar {
    background: rgba(0, 0, 0, 0.3);
  }

  .toast-background-success {
    background: #04a777;
  }

  .toast-progress-bar-success {
    background: #333745;
  }
  }
`
