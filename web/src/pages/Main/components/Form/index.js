import React from 'react'

import './styles.css'

function Form () {
  return (
    <form className="form-container">
      <legend calssName="form-legend">Entrar</legend>

      <label htmlFor="email-input">SEU E-MAIL *</label>
      <input type="email" placeholder="Seu e-mail" id="email-input" />

      <label htmlFor="pwd-input">SUA SENHA *</label>
      <input type="password" placeholder="Sua senha" id="pwd-input" />

      <button>Acessar</button>
    </form>
  )
}

export default Form
