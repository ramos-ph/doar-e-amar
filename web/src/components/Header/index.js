/* eslint-disable react/prop-types */
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'

import logo from '../../assets/img/logo.png'

export default function Header ({ setIsModalShown, isLoggedIn }) {
  return (
    <header id="header-home">
      <div className="navbar">
        <img src={logo} alt="Logo" title="Doar e Amar" />

        <nav role="navigation">
          {isLoggedIn ? (
            <>
              <Link className="nav-link" to="/">Minhas doações</Link>
              <Link className="nav-link" to="/">Nova doação</Link>
              <Link className="nav-link" to="/">Meu perfil</Link>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/">Início</Link>
              <Link className="nav-link" to="/">Sobre</Link>
              <Link className="nav-link" to="/">Dúvidas frequentes</Link>
              <button
                onClick={() => setIsModalShown(true)}
                className="nav-link"
                style={{
                  background: 'none',
                  border: 'none'
                }}>Login</button>
            </>
          )}
        </nav>

        <Link className="header-btn" to="/">{isLoggedIn ? 'Sair' : 'Participe'}
          <FiArrowRight size={17} color="#FFF" />
        </Link>
      </div>
    </header>
  )
}
