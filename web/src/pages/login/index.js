import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './styles.css'

export default function Login () {
  return (
    <div className="login-container">
      <div className="login-content">
        <form>
          <legend>Acesse sua conta</legend>

          <label htmlFor="email">
            <strong>SEU E-MAIL *</strong>
            <input
              className="input-outline"
              type="email"
              placeholder="Seu e-mail"
            />
          </label>

          <label htmlFor="senha">
            <strong>SUA SENHA *</strong>
            <input
              className="input-outline"
              type="password"
              placeholder="Sua senha"
            />
          </label>

          <button type="submit">Acessar</button>

          <div className="login-options">
            <Link to="/">Esqueceu sua senha?</Link>
            <Link to="/">Cadastre-se</Link>
          </div>
        </form>
      </div>

      <Outlet />
    </div>
  )
}
