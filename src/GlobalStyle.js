import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Epilogue", sans-serif;
    }
    body{
        background-color: hsl(0, 0%, 98%);
    }
`;
