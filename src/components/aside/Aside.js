import React from 'react'
import { Link } from 'react-router-dom';
import './aside.css';
function Aside() {
  return (
    <section id="aside">
        <p className='infoComponent'>Aside</p>
        <Link to="cards"><p>Cards</p></Link>
        <Link to="liste"><p>Liste étudiant</p></Link>
    </section>
  )
}

export default Aside