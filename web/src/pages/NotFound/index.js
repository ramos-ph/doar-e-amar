import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import Header from '../../components/Header'

export default function NotFound () {
  return (
    <div className="not-found-container">
      <Header />

      <div className="wrapper not-found-content m-wrap">
        <h1>Ops..</h1>
        <h3>Parece que não há nada por aqui.</h3>

        <Link to="/">Voltar ao início</Link>
      </div>
    </div>
  )
}
