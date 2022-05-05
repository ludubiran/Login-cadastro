
import react, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const CadastroPage = () => {

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [date, setDate] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit, { nome, date, email, password} ");
    }
    return (
        <div id="login">
            <h1 className="title">CADASTRE-SE</h1>
            <form className="form" onSubmit={handleSubmit} >

                <div className="field">
                    <label htmlFor="text">Nome Completo</label>
                    <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="date">Data de Nascimento </label>
                    <input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
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
                <Link to="/LoginPage"  >Acessar com meu login</Link>
            </div>
        </div>
    )
}



export default CadastroPage;