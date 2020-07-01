/* eslint-disable default-case */
import React, { useState, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { FiCamera } from 'react-icons/fi'
import './styles.css'

import api from '../../services/api'

function New () {
  const [picture, setPicture] = useState(null)
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')

  const history = useHistory()

  const userId = localStorage.getItem('user_id')

  const preview = useMemo(() => picture ? URL.createObjectURL(picture) : null, [picture])

  async function handleSubmit (e) {
    e.preventDefault()

    try {
      const data = new FormData()

      data.append('picture', picture)
      data.append('title', title)
      data.append('address', address)

      await api.post(`/donations?category_id=${1}`, data, {
        headers: {
          authorization: userId
        }
      })

      alert('Nova doação feita com sucesso!')
      return history.push('/dashboard')
    } catch (err) {
      const { response = err } = err

      alert(response.status === 500
        ? 'Ocorreu um erro interno. Por favor tente novamente.'
        : 'Não foi possível realizar sua doação')
    }
  }

  return (
    <div className="dashboard-container">
      <div className="new-content">
        <h2>Nova doação</h2>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="picture"
            id="select-picture"
            style={{ backgroundImage: `url(${preview})` }}
            className={preview ? 'preview' : ''}
          >
            <FiCamera size={26} color="#999" />

            <input
              type="file"
              id="picture"
              onChange={e => setPicture(e.target.files[0])}
            />
          </label>

          <label htmlFor="">TÍTULO *</label>
          <input
            type="text"
            placeholder="O que está doando?"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <label htmlFor="">ENDEREÇO PARA RETIRADA *</label>
          <input
            type="text"
            placeholder="Qual o local para retirada?"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />

          <button type="submit">Concluir</button>
        </form>
      </div>
    </div>
  )
}

export default New
