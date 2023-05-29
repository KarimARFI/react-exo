import React from 'react'

function accueil() {
  return (
    <div>
        <p>Bienvenue à l'accueil</p>
        <p className='info'>Lien Accueil different en couleur selon le traitement bootstrap avec un "&lt;Nav.Link as={"Link"} to="/accueil"&gt;Accueil&lt;/Nav.Link&gt;"</p>
    </div>
  )
}

export default accueil