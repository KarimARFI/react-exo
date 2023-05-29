import React from 'react'
import './etudiant.css'
import Table from 'react-bootstrap/Table';

const etudiant = [
    { name: "Ekless", firstName: "Dominga", mean: 9.00 },
    { name: "Owbridge", firstName: "Adriano", mean: 9.99},
    { name: "McCutheon", firstName: "Cob", mean: 10.00 },
    { name: "Piecha", firstName: "Cassey", mean: 10.01 },
    { name: "Rubenov", firstName: "Bancroft", mean: 18.64 },
    { name: "Hebborn", firstName: "Diego", mean: 4.42 },
    { name: "Keese", firstName: "Trenna", mean: 10.0 },
    { name: "Tunnoch", firstName: "Martie", mean: 9.9 },
    { name: "Champkin", firstName: "Bondie", mean: 1.0 },
    { name: "Cecely", firstName: "Zenia", mean: 20 }
]

function Liste() {
    return (
        <>
            <h4>Liste des étudiants</h4>
            <p className='info'>liste en tableau d'objet avec boucle react. Colonne des moyennes ternaire (intégré dans le className) pour coloriser si moyenne &gt;= 10</p>
            <Table bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Moyenne</th>
                    </tr>
                </thead>
                <tbody>
                    {/* création de balise directement aprés fonction fléché */}
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
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Moyenne</th>
                    </tr>
                </thead>
                <tbody>
                    {/* affichage des admis si moyenne sup a 10 */}
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
                        return null;
                    })}
                </tbody>
            </Table>
        </>
    )
}
export default Liste