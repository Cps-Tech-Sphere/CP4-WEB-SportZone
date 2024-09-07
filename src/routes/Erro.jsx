import { MainErro } from '../styled'
import { Link } from "react-router-dom"

const Erro =()=>{

    return (
        <MainErro>
            <div>
                <p>Uh-oh....</p>
                <p>A página que você procura deve ter sido movida, deletada ou nunca existiu.</p>
                <h1>404</h1>
            </div>
            
        </MainErro>
    )
}

export default Erro