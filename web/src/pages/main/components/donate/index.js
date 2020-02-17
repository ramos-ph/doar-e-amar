import React from 'react'

import './styles.css'

import strawberry from '../../../../assets/img/strawberry-4-128.png'
import commode from '../../../../assets/img/commode-128.png'
import money from '../../../../assets/img/money-128.png'
import plus from '../../../../assets/img/plus-128.png'
import categorize from '../../../../assets/img/categorize-128.png'

import downloadingUpdates from '../../../../assets/img/icons/downloading-updates.png'

export default function SectionDonate () {
  return (
    <section id="doar">
      <div className="container">
        <h1>Faça sua doação!</h1>
        <h2>Há maior felicidade em dar do que em receber</h2>
        <h4>Atos 20:35</h4>

        <ul>
          <li>
            <img src={strawberry} alt="strawberry" />
            <strong>Alimentos</strong>
          </li>

          <li>
            <img src={commode} alt="commode" />
            <strong>Móveis</strong>
          </li>

          <li>
            <img src={money} alt="money" />
            <strong>Dinheiro</strong>
          </li>

          <li>
            <img src={plus} alt="plus" />
            <strong>Medicamentos</strong>
          </li>

          <li>
            <img src={categorize} alt="categorize" />
            <strong>Outros</strong>
          </li>
        </ul>

        <button id="info-doar">Saiba Mais <img src={downloadingUpdates} alt="" /></button>
      </div>
    </section>
  )
}
