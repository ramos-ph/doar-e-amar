import React from 'react'
import { FiX } from 'react-icons/fi'

import './styles.css'

function Modal ({ children, isModalShown, setIsModalShown }) {
  return (
    <div
      className="modal-container"
      style={{
        opacity: isModalShown ? 1 : 0,
        zIndex: isModalShown ? 10 : -10
      }}>
      <div className="modal-content">
        <button
          className="close-modal"
          onClick={() => setIsModalShown(false)}>
          <FiX size={28} color="#999" />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
