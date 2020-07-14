import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import './styles.css'
import api from '../../services/api'

import logo from '../../assets/img/logo.png'

function Signin () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()

    try {
      const response = await api.post('/sessions', {
        email,
        password
      })

      localStorage.setItem('user_id', response.data.id)
      localStorage.setItem('user', JSON.stringify(response.data))

      history.push('/dashboard')
    } catch (err) {
      const { response = err } = err

      alert(response.status === 500
        ? 'Ocorreu um erro interno. Por favor, tente novamente.'
        : 'E-mail ou senha inválidos')
    }
  }

  document.title = 'Doar & Amar'

  return (
    <div className="signin-container">
      <aside>
        <img src={logo} alt="Doar & Amar"/>

        <strong>Acesse sua conta</strong>

        <form onSubmit={handleSubmit}>
          <label>Endereço de e-mail</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div className="options">
            <button type="submit">
              Acessar
            </button>

            <p>
              Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
            </p>
          </div>
        </form>
      </aside>
    </div>
  )
}

export default Signin
