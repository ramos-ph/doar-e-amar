import React from 'react'

import './styles.css'

import sosma from '../../../../assets/img/sos-mata-atlantica.jpg'
import aacd from '../../../../assets/img/aacd.png'
import vivaRio from '../../../../assets/img/viva_rio.png'
import wwf from '../../../../assets/img/wwf.png'

export default function SectionPartners () {
  return (
    <section id="parceiros">
      <div className="container">
        <h1 className="header-text">Nossos parceiros</h1>

        <ul>
          <li><img src={sosma} alt="ong" title="SOS Mata Atlântica" /></li>
          <li><img src={aacd} alt="ong" title="AACD" /></li>
          <li><img src={vivaRio} alt="ong" title="Viva Rio" /></li>
          <li><img src={wwf} alt="ong" title="WWF Brasil" /></li>
        </ul>
      </div>
    </section>
  )
}
