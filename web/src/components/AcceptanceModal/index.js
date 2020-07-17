/* eslint-disable react/prop-types */
import React from 'react'
import './styles.css'

function AcceptanceModal ({ donation, setDonation }) {
  const { donation: details } = donation
  return (
    <div className="acceptance-modal">
      <div className="content">
        {details?.receiver?.avatar && (
          <img
            src={`http://localhost:3001/public/uploads/${details.receiver.avatar}`}
            alt={details.receiver.name}
          />
        )}
        <strong>Obrigado!</strong>

        {details?.receiver ? (
          <p>Sua doação {details.title} foi aceita pela ONG {details.receiver.name}</p>
        ) : (
          <p>Agradecemos pela sua doação! A doação {details.title} foi recebida com sucesso!</p>
        )}

        <button onClick={() => setDonation(null)}>
          Entendi
        </button>
      </div>
    </div>
  )
}

export default AcceptanceModal
