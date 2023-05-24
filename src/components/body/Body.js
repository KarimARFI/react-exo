import React from 'react'
import './body.css'
import {Routes, Route} from 'react-router-dom'
import Accueil from '../accueil/Accueil'
import Contact from '../contact/Contact'
import Apropos from '../apropos/Apropos'
import Cards from '../cards/Cards'
import Notfound from '../notfound/Notfound'
import Admis from '../etudiant/Admis'
import Nonadmis from '../etudiant/Nonadmis'
import Liste from '../etudiant/Liste'

function Body() {
  return (
    <section id="body">
        <p className='infoComponent'>Body</p>
        <Routes>
            <Route path="/"></Route>
            <Route path="/accueil" element={<Accueil/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/apropos" element={<Apropos/>}></Route>
            <Route path="/cards" element={<Cards/>}></Route>
            <Route path="/liste" element={<Liste/>}></Route>
            <Route path="/admis" element={<Admis/>}></Route>
            <Route path="/nonadmis" element={<Nonadmis/>}></Route>
            <Route path='*' element={<Notfound/>}></Route>
        </Routes>
    </section>
  )
}

export default Body