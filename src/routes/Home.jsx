import { MainGeral } from "../styled"
import catAcademia from '../assets/Categorias/academia.jpg'
import catCorrida from '../assets/Categorias/corrida.jpg'
import catAventura from '../assets/Categorias/aventura.jpg'
import catNatacao from '../assets/Categorias/natacao.jpg'
import catFutebol from '../assets/Categorias/futebol.jpg'
import Nadador from '../assets/Esportes/nadador.jpg'
import Banner from '../assets/banner-principal.jpg'
import BolsaTermicaCard from "../assets/Produtos/Promoção/Bolsa Termica para Garrafa/bolsaTermica01-garrafa-promo.webp"
import BolsaTrilha from '../assets/Produtos/Promoção/Bolsa de Trilha/bolsaTrilha01-promo.webp'
import Garrafinha from '../assets/Produtos/Promoção/Garrafa de Água/garrafa01-promo.jpg'
import MaioFemininoAzul from '../assets/Produtos/Promoção/Maio Feminino de Natação/maioFeminino01-azul-promo.webp'
import Nadadeira from '../assets/Produtos/Promoção/Nadareira de Natação/nadadeiraNatacao01-promo.webp'
import CamisaCorrida from '../assets/Produtos/Corrida/camisa-corrida.jpg'
import Tocanatacao from '../assets/Produtos/Natação/toca-natacao.jpg'
import BolaFutebol from '../assets/Produtos/Futebol/bola-futebol.jpg'
import OculosNatacao from '../assets/Produtos/Natação/oculos-natacao.jpg'
import Tenis from '../assets/Produtos/Corrida/tenis-corrida.jpg'


