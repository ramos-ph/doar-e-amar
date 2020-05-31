/* eslint-disable react/prop-types */
import React from 'react'
import './styles.css'

function AcceptanceModal ({ donation, setAcceptedDonation }) {
  const { donation: details } = donation
  return (
    <div className="acceptance-modal">
      <div className="content">
        <img
          src={`http://localhost:3001/public/uploads/${details.receiver.avatar}`}
          alt={details.receiver.name}
        />
        <strong>Obrigado!</strong>

        <p>Sua doação {details.title} foi aceita pela ONG {details.receiver.name}</p>

        <button onClick={() => setAcceptedDonation(null)}>
          Entendi
        </button>
      </div>
    </div>
  )
}

export default AcceptanceModal
