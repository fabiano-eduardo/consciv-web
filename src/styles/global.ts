import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        // Colors
        --color-green-main: #175641;

        // Sizes
        --header-height: 76px;
        --header-height-mobile: 40px;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }
`;