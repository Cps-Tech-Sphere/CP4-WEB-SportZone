import styled from "styled-components";

export const CorpoSite = styled.body`
    margin: 0;
    padding: 0;
    background: #333333;
`

export const NavMenu = styled.nav`
    width: 100%;
    min-height: 15vh;
    padding: 5px;
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    
    #logo {
        display: flex;
        margin-left: 5vw;
        justify-content: flex-start;
        align-items: center;

        h1 {
        font-size: 2.3em;
        color: #ffffff;
        padding: 10px;
        }
    }

    .navegacao {
        margin-right: 5vw;
        justify-content: flex-end;
        display: flex;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: #ffffff;
        font-size: 1.1em;
        padding: 20px;
    }

    a:hover {
        color: #00ff99;
    }
`;

export const FooterRodape = styled.footer`
    width: 100%;
    min-height: 5vh;
    padding: 15px;
    background-color: #1e1e1e;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
        margin-left: 25vw;

        p {
        color: white;
        text-align: end;
        font-size: 0.9em;
        font-weight: bold;
        padding: 7px;
        }

        p:hover {
        color: #00ff99;
        }
    }

    #logo {
        display: flex;
        align-items: center;

        h1 {
        padding: 10px;
        color: #ffffff;
        }
    }

    .alunos {
        margin-right: 25vw;
        padding: 20px;

        li {
        list-style: none;
        padding: 7px;
        }

        li a {
        font-size: 0.9em;
        font-weight: bold;
        color: #ffffff;
        text-align: start;
        text-decoration: none;
        }

        li a:hover {
        color: #00ff99;
        }
    }
    `;

