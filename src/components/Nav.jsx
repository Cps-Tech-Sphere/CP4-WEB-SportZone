import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/Logo/logo-preenchida.png'
import ImgPerfil from '../assets/Icones/perfil-icon.png'
import { NavMenu } from "../styled"

const Nav =()=>{

    return (
        <NavMenu>
            <div id="logo">
                <img src={Logo} alt="logo" width='70'/>
                <h1>SportZone</h1>
            </div>
            <div className="navegacao">
                <Link to='/'>Home</Link>
                <Link to='/produtos'>Produtos</Link>
                <Link to='/contato'>Contato</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='#'><img src={ImgPerfil} alt="perfil" width='50px' id="perfil"/></Link>
            </div>
            
        </NavMenu>
    )
}

export default Nav
