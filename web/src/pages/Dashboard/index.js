/* eslint-disable default-case */
import React, { useReducer, useState, useEffect, useMemo } from 'react'
import socketio from 'socket.io-client'
import './styles.css'

import Header from '../../components/Header'
import AcceptanceModal from '../../components/AcceptanceModal'
import api from '../../services/api'

function Dashboard () {
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'LOAD_DONATIONS':
        return {
          donations: action.donations,
          allDonations: action.donations
        }
      case 'SEARCH_DONATIONS':
        return {
          ...prevState,
          donations: action.searchResult
        }
      case 'CLEAR_SEARCH':
        return {
          ...prevState,
          donations: action.donations
        }
    }
  }, {
    donations: [],
    allDonations: []
  })

  const [acceptedDonation, setAcceptedDonation] = useState(null)
  const [search, setSearch] = useState('')

  const user = JSON.parse(localStorage.getItem('data'))
  const userId = localStorage.getItem('user_id')

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
  }, [socket])

  useEffect(() => {
    function searchDonations () {
      if (!search) {
        return dispatch({ type: 'CLEAR_SEARCH', donations: state.allDonations })
      }

      const result = state.allDonations.filter(donation => {
        const re = new RegExp(search, 'i')

        return re.test(donation.title)
      })

      dispatch({ type: 'SEARCH_DONATIONS', searchResult: result })
    }

    searchDonations()
  }, [search])

  return (
    <>
      <Header isLoggedIn={true} />

      <div className="dashboard-container">
        {acceptedDonation && <AcceptanceModal donation={acceptedDonation} setAcceptedDonation={setAcceptedDonation} />}

        <header>
          <div className="input-container">
            <input
              type="text"
              placeholder="O que está procurando?"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="header-content">
            <img src={`http://localhost:3001/public/uploads/${user.avatar}`} alt={user.name} className="avatar"/>

            <strong>{user.name}</strong>
          </div>
        </header>

        <h2>Minhas doações</h2>
        <ul className="donations-list">
          {state.donations.map((donation) => (
            <li key={donation.id}>
              <img src={`http://localhost:3001/public/uploads/${donation.common_donation.picture}`} alt={donation.title}/>

              <footer>
                <strong>{donation.title}</strong>
                <p className="address">{donation.common_donation.pickup_address}</p>

                <div className="status">
                  <p>{donation.category.name}</p>

                  <p>{donation.common_donation.status}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Dashboard