export const MainGeral = styled.main`
    padding-top: 10vh;
    flex-grow: 1;
    margin: 0;
    width: 100%;

    .banner-container img {
        width: 100%;
        max-height: 600px;
        margin: 0;
    }

    .container-categorias {
        display: flex;
        justify-content: center;
        margin: 50px 5vw;
    }

    .categorias {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .categorias-list {
        margin: 0 20px;
    }

    .categorias-link {
        position: relative;
        display: block;
        text-align: center;
    }

    .img-container {
        position: relative;
    }

    .categorias-name {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    }

    .categorias-list img {
        display: block;
        max-width: 200px; /* Ajuste o tamanho da imagem conforme necessário */
        min-height: 200px;
        border-radius: 100%;
    }

       /* Slider Deslizante de Produtos */
       .container {
        margin-left: 5vw;
        margin-right: 5vw;
    }

    .container .container-title{
        color: #fff;
        font-size: 20px;
        padding: 20px 0;

    }

    .card-container {
        position: relative;
    }

    .card-container .slide-button {
        position: absolute;
        top: 50%;
        height: 40px;
        width: 40px;
        color: #fff;
        border: none;
        outline: none;
        background: #000;
        font-size: 1.5rem;
        cursor: pointer;
        border-radius: 50%;
        transform: translateY(-50%);
    }

    .card-container .slide-button:hover{
        background: #444;
    }

    .card-container .slide-button#prevSlide{
        left: -20px;
    }

    .card-container .slide-button#nextSlide{
        right: -20px;
    }

    .card-container .card-list {
        display: grid;
        gap: 18px;
        font-size: 0;
        margin-bottom: 30px;
        overflow-x: auto;
        scrollbar-width: none;
        grid-template-columns: repeat(7, 1fr);
    }

    .card-container .card-list::-webkit-scrollbar {
        display: none;
    }

    .container .slider-scrollbar {
        height: 24px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .slider-scrollbar .scrollbar-track {
        position: relative;
        height: 2px;
        width: 100%;
        background: #ccc;
        border-radius: 4px;
    }

    .slider-scrollbar:hover .scrollbar-track {
        height: 4px;
    }

    .slider-scrollbar .scrollbar-thumb {
        position: absolute;
        height: 100%;
        width: 50%;
        background: #000;
        border-radius: inherit;
        cursor: grab;
    }

    .slider-scrollbar .scrollbar-thumb:active {
        cursor: grabbing;
        height: 8px;
        top: -2px;
    }

    .slider-scrollbar .scrollbar-thumb::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -10px;
        bottom: -10px;
    }

    .card-list .card-item {
        list-style: none;
    }

    .card-list .card-item .card-link {
        width: 300px;
        display: block;
        background: #ffffff;
        padding: 18px;
        border-radius: 12px;
        text-decoration: none;
        border: 2px solid transparent;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.05);
        transition: 0.2s ease;
    }

    .card-list .card-item .card-link:hover {
        border-color: #5372f0;
    }

    .card-list .card-link .card-image {
        width: 100%;
        height: fit-content;
        aspect-ratio: 10 / 7;
        object-fit: cover;
        border-radius: 10px;
    }

    .card-list .card-link .bagde {
        color: #5372f0;
        padding: 8px 16 px;
        font-size: 0%.95rem;
        font-weight: bold;
        margin-top: 16px;
        background: #dde4ff;
        width: fit-content;
        border-radius: 50px;
        text-align: center;
        justify-content: center;

        .bagde p{
            padding: 20px;
        }
    }

    .card-item .card-link .card-price {
        color: #00995C;

        .card-priceOriginal {
            color: #0056B3;
        }
    }

    .card-list .card-link .card-title {
        margin-top: 10px;
        font-size: 0.9rem;
        color: #000;
        font-weight: 600;
    }

    .card-list .card-link .card-price{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;

        h1, h3 {
            margin: 0 10px 0 10px;
        }

        h1 {
            font-size: 25px;
        }

        h3 {
            font-size: small;
            text-decoration: line-through;
        }
    }

    .card-list .card-link .card-button {
        height: 50px;
        width: 50px;
        color: #5372f0;
        border-radius: 50%;
        background: none;
        cursor: pointer;
        border: 2px solid #5372f0;
        transition: 0.4s ease;
    }

    .card-list .card-link:hover .card-button {
        color: #fff;
        background: #5372f0;
    }

    .revender-container {
        display: flex;
        justify-content: space-between;
        padding: 50px 0;
        margin: 0 5vw;
    }

    .revender-banner{
        width: 100%;
        position: relative;
        border-radius: 30px;
        margin-right: 20px;
    }

    .revender-banner img {
        width: 100%;
        max-height: 240px;
        border-radius: 10px;
    }

    .revender-banner p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 3rem;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
        text-align: center;
    }

    .revender-banner-button {
        position: absolute;
        bottom: 20px;
        left: 20px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    .form-wrapper {
        width: 30%;
        color: white;

        h2{
            padding-bottom: 15px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form input {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    form button {
        padding: 10px;
        background-color: #00ff99;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    @media (max-width: 1023px) {
        .card-container .slide-button {
            display: none!important;
        }

        .card-container .card-list {
            gap: 10px;
            margin-bottom: 15px;
        }

        .card-container .card-list .card-image {
            width: 280px;
            height: 380px;
        }

        .slider-scrollbar .scrollbar-thumb {
            width: 20%;
        }
    }
`

