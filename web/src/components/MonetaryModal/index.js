/* eslint-disable react/prop-types */
import React from 'react'
import './styles.css'

function MonetaryModal ({ donation, setDonation }) {
  const { donation: details } = donation

  return (
    <div className="monetary-modal">
      <div className="content">
        <strong>Nova doação!</strong>

        <p>{details.name} acabou de te doar uma quantia de R$ {details.value}!</p>
        <p>{details.title}</p>

        <button onClick={() => setDonation(null)}>
          Entendi
        </button>
      </div>
    </div>
  )
}

export default MonetaryModal
