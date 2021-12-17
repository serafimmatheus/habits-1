import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
    *{
        box-sizing: border-box;
    }

    :root {
        --white: #f9f9f9;
        --black: #0c0d0d;
        --red: #830000;
        --coriander: #bdb496;
        --dark-goldenrod: #bd9700;
        --black-russian: #03031b;
        --log-cabin: #413e35;
        --winter-hazel: #d2c57c;
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        font-family: 'Roboto Mono', monospace;
        line-height: 1;
        color: var(--black-russian);
        background-color: var(--white);

    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    .MuiButtonBase-root {
        gap: 10px;
    }

    button{
        cursor: pointer;
    }
`;

// Tipografia do Projeto
// font-family: 'PT Serif', serif;
// font-family: 'Roboto Mono', monospace;
