import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'
import api from '../../../../services/api'

function Form () {
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

      localStorage.setItem('data', JSON.stringify(response.data))
      localStorage.setItem('user_id', response.data.id)

      history.push('/dashboard')
    } catch (err) {
      const { response = err } = err

      alert(response.status === 404
        ? 'E-mail ou senha inválidos.'
        : 'Houve um erro ao tentar realizar o processo. Tente novamente.')
    }
  }

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit} >
      <legend>Entrar</legend>

      <label>SEU E-MAIL *</label>
      <input
        className="input"
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)} />

      <label>SUA SENHA *</label>
      <input
        className="input"
        type="password"
        placeholder="Sua senha"
        value={password}
        onChange={e => setPassword(e.target.value)} />

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
