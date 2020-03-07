import React from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap';

const Annonce = () => {
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
                    
                    <Form.Control type="text" placeholder="Titre de l'annonce" />
               
                    <Form.Control type="number" placeholder="Prix de l'annonce" />
                    {/* *********************************************** */}

                    <Form.Control type="number" placeholder="Surface Habitable" />
                    <Form.Control type="number" placeholder="Surface Terrain" />
                    <Form.Control type="number" placeholder="Nembre des chambres" />
                    <Form.Control type="number" placeholder="Nembre de salle de bains" />
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