import { NavContato } from "../styled";

const Contato = () => {
    return (
        <NavContato>
            <div className="container">
                <h1>Contate-nos</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefone:</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Assunto:</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </NavContato>
    );
};

export default Contato;