export const NavProdutos = styled.nav`
    display: grid;
    place-items: center;
    text-decoration: none;
    width: 100%;
    overflow-x: hidden; 

    .parent {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(11, auto);
        grid-gap: 20px;
        width: 100%;
        background-color: #333333;
    }

    .lista-produtos {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding-top: 18vh;
        width: 100%; 
    }

    .lista-secao-produtos {
        display: flex;
        justify-content: center;
        gap: 20px;
        width: 100%; 
    }

    .lista-produtos li {
        list-style: none;
        padding: 20px;
        color: white;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }

    .lista-produtos li:hover {
        color: #00FF99;
    }

    .lista-secao-produtos li {
    list-style: none;
    padding: 20px;
    color: white;
    font-size: 18px;
    text-align: center;
    width: 271px;
    height: 262px;
    border-radius: 10px;
    transition: transform 0.3s ease; /* Suaviza a animação */
}

.lista-secao-produtos li:hover {
    transform: translateY(-10px); /* Move o quadrado verde para cima */
}

    .div li{
        margin-bottom: 150px;
    }

    /* ProductCard.css */
    .quadro-verde {
        border: 1px solid transparent;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        width: 100%;
        max-width: 300px;
        background-color: #fff;
    }

    .quadro-verde:hover {
        border: 2px solid #00FF99;
    }

    .quadro-imagem {
        width: 100%;
        height: auto;
    }

    .quadro-conteudo {
        padding: 20px;
        text-align: center;
    }

    .quadro-nome {
        font-size: 1.2em;
        margin: 5px 0;
        color: black;
    }

    .quadro-preco {
        font-size: 1.1em;
        color: #00995C;
        font-weight: bold;
        margin: 5px 0;
    }

    .quadro-botao {
        background-color: #00FF99;
        color: white; 
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    .quadro-botao:hover {
        background-color: #00995C;
    }

    #banner-produtos {
        background-color: #f2f0f0;
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0;
    }

    .titulo-secao-produtos {
        font-size: 36px;
        text-align: left;
        padding-left: 20px;
        width: 100%;
        color: white;
    }

    .quadrado-branco {
        background-color: white;
        width: 100%;
        padding: 50px;
        border-radius: 10px;
        grid-column: 1;
    }

    .quadrado-menor {
        background-color: white;
        width: 100%; 
        padding: 20px;
        border-radius: 10px;
    }

    .div5 {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto;
        gap: 20px;
        width: 100%;
    }

    .lado-direito {
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 20px;
    }
`;

export const NavSobre = styled.nav`
    background-color: #333333;
    margin: 0;
    padding: 0;
    text-decoration: none;
    width: 100%;
    overflow-x: hidden; 

    #banner-sobre{
        background-color: #f2f0f0;
        width: 100%;
        height: 176px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15vh;
        padding: 100px;
    }

    #titulo-sobre{
        margin: 0 3vw;
        color: white;
        font-size: 36px;
        padding: 50px;
        padding-bottom: 0;
    }

    .paragrafo-sobre{
        margin: 0 3vw;
        color: white;
        font-size: 22px;
        padding: 50px;
    }

    #parag1{
        padding: 0;
    }
    
    .paragrafo-sobre p {
        padding-top: 20px;
    }
`

export const NavContato = styled.nav`
    font-family: Arial, sans-serif;
    background-color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    margin-top: 14vh;
    
    .container {
        background: #1E1E1E;
        padding: 20px;
        border-radius: 50px;
        box-shadow: 5px 5px 15px rgba(0, 255, 153, 0.8); /* Sombra mais pronunciada na parte direita e embaixo */
        width: 100%;
        max-width: 900px;
        padding: 60px 200px;
        font-size: 30px;
    }
    h1 {
        text-align: center;
        color: white;
    }
    .form-group {
        margin-bottom: 15px;
    }
    .form-group label {
        display: block;
        margin-bottom: 5px;
        color: white;
        font-size: 24px;
    }
    .form-group input, .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 12px;
        box-sizing: border-box;
        color: #333333;
    }
    .form-group textarea {
        resize: vertical;
        height: 100px;
    }
    .form-group button {
        background-color: #00FF99;
        color: #0056B3;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }
    .form-group button:hover {
        background-color: #0056b3;
        color: #00FF99;
    }
`;

export const MainErro = styled.main`
    width: 100%;
    max-height: 100vh;
    background: #0056B3;
    text-align: center;
    margin-top: 14.85%;
    color: #fff;

    p{
        font-size: 30px;
        padding: 20px;
    }

    h1{
        font-size: 300px;
        text-shadow: 2px 2 px 4px #00FF99;
    }

    .voltar-button a{
        border: none;
        background: #00FF99;
        color: #0056B3;
        font-size: 20px;
    }
`
