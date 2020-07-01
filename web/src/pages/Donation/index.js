/* eslint-disable default-case */
import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import QRCode from 'react-qr-code';
import './styles.css'

import api from '../../services/api'
import dateParser from '../../utils/dateParser'

function Donation () {
  const [donation, setDonation] = useState({})

  const match = useRouteMatch()
  const userId = localStorage.getItem('user_id');

  useEffect(() => {
    async function loadDonation() {
      const response = await api.get(
        `/users/self/donations/${match.params.donation_id}`,
        {
          headers: {
            authorization: userId,
          }
        }
      )

      setDonation(response.data)
    }

    loadDonation()
  }, [match.params.donation_id, userId])

  return (
    <div className="dashboard-container">
      <div className="donation-content">
        <h2>Detalhes</h2>

        <div className="item-info">
          <div className="details">
            <img
              src={`http://localhost:3001/public/uploads/${donation?.common_donation?.picture}`}
              alt={donation?.title}
            />

            <strong>{donation?.title}</strong>
            <p>{donation?.category?.name}</p>
            <p>Postado em: {dateParser(donation?.createdAt)}</p>
            <p>Aceito em: {dateParser(donation?.acceptance_date)}</p>
          </div>

          <div className="receiver">
            Detalhes do recebedor aqui

            <QRCode value={match.params.donation_id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation
