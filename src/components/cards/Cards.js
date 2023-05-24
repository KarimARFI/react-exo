import React, { useState } from 'react'
import './cards.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
    const data = [
        { id: 1, nom: "Henri", prenom: "PHILIPPE", moyenne: 12, pics: "logo192.png" },
        { id: 2, nom: "L'EPONGE", prenom: "Bob", moyenne: 3, pics: "bob.jpg" },
        { id: 3, nom: "KENT", prenom: "Clark", moyenne: 18, pics: "clark.png" },
        { id: 4, nom: "SIMPSON", prenom: "Bart", moyenne: 8, pics: "bart.png" },
        { id: 5, nom: "TOMCAT", prenom: "Catalina", moyenne: 20, pics: "catalina.jpg" },
        { id: 6, nom: "BESSON", prenom: "Philibert", moyenne: 10, pics: "philibert.jpg" }
    ]

    const [newsData, setNewsData] = useState(data);
    const clic = (nom) => {
        setNewsData(newsData.filter((element) => element.nom !== nom));
    }

    return (
        <div id="flex">
            {newsData.map(element =>
                <Card style={{ width: '18rem' }} id="card" key={element.nom}>
                    <Card.Img variant="top" src={"./picture/" + element.pics} />
                    <Card.Body>
                        <Card.Title>{element.prenom} {element.nom}</Card.Title>
                        <Card.Text>
                            <i>Moyenne : </i>{element.moyenne}/20
                        </Card.Text>
                        <Button variant="outline-danger" onClick={() => clic(element.nom)}>Supprimer</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}

export default BasicExample;