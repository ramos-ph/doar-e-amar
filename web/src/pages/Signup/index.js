import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import './styles.css'
import api from '../../services/api'

import logo from '../../assets/img/logo.png'

function Signup () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpf, setCpf] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [number, setNumber] = useState('')
  const [avatar, setAvatar] = useState('')

  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()

    const data = new FormData()

    data.append('name', `${firstName} ${lastName}`)
    data.append('email', email)
    data.append('password', password)
    data.append('cpf', cpf)
    data.append('address', `${zipcode}, ${number}`)
    data.append('avatar', avatar)

    try {
      const response = await api.post('/users', data)

      alert(`Cadastro efetuado com sucesso! Um e-mail de confirmação foi enviado para ${email}.`)

      localStorage.setItem('user_id', response.data.id)
      localStorage.setItem('user', JSON.stringify(response.data))

      history.push('/dashboard')
    } catch (err) {
      const { response = err } = err

      alert(response.status === 500
        ? 'Ocorreu um erro interno. Por favor, tente novamente.'
        : response.error)
    }
  }

  document.title = 'Doar & Amar'

  return (
    <div className="signup-container">
      <aside>
        <img src={logo} alt="Doar & Amar"/>

        <strong>Cadastre-se</strong>

        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <article className="input-group">
            <input
              type="text"
              placeholder="Nome"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Sobrenome"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </article>

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

          <label>
            CPF
            <p>(somente números)</p>
          </label>
          <input
            type="text"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />

          <label>CEP</label>
          <article className="address-group">
            <input
              type="text"
              placeholder="Código"
              value={zipcode}
              onChange={e => setZipcode(e.target.value)}
            />

            <input
              type="text"
              placeholder="Nº"
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
          </article>

          <label>Foto de perfil</label>
          <input
            type="file"
            onChange={e => setAvatar(e.target.files[0])}
          />

          <div className="options">
            <button type="submit">
              Cadastrar
            </button>

            <p>
              Já possui uma conta? <Link to="/signin">Acesse</Link>
            </p>
          </div>
        </form>
      </aside>
    </div>
  )
}

export default Signup
