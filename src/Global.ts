import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #25262b;
    }
    h1, h3{
        font-family: 'Inter', sans-serif;
    }
    p, span, a, button{
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
    }
`;
