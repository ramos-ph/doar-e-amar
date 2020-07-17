/* eslint-disable default-case */
import React, { useState, useReducer, useEffect, useMemo } from 'react'
import socketio from 'socket.io-client'

import './styles.css'
import api from '../../services/api'

import Navbar from '../../components/Navbar'
import Donation from '../../components/Donation'
import AcceptanceModal from '../../components/AcceptanceModal'

function Dashboard () {
  const [acceptedDonation, setAcceptedDonation] = useState(null)
  const [receivedDonation, setReceivedDonation] = useState(null)
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'LOAD_DONATIONS':
        return {
          donations: action.donations,
          allDonations: action.donations
        }
      case 'FILTER_DONATIONS':
        return {
          ...prevState,
          donations: action.donations
        }
    }
  }, {
    allDonations: [],
    donations: []
  })

  const [visible, setVisible] = useState(false)
  const [donationId, setDonationId] = useState('')

  // filters
  const [status, setStatus] = useState({
    PENDENTE: false,
    ACEITO: false,
    RECEBIDO: false
  })
  const [categories, setCategories] = useState({
    ALIMENTOS: false,
    MOVEIS: false,
    MEDICAMENTOS: false,
    OUTROS: false
  })

  const userId = localStorage.getItem('user_id')
  const user = JSON.parse(localStorage.getItem('user'))

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

        dispatch({ type: 'LOAD_DONATIONS', donations: response.data })
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

    socket.on('donation_received', (donation) => {
      setReceivedDonation(donation)
    })
  }, [socket])

  useEffect(() => {
    function filterDonations () {
      const statusEntries = Object.entries(status)
      const categoriesEntries = Object.entries(categories)

      const statusFilters = statusEntries.filter((statusIndex) => {
        return statusIndex[1] === true
      })

      const categoriesFilters = categoriesEntries.filter((categoryIndex) => {
        return categoryIndex[1] === true
      })

      if (statusFilters.length === 0 && categoriesFilters.length === 0) {
        return dispatch({ type: 'LOAD_DONATIONS', donations: state.allDonations })
      }

      const filters = [...statusFilters, ...categoriesFilters]

      const filteredDonations = state.allDonations.filter((donation) => {
        let i = -1

        while (true) {
          i++

          return (
            filters[i].includes(donation.common_donation.status) ||
              filters[i].includes(donation.category.name)
          )
        }
      })

      dispatch({ type: 'FILTER_DONATIONS', donations: filteredDonations })
    }

    filterDonations()
  }, [status, categories, state.allDonations])

  document.title = 'Painel de doações | Doar & Amar'

  return (
    <>
      <Navbar />
      <Donation
        visible={visible}
        setVisible={setVisible}
        donationId={donationId}
      />

      <div className="dashboard-container">
        {acceptedDonation && <AcceptanceModal donation={acceptedDonation} setDonation={setAcceptedDonation} />}
        {receivedDonation && <AcceptanceModal donation={receivedDonation} setDonation={setReceivedDonation} />}

        <div className="user-profile">
          <img src={`http://localhost:3001/public/uploads/${user.avatar}`} alt={user.name} />

          <strong>{user.name}</strong>
          <p>{user.email.split('@')[0]}</p>
        </div>

        <ul className="donations-list">
          {state.donations.map((donation) => (
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

              <button onClick={() => {
                setDonationId(donation.id)
                setVisible(true)
              }}>
                Mais detalhes
              </button>
            </li>
          ))}
        </ul>

        <div className="filters-options">
          <strong>Acompanhamento</strong>
          <label>
            <input type="checkbox" onChange={e => setStatus({ ...status, PENDENTE: e.target.checked })} />
            Pendente
          </label>
          <label>
            <input type="checkbox" onChange={e => setStatus({ ...status, ACEITO: e.target.checked })} />
            Aceito
          </label>
          <label>
            <input type="checkbox" onChange={e => setStatus({ ...status, RECEBIDO: e.target.checked })} />
            Recebido
          </label>

          <strong>Categoria</strong>
          <label>
            <input type="checkbox" onChange={e => setCategories({ ...categories, ALIMENTOS: e.target.checked })} />
            Alimentos
          </label>
          <label>
            <input type="checkbox" onChange={e => setCategories({ ...categories, MOVEIS: e.target.checked })} />
            Móveis
          </label>
          <label>
            <input type="checkbox" onChange={e => setCategories({ ...categories, MEDICAMENTOS: e.target.checked })} />
            Medicamentos
          </label>
          <label>
            <input type="checkbox" onChange={e => setCategories({ ...categories, OUTROS: e.target.checked })} />
            Outros
          </label>
        </div>
      </div>
    </>
  )
}

export default Dashboard
