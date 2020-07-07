import React, { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import QRCode from 'react-qr-code'

import './styles.css'
import api from '../../services/api'

import dateParser from '../../utils/dateParser'

// eslint-disable-next-line react/prop-types
function Donation ({ donationId, visible = false, setVisible }) {
  const [donation, setDonation] = useState({})

  const userId = localStorage.getItem('user_id')

  useEffect(() => {
    async function restoreDonation () {
      const response = await api.get(
        `users/self/donations/${donationId}`,
        {
          headers: {
            authorization: userId
          }
        }
      )

      setDonation(response.data)
    }

    restoreDonation()
  }, [donationId, userId])

  return (
    <div className={`details-container ${!visible && 'not-visible'}`}>
      <div className="details-content">
        <button
          id="close-button"
          onClick={() => setVisible(false)}>
          <FiX size={32} color="#999" />
        </button>

        <div className="donation-info">
          <img
            src={`http://localhost:3001/public/uploads/${donation?.common_donation?.picture}`}
            alt={donation?.title}
          />

          <strong>{donation?.title}</strong>

          <label>Retirada em</label>
          <p>{donation?.common_donation?.pickup_address}</p>

          <label>Categoria</label>
          <p>{donation?.category?.name?.toLowerCase()}</p>

          <label>Acompanhamento</label>
          <p>{donation?.common_donation?.status?.toLowerCase()}</p>

          <p className="announcement-date">Publicado em {dateParser(donation?.createdAt)}</p>
        </div>

        <div className="receiver-info">
          {donation?.receiver === null ? (
            <div className="empty">
              <strong>Nenhum recebedor</strong>
              <p>Essa oferta ainda não foi aceita por nenhuma ONG.</p>
              <p>Assim que disponíveis, serão exibidos aqui:</p>

              <ul>
                <li>Os detalhes do recebedor</li>
                <li>O código QR para recebimento</li>
              </ul>
            </div>
          ) : (
            <>
              <strong>Aceito por:</strong>
              <img
                src={`http://localhost:3001/public/uploads/${donation?.receiver?.avatar}`}
                alt={donation?.receiver?.name}
              />

              <strong>{donation?.receiver?.name}</strong>
              <p className="acceptance-date">Em {dateParser(donation?.acceptance_date)}</p>

              <p className="receivement-date">
                {donation?.receivement_date === null
                  ? 'Ainda não recebido'
                  : `Recebido em ${dateParser(donation?.receivement_date)}`}
              </p>

              <label>Código para recebimento</label>
              <QRCode value={String(donation?.id) || 'Obtendo...'} size={124} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Donation
