// components/BackButton.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = ({ label = '⬅ Back', className = '', style = {} }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <button onClick={handleBack} className={className} style={style}>
      {label}
    </button>
  )
}

export default BackButton
