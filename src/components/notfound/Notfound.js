import React from 'react'
import image from './Erreur-404.png'
import './notfound.css'

function notfound() {
  return (
    <div id="notfound">
        <img src={image} alt="erreur-404"></img>
    </div>
  )
}

export default notfound