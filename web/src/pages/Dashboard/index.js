/* eslint-disable default-case */
import React, { useState, useEffect, useMemo } from 'react'
import socketio from 'socket.io-client'
import './styles.css'

import DashboardComponent from '../../components/Dashboard'
import AcceptanceModal from '../../components/AcceptanceModal'

function Dashboard () {
  const [acceptedDonation, setAcceptedDonation] = useState(null)

  const userId = localStorage.getItem('user_id')

  const socket = useMemo(() => socketio('http://localhost:3001/', {
    query: {
      userId
    }
  }), [userId])

  useEffect(() => {
    socket.on('donation_accepted', (donation) => {
      setAcceptedDonation(donation)
    })
  }, [socket])

  return (
    <div className="dashboard-container">
      {acceptedDonation && <AcceptanceModal donation={acceptedDonation} setAcceptedDonation={setAcceptedDonation} />}

      <div className="dashboard-content">
        <DashboardComponent />
      </div>
    </div>
  )
}

export default Dashboard
