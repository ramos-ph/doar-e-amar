import React, { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.css'

import Header from '../../components/Header'
import AcceptanceModal from '../../components/AcceptanceModal'
import api from '../../services/api'

function Dashboard () {
  const [donations, setDonations] = useState([])
  const [acceptedDonation, setAcceptedDonation] = useState(null)

  const user = JSON.parse(localStorage.getItem('data'))
  const userId = localStorage.getItem('user_id')

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

  return (
    <>
      <Header isLoggedIn={true} />

      <div className="dashboard-container">
        {acceptedDonation && <AcceptanceModal donation={acceptedDonation} setAcceptedDonation={setAcceptedDonation} />}

        <header>
          <div className="input-container">
            <input type="text" placeholder="O que está procurando?" />

            <button>
              <FiSearch size={22} color="#000" />
            </button>
          </div>

          <div className="header-content">
            <img src={`http://localhost:3001/public/uploads/${user.avatar}`} alt={user.name} className="avatar"/>

            <strong>{user.name}</strong>
          </div>
        </header>

        <h2>Minhas doações</h2>
        <ul className="donations-list">
          {donations.map((donation) => (
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