const Home =()=>{


    const initSlider = (container) => {
        const imageList = container.querySelector('.card-list');
        const slideButtons = container.querySelectorAll('.slide-button');
        const sliderScrollbar = container.querySelector('.slider-scrollbar');
        const scrollbarThumb = sliderScrollbar.querySelector('.scrollbar-thumb');
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

        scrollbarThumb.addEventListener('mousedown', (e) => {
            const startX = e.clientX;
            const thumbPosition = scrollbarThumb.offsetLeft;

            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const newThumbPosition = thumbPosition + deltaX;
                const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

                const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

                scrollbarThumb.style.left = `${boundedPosition}px`;
                imageList.scrollLeft = scrollPosition;
            }

            const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            }

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });

        slideButtons.forEach(button => {
            button.addEventListener('click', () => {
                const direction = button.id.includes('prev') ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        });

        const handleSlideButtons = () => {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
        }

        const updateScrollThumbPosition = () => {
            const scrollPosition = imageList.scrollLeft;
            const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
            scrollbarThumb.style.left = `${thumbPosition}px`;
        }

        imageList.addEventListener('scroll', () => {
            handleSlideButtons();
            updateScrollThumbPosition();
        });

        // Inicializar visibilidade dos botões
        handleSlideButtons();
    }

    window.addEventListener('load', () => {
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            initSlider(container);
        });
    });
    
    return (
        <MainGeral>
            <section className="banner-container">
                <img src={Banner} alt="" />
            </section>
            <section className="container-categorias">
                <ul className="categorias">
                <li className="categorias-list">
                        <a href="" className="categorias-link">
                            <img src={catAcademia} alt="image" />
                            <div className="categorias-name">
                                <h1>Academia</h1>
                            </div>
                        </a>
                    </li>
                    <li className="categorias-list">
                        <a href="" className="categorias-link">
                            <img src={catAventura} alt="image" />
                            <div className="categorias-name">
                                <h1>Aventuras</h1>
                            </div>
                        </a>
                    </li>
                    <li className="categorias-list">
                        <a href="" className="categorias-link">
                            <img src={catCorrida} alt="image" />
                            <div className="categorias-name">
                                <h1>Corrida</h1>
                            </div>
                        </a>
                    </li>
                    <li className="categorias-list">
                        <a href="" className="categorias-link">
                            <img src={catFutebol} alt="image" />
                            <div className="categorias-name">
                                <h1>Futebol</h1>
                            </div>
                        </a>
                    </li>
                    <li className="categorias-list">
                        <a href="" className="categorias-link">
                            <img src={catNatacao} alt="image" />
                            <div className="categorias-name">
                                <h1>Natação</h1>
                            </div>
                        </a>
                    </li>
                    
                </ul>
            </section>
            <section className="container">
                <div className="container-title">
                    <h1>Os mais populares</h1>
                </div>
                <div className="card-container">
                    <button id="prevSlide" className="slide-button material-symbols-outlined">chevron_left</button>
                    <ul className="card-list">
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={CamisaCorrida} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Camisate de Corrida Proteção UV </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$109,99</h1>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={BolaFutebol} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Bola de Futebol GHY Vermelha</h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$66,97</h1>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={BolsaTermicaCard} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Bolsa Térmica HW - Porta Garrafa </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$82,42</h1>
                                    <h3 className="card-priceOriginal">R$109,90</h3>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={Tenis} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Tênis Para Corrida</h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$123,89</h1>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={OculosNatacao} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Óculos de Natação Profissional</h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$40,56</h1>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={Garrafinha} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Garrafinha Térmica MetalGT Cor Azul </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$55,90</h1>
                                    <h3 className="card-priceOriginal">R$99,90</h3>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={BolsaTermicaCard} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Bolsa Térmica HW - Porta Garrafa </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$82,42</h1>
                                    <h3 className="card-priceOriginal">R$109,90</h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <button id="nextSlide" className="slide-button material-symbols-outlined">chevron_right</button>
                    <div className="slider-scrollbar">
                        <div className="scrollbar-track">
                            <div className="scrollbar-thumb"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="revender-container">
                <div className="revender-banner">
                    <img src={Nadador} alt="Banner Seja Revendedor" />
                    <p>SEJA REVENDEDOR SPORTZONE</p>
                </div>
                <div className="form-wrapper">
                    <h2>Se inscreva aqui</h2>
                    <form>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Telefone" />
                    <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>
            <section className="container">
                <div className="container-title">
                    <h1>Com o preço mais baixo</h1>
                </div>
                <div className="card-container">
                    <button id="prevSlide" className="slide-button material-symbols-outlined">chevron_left</button>
                    <ul className="card-list">
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={BolsaTermicaCard} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Bolsa Térmica HW - Porta Garrafa </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$82,42</h1>
                                    <h3 className="card-priceOriginal">R$109,90</h3>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={MaioFemininoAzul} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Maio Feminino de Natação Azul</h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$49,90</h1>
                                    <h3 className="card-priceOriginal">R$75,65</h3>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={Nadadeira} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Nadadeira Profissional Cor Rose </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$178,99</h1>
                                    <h3 className="card-priceOriginal">R$109,90</h3>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={Garrafinha} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Garrafinha Térmica MetalGT Cor Azul </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$55,90</h1>
                                    <h3 className="card-priceOriginal">R$99,90</h3>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={BolsaTrilha} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Bolsa Para Trilha Cor Amarela </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$139,90</h1>
                                    <h3 className="card-priceOriginal">R$234,99</h3>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={Tocanatacao} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Touca de Natação Cor Azul </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$19,99</h1>
                                    <h3 className="card-priceOriginal">R$44,99</h3>
                                </div>
                            </a>
                        </li>
                        <li className="card-item">
                            <a href="" className="card-link">
                                <img src={BolsaTermicaCard} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Bolsa Térmica HW - Porta Garrafa </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$82,42</h1>
                                    <h3 className="card-priceOriginal">R$109,90</h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <button id="nextSlide" className="slide-button material-symbols-outlined">chevron_right</button>
                    <div className="slider-scrollbar">
                        <div className="scrollbar-track">
                            <div className="scrollbar-thumb"></div>
                        </div>
                    </div>
                </div>
            </section>
        </MainGeral>
    )
}

export default Home