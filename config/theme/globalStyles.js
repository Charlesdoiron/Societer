import { css, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'garnett_regular_italic';
    src: url('fonts/garnett_italic-webfont.eot');
    src: url('fonts/garnett_italic-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/garnett_italic-webfont.woff2') format('woff2'),
         url('fonts/garnett_italic-webfont.woff') format('woff'),
         url('fonts/garnett_italic-webfont.ttf') format('truetype'),
         url('fonts/garnett_italic-webfont.svg#garnett_regularitalic') format('svg');
    font-weight: normal;
    font-style: normal;

}




@font-face {
    font-family: 'garnett_medium_italic';
    src: url('fonts/garnett_medium_italic-webfont.eot');
    src: url('fonts/garnett_medium_italic-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/garnett_medium_italic-webfont.woff2') format('woff2'),
         url('fonts/garnett_medium_italic-webfont.woff') format('woff'),
         url('fonts/garnett_medium_italic-webfont.ttf') format('truetype'),
         url('fonts/garnett_medium_italic-webfont.svg#garnett_mediumitalic') format('svg');
    font-weight: normal;
    font-style: normal;

}




@font-face {
    font-family: 'garnett_medium';
    src: url('fonts/garnett_medium-webfont.eot');
    src: url('fonts/garnett_medium-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/garnett_medium-webfont.woff2') format('woff2'),
         url('fonts/garnett_medium-webfont.woff') format('woff'),
         url('fonts/garnett_medium-webfont.ttf') format('truetype'),
         url('fonts/garnett_medium-webfont.svg#garnett_mediumregular') format('svg');
    font-weight: 500;
    font-style: normal;

}




@font-face {
    font-family: 'garnett_regular';
    src: url('fonts/garnett_regular-webfont.eot');
    src: url('fonts/garnett_regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/garnett_regular-webfont.woff2') format('woff2'),
         url('fonts/garnett_regular-webfont.woff') format('woff'),
         url('fonts/garnett_regular-webfont.ttf') format('truetype'),
         url('fonts/garnett_regular-webfont.svg#garnett_regularregular') format('svg');
    font-weight: 500;
    font-style: normal;

}




@font-face {
    font-family: 'garnett_bold';
    src: url('fonts/garnett-bold-webfont.eot');
    src: url('fonts/garnett-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/garnett-bold-webfont.woff2') format('woff2'),
         url('fonts/garnett-bold-webfont.woff') format('woff'),
         url('fonts/garnett-bold-webfont.ttf') format('truetype'),
         url('fonts/garnett-bold-webfont.svg#garnettbold') format('svg');
    font-weight: bold;
    font-style: normal;

}



   html {
      box-sizing: border-box;
      margin:0;
      padding:0;
      background-color: #101010;
    }
    body {
      margin:0;
      padding:0;
      font-weight: 400;
      line-height: 24px;
      height:100vh;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

    }
    html,
    body {
      min-height: 100%;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    :root {
      -moz-tab-size: 4;
      tab-size: 4;
    }
`;

export default GlobalStyles;
