import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import logo from '../../assets/img/icons/logo.png'
import next from '../../assets/img/icons/next.svg'

export default function Header () {
  return (
    <header id="header-home">
      <div className="navbar">
        <img src={logo} alt="Logo" title="Doar e Amar" />

        <nav role="navigation">
          <Link className="nav-link" to="/">Início</Link>
          <Link className="nav-link" to="/">Sobre</Link>
          <Link className="nav-link" to="/">Quem somos</Link>
          <Link className="nav-link" to="/">Blog</Link>

          <Link className="header-btn" to="/signin">Participe
            <img src={next} alt=">" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
