/* eslint-disable react/prop-types */
import React from 'react'
import './styles.css'

function AcceptanceModal ({ donation, setAcceptedDonation }) {
  return (
    <div className="acceptance-modal">
      <div className="content">
        <img
          src={`http://localhost:3001/public/uploads/${donation.receiver.avatar}`}
          alt={donation.receiver.name}
        />
        <strong>Obrigado!</strong>

        <p>Sua doação {donation.title} foi aceita pela ONG {donation.receiver.name}</p>

        <button onClick={() => setAcceptedDonation(null)}>
          Entendi
        </button>
      </div>
    </div>
  )
}

export default AcceptanceModal
