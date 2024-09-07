import React, { useState, useEffect } from "react";
import { NavProdutos } from "../styled";

// Componente responsável pela troca de imagens dentro de cada quadrado verde
const ProdutoVerde = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Troca a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
    }, [images.length]);

    return (
        <div 
            className="quadro-verde"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%', // Largura total do quadrado
                height: '100%', // Altura total do quadrado
            }}
        />
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
                <li>Produto</li>
                <li>Produto</li>
                <li>Produto</li>
                <li>Produto</li>
                <li>Produto</li>
                <li>Produto</li>
            </ul>
            </div>

            {/* Linha 2: Banner com troca de imagens */}
            <div className="div2">
                <div id="banner-produtos" style={{
                            backgroundImage: `url(${images[currentImageIndex]})`,
                            backgroundSize: 'cover',     // A imagem cobrirá todo o banner
                            backgroundPosition: 'center', // Centraliza a imagem
                            backgroundRepeat: 'no-repeat', // Não repete a imagem
                            width: '100%',               // Ajusta à largura total do banner
                            height: '500px'              // Altura fixa do banner
                        }}
                    >
                    <h1>Banner</h1>
                </div>
            </div>

            {/* Linha 3: Título "Seção Produtos" */}
            <div className="div3">
            <h2 className="titulo-secao-produtos">Seção Produtos</h2>
            </div>

            {/* Linha 4: 4 Quadros Verdes */}
            <div className="div4">
            <ul className="lista-secao-produtos">
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
            </ul>
            </div>

            {/* Linha 5: Quadrados "Artigos" */}
            <div className="div5">
            <div className="quadrado-branco">Artigo</div>
            <div className="lado-direito">
                <div className="quadrado-menor">Artigo</div>
                <div className="quadrado-menor">Artigo</div>
            </div>
            </div>

            {/* Linha 6: Título "Seção Produtos" */}
            <div className="div6">
            <h2 className="titulo-secao-produtos">Seção Produtos</h2>
            </div>

            {/* Linha 7: 7 Quadros Verdes */}
            <div className="div7">
            <ul className="lista-secao-produtos">
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
            </ul>
            </div>

            {/* Linha 8: Título "Seção Produtos" */}
            <div className="div8">
            <h2 className="titulo-secao-produtos">Seção Produtos</h2>
            </div>

            {/* Linha 9: 9 Quadros Verdes */}
            <div className="div9">
            <ul className="lista-secao-produtos">
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
            </ul>
            </div>

            {/* Linha 10: Título "Seção Produtos" */}
            <div className="div10">
            <h2 className="titulo-secao-produtos">Seção Produtos</h2>
            </div>

            {/* Linha 11: 11 Quadros Verdes */}
            <div className="div11">
            <ul className="lista-secao-produtos">
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
                <li className="quadro-verde">Produto</li>
            </ul>
            </div>

            <div className="div5">
            <div className="quadrado-branco">Artigo</div>
            <div className="lado-direito">
                <div className="quadrado-menor">Artigo</div>
                <div className="quadrado-menor">Artigo</div>
            </div>
            </div>

        </div>
        </NavProdutos>
    );
    };

export default Produtos;
