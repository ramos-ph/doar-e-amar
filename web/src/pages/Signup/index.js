import React from 'react'

import './styles.css'
import CommonDonatorForm from '../../components/CommonDonatorForm'

import logo from '../../assets/img/logo.png'

function Signup () {
  document.title = 'Doar & Amar'

  return (
    <div className="signup-container">
      <aside>
        <img src={logo} alt="Doar & Amar"/>

        <strong>Cadastre-se</strong>

        <CommonDonatorForm />
      </aside>
    </div>
  )
}

export default Signup
