import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import CadastroPage from './Cadastro/Page/CadastroPage'


const LoginPage = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit, { email, password} ");
    }
    return (
        <div id="login">
            <h1 className="title">LOGIN </h1>
            <form className="form" onSubmit={handleSubmit} >

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
            <div>
                <Link to="/CadastroPage"  >Não tem conta?    cadastre-se</Link>
            </div>
        </div>
    )
}



export default LoginPage;