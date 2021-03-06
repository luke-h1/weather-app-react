import { normalize } from 'polished';
import { css, Global } from '@emotion/react';

export const Reset = (
  <Global
    styles={css`
      ${normalize()}
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html {
        font-size: 16px;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        font-family: 'Noto Sans JP';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #fff;
        overflow-x: hidden;
      }
      a {
        color: #000 !important;
        text-decoration: none;
        padding: 0;
      }
    `}
  />
);
