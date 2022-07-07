import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        overflow: hidden;
        outline: 1px solid magenta;
        box-sizing: border-box;
        
    }
    body{
        height: 100vh;
        font-weight: 500;
        background-color: hsl(0, 0%, 98%);
        font-family: "Epilogue", sans-serif;
    }
`;
