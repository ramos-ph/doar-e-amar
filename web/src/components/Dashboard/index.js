/* eslint-disable default-case */
import React, { useReducer, useState, useEffect } from 'react'
import './styles.css'

import api from '../../services/api'

function DashboardComponent () {
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

  const [search, setSearch] = useState('')

  const userId = localStorage.getItem('user_id')

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
  }, [search, state])

  return (
    <>
      <h2>Minhas doações</h2>
      <input
        type="text"
        placeholder="O que está procurando?"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ul className="donations-list">
        {state.donations.map((donation) => (
          <li key={donation.id}>
            <img src={`http://localhost:3001/public/uploads/${donation.common_donation.picture}`} alt={donation.title}/>

            <footer>
              <strong>{donation.title}</strong>
              <p>{donation.common_donation.status}</p>
            </footer>
          </li>
        ))}
      </ul>
    </>
  )
}

export default DashboardComponent
