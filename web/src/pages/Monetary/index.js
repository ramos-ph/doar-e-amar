/* eslint-disable default-case */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import './styles.css'

import Navbar from '../../components/Navbar'

function Monetary () {
  const [title, setTitle] = useState('Faça bom uso!')
  const [value, setValue] = useState('')
  const [ngos, setNgos] = useState([])
  const [targetNgo, setTargetNgo] = useState(null)

  const history = useHistory()

  const userId = localStorage.getItem('user_id')

  useEffect(() => {
    async function loadNgos () {
      const response = await api.get('/ngos')

      setNgos(response.data)
    }

    loadNgos()
  }, [])

  async function handleSubmit (e) {
    e.preventDefault()

    if (!targetNgo) {
      return alert('Selecione uma ONG para doar.')
    }

    try {
      const response = await api.post(`/monetary?ngo_id=${targetNgo}`, {
        title,
        value
      }, {
        headers: {
          authorization: userId
        }
      })

      if (response) {
        alert('Obrigado! A doação foi feita com sucesso!')

        return history.push('/dashboard')
      }
    } catch (err) {
      const { response = err } = err

      console.log(response)
      alert('quebroukkkkkkkkkkkkkkk')
    }
  }

  document.title = 'Doação monetária | Doar & Amar'

  return (
    <>
      <Navbar />

      <div className="monetary-container">
        <div className="ngos-selector">
          <ul>
            {ngos.map((ngo) => (
              <li key={ngo.id}>
                <label>
                  <input
                    type="radio"
                    checked={targetNgo === ngo.id}
                    onChange={() => setTargetNgo(ngo.id)}
                  />

                  <div className="ngo">
                    <img
                      src={`http://localhost:3001/public/uploads/${ngo.avatar}`}
                      alt={ngo.name}
                    />

                    <div className="details">
                      <strong>{ngo.name}</strong>
                      <p>{ngo.email}</p>
                    </div>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            VALOR *
            <p>(apenas quantia)</p>
          </label>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <label>
            MENSAGEM *
          </label>
          <input
            type="text"
            placeholder="Gostaria de deixar uma mensagem?"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <button type="submit">Concluir</button>
        </form>
      </div>
    </>
  )
}

export default Monetary
