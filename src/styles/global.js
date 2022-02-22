import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root{
        --primary: #FF577F;
        --primary-focus: #FF427F;
        --primary-negative: #59323F;
        --grey0: #F8F9FA;
        --grey1: #868E96;
        --grey2: #343B41;
        --grey3: #212529;
        --grey4: #121214;
        --sucess: #3FE864;
        --negative: #E83F5B;
    }
    body{
        background-color: #121214;
        font-family: 'Inter', sans-serif;
        color: white;
    }
    h1,h2,h3{
        font-weight: 700;
    }
    p{
        font-size: 12px;
        font-weight: 400;
    }
    button{
        cursor: pointer;
    }
`;
