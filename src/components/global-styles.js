import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

@import url('https://use.typekit.net/xxl4ngd.css');

@font-face {
  font-family: 'Brr';
  src: url('/BRRR-Skrrt.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Whyte Inktrap";
  src: url("/ABCWhyteInktrapVariableEdu-Regular.woff2") format("woff2"),
       url("/ABCWhyteInktrapVariableEdu-Regular.woff") format("woff");
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: "Whyte Inktrap Italic";
  src: url("/ABCWhyteInktrapVariableEdu-Italic.woff2") format("woff2"),
       url("/ABCWhyteInktrapVariableEdu-Italic.woff") format("woff");
  font-weight: 100 900;
  font-style: italic;
}

@font-face {
  font-family: "Whyte";
  src: url("/ABCWhytePlusVariableEdu-Regular.woff2") format("woff2"),
       url("/ABCWhytePlusVariableEdu-Regular.woff") format("woff");
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: "Whyte Italic";
  src: url("/ABCWhytePlusVariableEdu-Regular.woff2") format("woff2"),
       url("/ABCWhytePlusVariableEdu-Regular.woff") format("woff");
  font-weight: 100 900;
  font-style: italic;
}


body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html {
  height: -webkit-fill-available;
  width: 100vw;
  overflow-x: hidden;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Whyte Inktrap';
  transition-property: background-color, color, background;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font-family: 'Whyte';
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(255, 0, 55, 0.754);
}

body::-webkit-scrollbar-track {
    background: transparent;
}

:root {
  scroll-behavior: smooth;
  --size-300: 0.75rem;
  --size-400: 1rem;
  --size-500: 1.33rem;
  --size-600: 1.77rem;
  --size-700: 2.36rem;
  --size-800: 3.15rem;
  --size-900: 4.2rem;
}

body.light-mode {
  color: #000000;
  background-color: #ff93ec;
  background-image: linear-gradient(315deg, #bdff9f 0%, #fef9b5 50%);
}

body.dark-mode {
  color: #000000;
  background-color: #ff93ec;
  background-image: url('/media/wallpapperr10.png'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
}

body.dark-mode ::selection{
  background: #e9e9e9;
  color: #252526;
}

body.light-mode ::selection{
  background: #37292C;
  color: white;
}

h1,
h2,
h3,
h4 {
  font-family: 'Whyte Inktrap';
  text-transform: uppercase;
}

h1,
h2,
h3 {
  font-family: 'Whyte Inktrap';
  text-transform: uppercase;
}

h1 {
  font-size: var(--size-800);
}

h2 {
  font-size: var(--size-700);
}

h3 {
  font-size: var(--size-600);
}

p {
  font-size: var(--size-400);
}

p, li {
    max-width: none;
}

.gatsby-resp-image-wrapper {
    margin-left: 0 !important;
}

.image-container {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
}

.image-container img {
  width: 48%;
}

`;

export default GlobalStyle;