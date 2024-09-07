import React, { useState, useEffect } from "react";
import { NavProdutos } from "../styled";

import BolsaTermica from "../assets/Produtos/Promoção/Bolsa Termica para Garrafa/bolsaTermica01-garrafa-promo.webp"
import BolsaTrilha from '../assets/Produtos/Promoção/Bolsa de Trilha/bolsaTrilha01-promo.webp'
import Garrafinha from '../assets/Produtos/Promoção/Garrafa de Água/garrafa01-promo.jpg'
import MaioFemininoAzul from '../assets/Produtos/Promoção/Maio Feminino de Natação/maioFeminino01-azul-promo.webp'
import Nadadeira from '../assets/Produtos/Promoção/Nadareira de Natação/nadadeiraNatacao01-promo.webp'
import CamisaCorrida from '../assets/Produtos/Corrida/camisa-corrida.webp'
import Tocanatacao from '../assets/Produtos/Natação/toca-natacao.jpg'
import BolaFutebol from '../assets/Produtos/Futebol/bola-futebol.jpg'
import OculosNatacao from '../assets/Produtos/Natação/oculos-natacao.jpg'
import Tenis from '../assets/Produtos/Corrida/tenis-corrida.jpeg'
import Casaco from '../assets/Produtos/Trilha/casaco-trilha.jpg'
import OculosCorrida from '../assets/Produtos/Corrida/oculos-corrida.jpg'
import Chuteira from '../assets/Produtos/Futebol/chuteira-futebol.jpg'
import LuvaFutebol from '../assets/Produtos/Futebol/luva-futebol.jpg'
import TenisTrilha from '../assets/Produtos/Trilha/tenis-trilha.jpg'
import MaioNatacao from '../assets/Produtos/Natação/maio-natacao.jpg'
import MochilaTrilha from '../assets/Produtos/Trilha/mochila-trilha.jpg'


// Componente responsável pela troca de imagens dentro de cada quadrado verde
const ProdutoVerde = ({ image, name, price }) => {
  const handleClick = () => {
    // Adicione a lógica para o que deve acontecer ao clicar no botão
    alert(`Você comprou ${name}`);
  };

  return (
    <div className="quadro-verde">
      <img src={image} alt={name} className="quadro-imagem" />
      <div className="quadro-conteudo">
        <p className="quadro-nome">{name}</p>
        <p className="quadro-preco">{price}</p>
        <button className="quadro-botao" onClick={handleClick}>Comprar</button>
      </div>
    </div>
  );
};

const Produtos = () => {
  // Array de URLs das imagens para o banner
  const images = [
    './src/assets/esportes/ciclista.jpg', // Substitua pelo caminho correto das imagens
    './src/assets/esportes/nadador.jpg',
    './src/assets/esportes/pilotomoto.jpg'
  ];

  // Estado para controlar a imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para trocar a imagem a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [images.length]);

  return (
    <NavProdutos>
      <div className="parent">
        {/* Linha 1: Lista de Produtos */}
        <div className="div1">
          <ul className="lista-produtos">
            <li>Academia</li>
            <li>Aventura</li>
            <li>Ciclismo</li>
            <li>Corrida</li>
            <li>Futebol</li>
            <li>Natação</li>
          </ul>
        </div>

        {/* Linha 2: Banner com troca de imagens */}
        <div className="div2">
          <div id="banner-produtos" style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '500px'
          }}>
          </div>
        </div>

        {/* Linha 4: 4 Quadros Verdes */}
        <div className="div">
          <ul className="lista-secao-produtos">
            <li><ProdutoVerde image={BolaFutebol} name="Bola de Futebol POP Cor Vermelha" price="R$ 49,90" /></li>
            <li><ProdutoVerde image={CamisaCorrida} name="Camisa de Corrida Proteção UV" price="R$ 89,90" /></li>
            <li><ProdutoVerde image={OculosNatacao} name="Óculos de Natação Profissional" price="R$ 42,89" /></li>
            <li><ProdutoVerde image={Tenis} name="Tênis de Corrida FREW12" price="R$ 119,99" /></li>
          </ul>
        </div>

        {/* Linha 7: 7 Quadros Verdes */}
        <div className="div">
          <ul className="lista-secao-produtos">
            <li><ProdutoVerde image={MaioFemininoAzul} name="Maio Feminino Para Natação" price="R$ 86,99" /></li>
            <li><ProdutoVerde image={Garrafinha} name="Garrafinha Térmica Cor Azul" price="R$ 79,90" /></li>
            <li><ProdutoVerde image={Casaco} name="Casaco Para Trilhas" price="R$ 369,89" /></li>
            <li><ProdutoVerde image={Tocanatacao} name="Touca de Natação Emburrachada" price="R$ 36,89" /></li>
          </ul>
        </div>

        {/* Linha 9: 9 Quadros Verdes */}
        <div className="div">
          <ul className="lista-secao-produtos">
            <li><ProdutoVerde image={OculosCorrida} name="Óculos de Corrida Proteção Solar" price="R$ 74,60" /></li>
            <li><ProdutoVerde image={TenisTrilha} name="Sapato Trilhas Profissionais" price="R$ 189,90" /></li>
            <li><ProdutoVerde image={Chuteira} name="Chuteira Cravo Futebol Líder" price="R$ 159,99" /></li>
            <li><ProdutoVerde image={LuvaFutebol} name="Luva Goleiro Profissional" price="R$ 109,90" /></li>
          </ul>
        </div>

        {/* Linha 11: 11 Quadros Verdes */}
        <div className="div">
          <ul className="lista-secao-produtos">
            <li><ProdutoVerde image={MaioNatacao} name="Maio Para Natação Feminino" price="R$ 89,78" /></li>
            <li><ProdutoVerde image={MochilaTrilha} name="Mochila Trilhas Profissionais" price="R$ 269,90" /></li>
            <li><ProdutoVerde image={BolsaTrilha} name="Bolsa GABYE20 Cor Amarala" price="R$ 117,89" /></li>
            <li><ProdutoVerde image={BolsaTermica} name="Bolsa Térmica Trilhas" price="R$ 96,89" /></li>
          </ul>
        </div>
      </div>
    </NavProdutos>
  );
};

export default Produtos;
