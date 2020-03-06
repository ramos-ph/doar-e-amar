import React from 'react'
import './styles.css'

export default function Login () {
  return (
    <div className="container">
      <aside>
        <form>
          <legend>Acesse sua conta</legend>

          <label htmlFor="">
            <input type="email"/>
          </label>

          <label htmlFor="">
            <input type="password"/>
          </label>

          <button type="submit">Acessar</button>
        </form>
      </aside>
    </div>
  )
}
