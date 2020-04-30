import React from 'react'

import './styles.css'

function Form () {
  return (
    <form className="form-container">
      <legend>Entrar</legend>

      <label htmlFor="email-input">SEU E-MAIL *</label>
      <input
        className="input"
        type="email"
        placeholder="Seu e-mail"
        id="email-input" />

      <label htmlFor="pwd-input">SUA SENHA *</label>
      <input
        className="input"
        type="password"
        placeholder="Sua senha"
        id="pwd-input" />

      <button>Acessar</button>

      <div className="actions">
        <label>
          Ainda não tem uma conta?
          <label className="signup">
            Cadastre-se!
          </label>
        </label>
      </div>
    </form>
  )
}

export default Form
