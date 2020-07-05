/* eslint-disable react/prop-types */
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'
import logo from '../../assets/img/logo.png'

export default function Header () {
  return (
    <header id="header-home">
      <div className="navbar">
        <img src={logo} alt="Logo" title="Doar e Amar" />

        <nav role="navigation">
          <Link className="nav-link" to="/">Início</Link>
          <Link className="nav-link" to="/">Sobre</Link>
          <Link className="nav-link" to="/">Dúvidas frequentes</Link>
        </nav>

        <button className="header-btn">
            Participe
          <FiArrowRight size={17} color="#FFF" />
        </button>
      </div>
    </header>
  )
}
