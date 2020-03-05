import React from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap';

export const Annonce = () => {
    return (
        <div>
            <form>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Categorie</Form.Label>
                    <Form.Control as="select">
                        <option></option>
                        <option value="maison">Maison</option>
                        <option value="Appartement">Appartement</option>
                        <option value="local-commercial">Local Commercial</option>
                        <option value="bureau">Bureau</option>
                        <option value="place_de_parc">Place de parc</option>
                        <option value="terrain">Terrain</option>
                        <option value="serface_publicitaire">Serface Publicitaire</option>
                    </Form.Control>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Type
                         </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Louer"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Vendre"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />

                        </Col>
                    </Form.Group>
                    <Form.Label>Titre</Form.Label>
                    <Form.Control type="text" placeholder="Titre de l'annonce" />
                    <Form.Label>Prix</Form.Label>
                    <Form.Control type="number" placeholder="Prix de l'annonce" />
                    {/* *********************************************** */}

                    <Form.Label>Surface Habitable</Form.Label>
                    <Form.Control type="number" placeholder="Surface Habitable" />
                    <Form.Label>Surface Terrain</Form.Label>
                    <Form.Control type="number" placeholder="Surface Terrain" />
                    <Form.Label>Nembre des chambres</Form.Label>
                    <Form.Control type="number" placeholder="Nembre des chambres" />
                    <Form.Label>Nembre de salle de bains</Form.Label>
                    <Form.Control type="number" placeholder="Nembre de salle de bains" />
                    <Form.Label>Nombre des etage</Form.Label>
                    <Form.Control type="number" placeholder="Nombre des etage" />


                    {/******************************************** */}
                </fieldset>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Discription</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </form>
        </div>
    )
}
export default Annonce