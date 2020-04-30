import React, { useState } from 'react'
import { FaUtensils, FaCouch, FaMoneyBillWave, FaMedkit, FaBoxes } from 'react-icons/fa'
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'
import Form from './components/Form'

import aacd from '../../assets/img/ongs/aacd.png'
import sosMataAtlantica from '../../assets/img/ongs/sos-mata-atlantica.png'
import vivaRio from '../../assets/img/ongs/viva_rio.png'
import wwf from '../../assets/img/ongs/wwf.png'

import email from '../../assets/img/icons/baseline_email_white_48dp.png'
import call from '../../assets/img/icons/baseline_call_white_48dp.png'
import room from '../../assets/img/icons/baseline_room_white_48dp.png'

export default function Main () {
  const [isModalShown, setIsModalShown] = useState(false)

  return (
    <>
      <Header setIsModalShown={setIsModalShown} />

      <Modal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}>
        <Form />
      </Modal>

      <section id="painel">
        <div className="wrapper ms-wrap">
          <div className="floating-content">
            <h2>
              <strong>A maior plataforma</strong>
              de doações do Brasil.
            </h2>

            <p>Aproximando doador e recebedor com segurança e facilidade</p>

            <div className="buttons">
              <a href="#go" className="bg-link">Participe</a>
              <a href="#go" className="cm-link">Saiba mais</a>
            </div>
          </div>

          <div className="partners">
            <h2>Nossos parceiros</h2>

            <ul className="partner-list">
              <li className="partner">
                <img src={aacd} title="AACD" alt=""/>
              </li>
              <li className="partner">
                <img src={sosMataAtlantica} title="SOS Mata Atlântica" alt=""/>
              </li>
              <li className="partner">
                <img src={vivaRio} title="Viva Rio" alt=""/>
              </li>
              <li className="partner">
                <img src={wwf} title="WWF Brasil" alt=""/>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="doar">
        <div className="wrapper">
          <h1>Faça sua doação!</h1>
          <h2>Há maior felicidade em dar do que em receber</h2>
          <h4>Atos 20:35</h4>

          <ul>
            <li>
              <FaUtensils size={86} color="#cc0000" />
              <strong>Alimentos</strong>
            </li>

            <li>
              <FaCouch size={86} color="#ffc107" />
              <strong>Móveis</strong>
            </li>

            <li>
              <FaMoneyBillWave size={86} color="#00e676" />
              <strong>Dinheiro</strong>
            </li>

            <li>
              <FaMedkit size={86} color="#00e5ff" />
              <strong>Medicamentos</strong>
            </li>

            <li>
              <FaBoxes size={86} color="#e91e63" />
              <strong>E muito mais!</strong>
            </li>
          </ul>

          <button id="info-doar">Saiba Mais</button>
        </div>
      </section>

      <section id="fale-conosco">
        <div className="wrapper">
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

      <Footer />
    </>
  )
}
