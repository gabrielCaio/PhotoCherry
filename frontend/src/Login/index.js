import React from 'react'
import './styles.css'
import logo from '../Assets/Logo/LogoPhotoCherry.png'

export default function Login() {
    return(
        <>
        <div className="imagem">
            <img src={logo} alt="logo"/>
            <h1>PhotoCherry</h1>
        </div>
        <div className="forms">
            <form>
                <input id='usuario' type="text" placeholder='Usuário'/>
                <input id='senha' type="password" placeholder='Senha'/>
            </form>

            <button id='botaologin'>Login</button>

            <a href="/">Registre-se</a>

        </div>
        </>
    );
}