/* eslint-disable default-case */
import React, { useState, useEffect, useMemo } from 'react'
import socketio from 'socket.io-client'

import './styles.css'
import api from '../../services/api'

import Navbar from '../../components/Navbar'
import AcceptanceModal from '../../components/AcceptanceModal'

function Dashboard () {
  const [acceptedDonation, setAcceptedDonation] = useState(null)
  const [donations, setDonations] = useState([])

  const userId = localStorage.getItem('user_id')
  const user = JSON.parse(localStorage.getItem('data'))

  const socket = useMemo(() => socketio('http://localhost:3001/', {
    query: {
      userId
    }
  }), [userId])

  useEffect(() => {
    async function loadDonations () {
      try {
        const response = await api.get('users/self/donations', {
          headers: {
            authorization: userId
          }
        })

        setDonations(response.data)
      } catch (err) {
        const { response = err } = err

        return console.log(response.status === 500
          ? 'Ocorreu um erro interno. Por favor tente novamente'
          : 'Nenhuma doação encontrada.')
      }
    }

    loadDonations()
  }, [userId])

  useEffect(() => {
    socket.on('donation_accepted', (donation) => {
      setAcceptedDonation(donation)
    })
  }, [socket])

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        {acceptedDonation && <AcceptanceModal donation={acceptedDonation} setAcceptedDonation={setAcceptedDonation} />}

        <div className="user-profile">
          <img src={`http://localhost:3001/public/uploads/${user.avatar}`} alt={user.name} />

          <strong>{user.name}</strong>
          <p>{user.email.split('@')[0]}</p>
        </div>

        <ul className="donations-list">
          {donations.map((donation) => (
            <li key={donation.id}>
              <img src={`http://localhost:3001/public/uploads/${donation.common_donation.picture}`} alt={donation.title}/>

              <div className="donation-info">
                <strong>{donation.title}</strong>
                <p className="details">
                  {donation.common_donation.status}, {donation.category.name}
                </p>
                <p className="address">
                  {donation.common_donation.pickup_address}
                </p>
              </div>

              <button>
                Mais detalhes
              </button>
            </li>
          ))}
        </ul>

        <div className="filters-options">
          <strong>Acompanhamento</strong>
          <label>
            <input type="checkbox" />
            Pendente
          </label>
          <label>
            <input type="checkbox" />
            Aceito
          </label>
          <label>
            <input type="checkbox" />
            Entregue
          </label>

          <strong>Categoria</strong>
          <label>
            <input type="checkbox" />
            Alimentos
          </label>
          <label>
            <input type="checkbox" />
            Móveis
          </label>
          <label>
            <input type="checkbox" />
            Medicamentos
          </label>
          <label>
            <input type="checkbox" />
            Outros
          </label>
        </div>
      </div>
    </>
  )
}

export default Dashboard
