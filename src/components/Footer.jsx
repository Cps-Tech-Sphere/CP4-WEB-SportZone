import Logo from "../assets/Logo/logo-vazada.png"
import { FooterRodape } from "../styled"

const Footer =()=>{

    return (
        <FooterRodape>
            <div className="info">
                <p>Sobre Nós</p>
                <p>Termos de Serviço</p>
                <p>Política de Privacidade</p>
            </div>

            <div id="logo">
                <img src={Logo} alt="logo" width='60'/>
                <h1>SportZone</h1>
            </div>

            <ul className="alunos">
                <li><a href="">Ianny Raquel</a></li>
                <li><a href="">Jean Matheus</a></li>
                <li><a href="">João Victor Soave</a></li>
                <li><a href="">Maria Alice</a></li>
                <li><a href="">Thiago Oliveira</a></li>
            </ul>
            
        </FooterRodape>
    )
}

export default Footer
