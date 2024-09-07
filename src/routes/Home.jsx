import { MainGeral } from "../styled"
import BolsaTermicaCard from "../assets/Produtos/Promoção/Bolsa Termica para Garrafa/bolsaTermica01-garrafa-promo.webp"
import catAcademia from '../assets/Categorias/academia.jpg'
import catCorrida from '../assets/Categorias/corrida.jpg'
import catAventura from '../assets/Categorias/aventura.jpg'
import catNatacao from '../assets/Categorias/natacao.jpg'
import catFutebol from '../assets/Categorias/futebol.jpg'


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
                <img src="" alt="" />
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
                                <img src={BolsaTermicaCard} alt="card-image" className="card-image"/>
                                <p className="bagde">25% OFF</p>
                                <h3 className="card-title">Bolsa Térmica HW - Porta Garrafa </h3>
                                <div className="card-price">
                                    <h1 className="card-priceSale">R$82,42</h1>
                                    <h3 className="card-priceOriginal">R$109,90</h3>
                                </div>
                                <button className="card-button">
                                    <h3>VER</h3>
                                </button>
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
                                <button className="card-button">
                                    <h3>VER</h3>
                                </button>
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
                                <button className="card-button">
                                    <h3>VER</h3>
                                </button>
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
                                <button className="card-button">
                                    <h3>VER</h3>
                                </button>
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
                                <button className="card-button">
                                    <h3>VER</h3>
                                </button>
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
                                <button className="card-button">
                                    <h3>VER</h3>
                                </button>
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
                                <button className="card-button">
                                    <h3>VER</h3>
                                </button>
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