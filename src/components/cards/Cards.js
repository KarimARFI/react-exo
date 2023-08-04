import './cards.css'
import React, { useState } from 'react';
import { Card, Button, Form, InputGroup, Modal } from 'react-bootstrap';

function Cards() {
    /* ######## TABLEAU D'OBJET ######## */
    const data = [
        { id: "1", nom: "HENRI", prenom: "Philippe", ville: "Paris", pics: "logo192.png" },
        { id: "2", nom: "L'EPONGE", prenom: "Bob", ville: "Fond des océans", pics: "bob.jpg" },
        { id: "3", nom: "KENT", prenom: "Clark", ville: "Metropolis", pics: "clark.png" },
        { id: "4", nom: "SIMPSON", prenom: "Bart", ville: "Springfield", pics: "bart.png" },
        { id: "5", nom: "TOMCAT", prenom: "Catalina", ville: "Java", pics: "catalina.jpg" },
        { id: "6", nom: "BESSON", prenom: "Philibert", ville: "Calais", pics: "philibert.jpg" }
    ]
    const dataR = data.reverse();
    /* ######## TRAITEMENT ######## */
    /** state du tableau data */
    const [newData, setNewData] = useState(dataR);

    /** state des cards */
    const [saisieId, setSaisieId] = useState();
    const [saisieNom, setSaisieNom] = useState("");
    const [saisiePrenom, setSaisiePrenom] = useState("");
    const [saisieVille, setSaisieVille] = useState("");
    const [saisiePics, setSaisiePics] = useState("");
    
    /** state modal bootstrap pour affichage et désaffichage */
    const [modal, setModal] = useState(false);
    const modalClose = () => setModal(false);
    // const modalShow = () => setModal(true);

    //console log des différent id et type pour vérification
    const modalShow = () => { console.log("modalShow saisieId : "+(typeof saisieId)+" / modalShow incrementId : "+incrementId); setModal(true)};
    
    /** capture des values, des champs du modal */
    const handleNom =(event) =>{
        setSaisieNom(event.target.value);
        console.log(event.target.value);
    }
    const handlePrenom =(event) =>{
        setSaisiePrenom(event.target.value);
        console.log(event.target.value);
    }
    const handleVille =(event) =>{
        setSaisieVille(event.target.value);
        console.log(event.target.value);
    }
    const handlePics =(event) =>{
        setSaisiePics(event.target.value);
        console.log(event.target.value);
    }

    /** Ajout d'une cards. creation d'un tableau reference pour traitement puis écrasement du tableau d'origine */
    const incrementId = newData.length+1; /**calcul de la longueur du tab +1 pour incrementation du champs disable du form */
    const handleSubmit = (event)=> {
        event.preventDefault();
        if(saisieId === undefined){
            /* slice = copie du tab */
            const ajoutData = newData.slice();
            console.log(incrementId);
            console.log(ajoutData);
            ajoutData.unshift({id:incrementId, nom:saisieNom, prenom:saisiePrenom, ville:saisieVille, pics:saisiePics});
            setNewData(ajoutData);
            console.log(ajoutData);
        }else{
            updateInfo(saisieId);
        }
        modalClose();
    }
    /** simulation de suppression d'une cards */
    const suppression = (id) => {
        setNewData(newData.filter((element) => element.id !== id));
    }
    /** Recuperation des info cards pour reprise dans le modal */
    const updateModal = (id) => {
        const trouver = newData.find((element) => element.id === id);
        console.log("updateModal : "+trouver.id);
        setSaisieId(id);
        setSaisieNom(trouver.nom);
        setSaisiePrenom(trouver.prenom);
        setSaisieVille(trouver.ville);
        setSaisiePics(trouver.pics);
        modalShow();
    }
    /** Update des infos du modal récuperé précédement */
    // const updateInfo = (id) => {
    //     const updatedData = newData.map((element) => {
    //       if (element.id === id) {
    //         return {
    //           ...element, 
    //           nom: saisieNom,
    //           prenom: saisiePrenom,
    //           ville: saisieVille,
    //           pics: saisiePics
    //         };
    //       }
    //       return element;
    //     });
    //     setNewData(updatedData);
    //     modalClose();
    //   }
    /**identique au dessus mais plus concis avec un setNewData direct et une ternaire */
      const updateInfo = (id) => {
        setNewData(
            (prevData) =>prevData.map(
                (element) => element.id === id ? {
                  ...element,
                  nom: saisieNom,
                  prenom: saisiePrenom,
                  ville: saisieVille,
                  pics: saisiePics
                }
              : element
            )
        );
        modalClose();
      };

    /* ######## AFFICHAGE ######## */
    return (
        <>
            {/** bouton du modal */}
            <Button variant="primary" onClick={modalShow} className='col-12 mb-3'>Ajouter une card</Button>
            {/** boucle du tableau des cards */}
            <div id="flex">
                {newData.map(element =>
                    <Card style={{ width: '18rem' }} id="card" key={element.id}>
                        <Card.Img variant="top" src={"./picture/" + element.pics} />
                        <Card.Body>
                            <Card.Title>N° de cards : {element.id}</Card.Title>
                            <Card.Title>{element.prenom} {element.nom}</Card.Title>
                            <Card.Text>
                                <i>ville : </i>{element.ville}
                            </Card.Text>
                            <Button variant="outline-danger" onClick={() => suppression(element.id)}>Supprimer</Button>
                            <Button variant="outline-warning" onClick={() => updateModal(element.id)}>Modifier</Button>
                        </Card.Body>
                    </Card>
                )}
                {/** //modal */}
                <Modal show={modal} onHide={modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>J'ajoute une cards</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/** formulaire ajout d'une cards */}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>N° cards</Form.Label>
                                <Form.Control type="number" placeholder="numéro de la cards" disabled /*required*/ value={saisieId} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" placeholder="Votre nom" /*required*/ value={saisieNom} onChange={handleNom} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="text" placeholder="Votre prénom" /*required*/ value={saisiePrenom} onChange={handlePrenom} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Ville</Form.Label>
                                <Form.Control type="text" placeholder="Votre ville" /*required*/ value={saisieVille} onChange={handleVille} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Pics</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">pics</InputGroup.Text>
                                    <Form.Control type="text" placeholder="nom de l'image" aria-describedby="inputGroupPrepend" /*required*/ value={saisiePics} onChange={handlePics} />
                                </InputGroup>
                            </Form.Group>
                            <Button type="submit" className='mt-3'>valider</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default Cards;