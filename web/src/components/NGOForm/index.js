import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import api from '../../services/api'

function NGOForm () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [landline, setLandline] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [number, setNumber] = useState('')
  const [avatar, setAvatar] = useState('')

  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()

    const data = new FormData()

    data.append('name', name)
    data.append('email', email)
    data.append('password', password)
    data.append('cnpj', cnpj)
    data.append('landline', landline)
    data.append('cellphone', cellphone)
    data.append('address', `${zipcode}, ${number}`)
    data.append('avatar', avatar)

    try {
      const response = await api.post('/ngos', data)

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

  return (
    <form onSubmit={handleSubmit}>
      <label>Razão social</label>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />

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
        CNPJ
        <p>(somente números)</p>
      </label>
      <input
        type="text"
        value={cnpj}
        onChange={e => setCnpj(e.target.value)}
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

      <label>
        Contato
        <p>(somente números)</p>
      </label>
      <article className="input-group">
        <input
          type="text"
          placeholder="Fixo"
          value={landline}
          onChange={e => setLandline(e.target.value)}
        />

        <input
          type="text"
          placeholder="Celular"
          value={cellphone}
          onChange={e => setCellphone(e.target.value)}
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
  )
}

export default NGOForm
