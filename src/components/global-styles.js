import { createGlobalStyle } from "styled-components";

import indexBackground from '../../static/media/Overall.png'
import blogBackground from '../../static/media/Overall.png'
import tagsBackground from '../../static/media/Overall.png'
import postBackground from'../../static/media/Overall.png'

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body.index-page {
  background-image: url(${indexBackground});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
body.blog-page {
  background-image: url(${blogBackground});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
body.tags-page {
  background-image: url(${tagsBackground});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
body.post-page {
  background-image: linear-gradient(315deg, #2d1c48ac, #ffffffb9);
  // background-size: cover;
  // background-repeat: no-repeat;
  // min-height: 100vh;
}

@import url('https://use.typekit.net/xxl4ngd.css');

@font-face {
  font-family: 'Brr';
  src: url('/BRRR-Skrrt.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Whyte Inktrap';
  src: url('/ABCWhyteInktrapVariableEdu-Regular.woff2') format('woff2'),
       url('/ABCWhyteInktrapVariableEdu-Regular.woff') format('woff');
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: 'Whyte Inktrap Italic';
  src: url('/ABCWhyteInktrapVariableEdu-Italic.woff2') format('woff2'),
       url('/ABCWhyteInktrapVariableEdu-Italic.woff') format('woff');
  font-weight: 100 900;
  font-style: italic;
}

@font-face {
  font-family: 'Whyte';
  src: url('/ABCWhytePlusVariableEdu-Regular.woff2') format('woff2'),
       url('/ABCWhytePlusVariableEdu-Regular.woff') format('woff');
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: 'Whyte Italic';
  src: url('/ABCWhytePlusVariableEdu-Regular.woff2') format('woff2'),
       url('/ABCWhytePlusVariableEdu-Regular.woff') format('woff');
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
  font-family: 'Whyte';
  transition-property: background-color, color, background;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2d1c48ff;
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
  font-family: 'Whyte Inktrap';
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
    width: 1rem;
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
  font-size: 6rem;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
}

p {
  font-size: 1.5rem;
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
  width: 60%;
}

`;

export default GlobalStyle;