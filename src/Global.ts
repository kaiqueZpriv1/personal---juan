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
    ::selection{
        background-color: #ba181b;
        color: #ced4da;
    }
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 15px;
        background-color: #ba181b;
        display: none;
    }
    ::-webkit-scrollbar-track{
        background: #25262b;
    }
`;
