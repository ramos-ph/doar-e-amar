import React from 'react'

import './styles.css'

import logo from '../../assets/img/doar-e-amar.png'

export default function Header () {
  return (
    <header>
      <div className="navbar">
        <img src={logo} alt="Logo" title="Doar e Amar" />

        <nav role="navigation">
          <a className="nav-link" href="#painel">Início</a>
          <a className="nav-link" href="#doar">Faça sua doação</a>
          <a className="nav-link" href="#sobre">Sobre nós</a>
          <a className="nav-link" href="#parceiros">Parceiros</a>
          <a className="nav-link" href="#fale-conosco">Fale Conosco</a>
        </nav>

        <div className="signin-options">
          <button id="signin" className="header-btn">Entrar</button>
          <button id="signup" className="header-btn">Cadastre-se</button>
        </div>
      </div>
    </header>
  )
}
