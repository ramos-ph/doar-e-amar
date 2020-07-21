import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import './styles.css'
import logo from '../../assets/img/logo.png'

function Navbar () {
  const history = useHistory()

  function handleLogout () {
    localStorage.clear()

    history.push('/')
  }

  return (
    <div className="navbar-container">
      <div className="upper-bar">
        <div className="bar-content">
          <img src={logo} alt="Doar & Amar" />

          <Link to="/dashboard">Início</Link>
          <Link to="/new">Nova doação</Link>
          <Link to="/monetary">Doação monetária</Link>
        </div>

        <button onClick={handleLogout}>
          Sair
          <FiArrowRight size={17} color="#FFF" />
        </button>
      </div>

      <div className="lower-bar">
        <strong>{document.title.split('|')[0]}</strong>
      </div>
    </div>
  )
}

export default Navbar
