import React from 'react'
import './etudiant.css'
import Table from 'react-bootstrap/Table';

const etudiant = [
    { name: "Ekless", firstName: "Dominga", mean: 19.46 },
    { name: "Owbridge", firstName: "Adriano", mean: 5.94 },
    { name: "McCutheon", firstName: "Cob", mean: 14.27 },
    { name: "Piecha", firstName: "Cassey", mean: 10.23 },
    { name: "Rubenov", firstName: "Bancroft", mean: 18.64 },
    { name: "Hebborn", firstName: "Diego", mean: 4.42 },
    { name: "Tunnoch", firstName: "Martie", mean: 4.1 },
    { name: "Keese", firstName: "Trenna", mean: 17.2 },
    { name: "Champkin", firstName: "Bondie", mean: 17.14 },
    { name: "Cecely", firstName: "Zenia", mean: 14.88 }
]

function Liste() {
    return (
        <>
            <h4>Liste des étudiants</h4>
            <p className='info'>liste avec boucle react et sur la td des moyennes className avec ternaire pour coloriser selon la moyenne</p>
            <Table bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Moyenne</th>
                    </tr>
                </thead>
                <tbody>
                    {/* création de balise irectement aprés fonction fléché */}
                    {etudiant.map(etud =>
                        <tr>
                            <td>{etud.name}</td>
                            <td>{etud.firstName}</td>
                            {/* utilisation d'une ternaire pour coloration des td selon la moyenne */}
                            <td className={(etud.mean >= 10 ? 'green' : 'red')}>{etud.mean}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <h4>Etudiant admis</h4>
            <p className='info'>Liste des etudiants ADMIS avec condition en if</p>
            <Table bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Moyenne</th>
                    </tr>
                </thead>
                <tbody>
                    {/* utilisation d'une condition donc obligation d'un return et d'acolade aprés la fonction fléché */}
                    {etudiant.map(person => {
                        if (person.mean >= 10) {
                            return (
                                <tr>
                                    <td>{person.firstName}</td>
                                    <td>{person.name}</td>
                                    <td>{person.mean}</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </Table>
        </>
    )
}
export default Liste