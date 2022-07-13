import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        overflow: hidden;
        box-sizing: border-box;
        /* outline: 1px solid magenta; */
        font-family: "Epilogue", sans-serif;
    }
    body{
        font-weight: 500;
        background-color: hsl(0, 0%, 98%);
    }
`;
