import React, { useState, useEffect } from 'react'
import { FiSearch, FiGrid, FiHeart, FiSettings, FiPower, FiMenu } from 'react-icons/fi'
import './styles.css'

import api from '../../services/api'

function Dashboard () {
  const [donations, setDonations] = useState([])
  const [isMenuShown, setIsMenuShown] = useState(true)

  const user = JSON.parse(localStorage.getItem('data'))
  const userId = localStorage.getItem('user_id')

  useEffect(() => {
    async function loadDonations () {
      try {
        const response = await api.get('/donations', {
          headers: {
            authorization: userId
          }
        })

        setDonations(response.data)
      } catch (err) {
        const { response = err } = err

        return alert(response.status === 500
          ? 'Ocorreu um erro interno. Por favor tente novamente'
          : 'Nenhuma doação encontrada.')
      }
    }

    loadDonations()
  }, [userId])

  return (
    <div className="dashboard-container">
      <aside className={isMenuShown ? 'active' : undefined}>
        <div className="menu-toggler">
          <strong>Doar e amar</strong>

          <FiMenu size={28} color="#000" onClick={() => setIsMenuShown(!isMenuShown)}/>
        </div>

        <ul>
          <li>
            <FiGrid size={24} color="#6c5ce7" />
            <a href="#">Minhas doações</a>
          </li>
          <li>
            <FiHeart size={24} color="#EA2027" />
            <a href="#">Nova doação</a>
          </li>
          {user.cnpj !== null && (
            <li>
              <FiSearch size={24} color="#009432" />
              <a href="#">Ver ofertas</a>
            </li>
          )}
          <li>
            <FiSettings size={24} color="#12CBC4" />
            <a href="#">Configurações</a>
          </li>
          <li>
            <FiPower size={24} color="#F79F1F" />
            <a href="#">Sair</a>
          </li>
        </ul>
      </aside>

      <div className="content">
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
    </div>
  )
}

export default Dashboard
