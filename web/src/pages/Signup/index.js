import React from 'react'
import { FaSmileBeam, FaHandHoldingHeart } from 'react-icons/fa'

import './styles.css'

function Signup () {
  return (
    <div className="signup-container">
      <h1>Criar conta</h1>

      <div className="select-type">
        <button className="common-user" style={{ borderColor: '#ffc10799' }}>
          <FaSmileBeam size={86} color="#ffc107" />

          <ul className="details">
            <h2>Quero apenas doar</h2>

            <li>Para todos</li>
            <li>Faça o bem</li>
            <li>Ajude o próximo</li>
          </ul>
        </button>

        <button className="ngo" style={{ borderColor: '#0abde399' }}>
          <FaHandHoldingHeart size={86} color="#0abde3" />

          <ul className="details">
            <h2>Quero receber doações</h2>

            <li>Para ONGs</li>
            <li>Transmita o bem</li>
            <li>Prático e intuitivo</li>
          </ul>
        </button>
      </div>

      <legend>Já tem uma conta? Acesse aqui!</legend>
    </div>
  )
}

export default Signup
