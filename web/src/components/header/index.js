import React from 'react'

import './styles.css'

import logo from '../../assets/img/doar-e-amar.png'
import next from '../../assets/img/icons/next.svg'

export default function Header () {
  return (
    <header id="header-home">
      <div className="navbar">
        <img src={logo} alt="Logo" title="Doar e Amar" />

        <nav role="navigation">
          <a className="nav-link" href="#painel">Início</a>
          <a className="nav-link" href="#sobre">Sobre</a>
          <a className="nav-link" href="#parceiros">Quem somos</a>
          <a className="nav-link" href="#painel">Blog</a>

          <button className="header-btn">Participe
            <img src={next} alt=">" />
          </button>
        </nav>
      </div>
    </header>
  )
}
