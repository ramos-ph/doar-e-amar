import React from 'react'

import './styles.css'

import email from '../../../../assets/img/icons/baseline_email_white_48dp.png'
import call from '../../../../assets/img/icons/baseline_call_white_48dp.png'
import room from '../../../../assets/img/icons/baseline_room_white_48dp.png'

export default function SectionContact () {
  return (
    <section id="fale-conosco">
      <div className="container">
        <p className="header-legend">Vamos conversar?</p>
        <h1 className="header-text">Fale Conosco</h1>

        <div className="info">
          <div className="contact-info">
            <ul>
              <li>
                <img src={email} alt="email" />
                <strong>doareamar@dominio.com</strong>
              </li>
              <li>
                <img src={call} alt="call" />
                <strong>(11) 91234-5687</strong>
              </li>
              <li>
                <img src={room} alt="room" />
                <strong>R. João Batista Soares, 440 - Centro, Barueri - SP, 06401-135</strong>
              </li>
            </ul>
          </div>

          <form>
            <legend>Mande sua mensagem!</legend>

            <div className="inputs">
              <input className="input" type="text" placeholder="Seu nome" />
              <input className="input" type="email" placeholder="Seu e-mail" />
              <input className="input" placeholder="Seu assunto" />
            </div>

            <textarea className="input" placeholder="Sua mensagem" />

            <button className="btn-submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}
