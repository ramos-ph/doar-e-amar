import React, { useState } from 'react'

import './styles.css'
import CommonDonatorForm from '../../components/CommonDonatorForm'
import NGOForm from '../../components/NGOForm'

import logo from '../../assets/img/logo.png'

function Signup () {
  const [isUserCommon, setIsUserCommon] = useState(true)

  document.title = 'Doar & Amar'

  return (
    <div className="signup-container">
      <aside>
        <img src={logo} alt="Doar & Amar"/>

        <strong>Cadastre-se</strong>

        <div className="signup-options">
          <label>
            <input
              type="radio"
              name="user-type"
              onChange={() => setIsUserCommon(true)}
              checked={isUserCommon}
            />
            <p>
              Quero apenas doar
            </p>
          </label>
          <label>
            <input
              type="radio"
              name="user-type"
              value={isUserCommon}
              onChange={() => setIsUserCommon(false)}
            />
            <p>
              Quero receber doações
            </p>
          </label>
        </div>

        {isUserCommon ? (
          <CommonDonatorForm />
        ) : (
          <NGOForm />
        )}
      </aside>
    </div>
  )
}

export default Signup
