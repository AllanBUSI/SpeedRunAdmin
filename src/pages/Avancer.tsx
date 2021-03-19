import React, { useState, useEffect } from 'react';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from '../history'

const publicite = () => {
    return history.replace('/pub')
}

const home = () => {
    return history.replace('/home')
}

const user = () => {
    return history.replace('/utilisateur')
}

const coach = () => {
    return history.replace('/coach')
}

const admin = () => {
    return history.replace('/admin')
}

const profil = () => {
    return history.replace('/profil')
}

const login = () => {
    return history.replace('/')
}

const api = () => {
    return history.replace('/api')
}

const campagne = () => {
    return history.replace('/pub')
}


const simple = () => {
    return history.replace('/simple')
}


const avancer = () => {
    return history.replace('/avancer')
}

const Home = () =>  {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl : any = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e : any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
 
    return (
        <>
         <Navbar className="nav-postition" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home" style={{color: "#F8AE6B"}} onClick={home}>SpeedRun</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto col-md-8">
                <div className="col-md-2 col-xs-12 hover-color active"><Nav.Link onClick={publicite} className=" hover-color">Publicité</Nav.Link></div>
                <div className="col-md-2 col-xs-12 hover-color">
                    <NavDropdown className="hover-color" title="Gestion" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={user}>Utilisateur</NavDropdown.Item>
                        <NavDropdown.Item onClick={coach}>Coach</NavDropdown.Item>
                        <NavDropdown.Item onClick={admin}>Administration</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className="col-md-2 hover-color">
                    <Nav.Link className="hover-color" onClick={profil}>Mon Profil</Nav.Link>
                </div>
                <div className="hover-color col-md-2 ">
                    <Nav.Link className="hover-color" onClick={home}>Information</Nav.Link>
                </div>
                <div className="hover-color col-md-1">
                    <Nav.Link className="hover-color" onClick={api}>API</Nav.Link>
                </div>
                <div className="hover-color col-md-2">
                    <Nav.Link className="hover-color" onClick={login}>Deconnexion</Nav.Link>
                </div>
                </Nav>
                <Form inline className="d-none d-sm-block d-sm-none d-md-block">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button className="text-light warning-color">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        <div className="hover-bar"></div>
        <br/>
        <div className="block-container">
            <div style={{height: "3%"}} className="text-left">
                <h3>Campagne</h3>
            </div>
            <div className="col-12">
            <div className="row">
                    <div className="size-card-12 col-xs-12 card-speedrun">
                        <Card className="card-border">
                            <Card.Body className="card-border">
                                <Nav>
                                    <Nav.Item>
                                        <div onClick={campagne} className="hover-color"><Nav.Link style={{color: "beige"}}>Voir les campagnes</Nav.Link></div>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <div onClick={simple} className="hover-color"><Nav.Link style={{color: "beige"}}>Création simple</Nav.Link></div>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <div onClick={avancer} className="hover-color"><Nav.Link style={{color: "beige"}} className="active">Création avancée</Nav.Link></div>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <Form>
                    <div className="row">
                        <div className="size-card-12 row col-xs-12 card-speedrun size-block-principal">
                            <h2 className="col-12">Création avancée d'une publicités</h2>
                            <div className="row size-card-5 col-xs-12 card-speedrun">
                                <Card className="card-border">
                                    <Card.Body className="card-border row">
                                        <Form.Group className="col-md-4" controlId="formBasicEmail">
                                            <Form.Label>Titre de votre campagnes</Form.Label>
                                            <Form.Control type="text" placeholder="Entrer le nom de votre campagne" />
                                            <Form.Text className="text-muted">
                                                Caratère alphanumérique de 60 caratère maxi.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="col-md-4" controlId="formBasicPassword">
                                            <Form.Label>Date début</Form.Label>
                                            <Form.Control type="date" />
                                            <Form.Text className="text-muted">
                                                La date ne peut pas être dans le passé.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="col-md-4" controlId="formBasicPassword">
                                            <Form.Label>Date fin</Form.Label>
                                            <Form.Control type="date" />
                                            <Form.Text className="text-muted">
                                                La date ne peut pas être dans le passé.
                                            </Form.Text>
                                        </Form.Group>  
                                        <Form.Group className="col-md-12" controlId="formBasicEmail">
                                            <Form.Label>Votre text email</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                            <Form.Text className="text-muted">
                                                Caratère alphanumérique de 3000 caratère maxi.
                                            </Form.Text>
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="row size-card-6 col-xs-12 card-speedrun">
                                <Card className="card-border">
                                    <Card.Body className="card-border row">
                                        <Form.Group className="col-md-6" controlId="formBasicEmail">
                                            <Form.Label>Numéro de la carte </Form.Label>
                                            <Form.Control type="number" placeholder="Entrer le numero de la carte" />
                                            <Form.Text className="text-muted">
                                                16 chiffre de la carte
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="col-md-6" controlId="formBasicPassword">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" />
                                            <Form.Text className="text-muted">
                                                La date ne peut pas être dans le passé.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="col-md-6" controlId="formBasicPassword">
                                            <Form.Label>CCV</Form.Label>
                                            <Form.Control type="number" placeholder="les 3 chiffres secrets"/>
                                            <Form.Text className="text-muted">
                                                Entrer le pictogram
                                            </Form.Text>
                                        </Form.Group>  
                                        <Form.Group className="col-md-6" controlId="formBasicPassword">
                                            <Form.Label>Nom du propriétaire</Form.Label>
                                            <Form.Control type="text" placeholder="Nom et Prenom" />
                                            <Form.Text className="text-muted">
                                                Caratère alphanumérique.
                                            </Form.Text>
                                        </Form.Group>  
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="row size-card-5 col-xs-12 card-speedrun">
                                <Card className="card-border col-12">
                                    <Card.Body className="card-border row">
                                        <Form.Group className="col-md-12" controlId="formBasicEmail">
                                            <Form.Label>Image en format jpg ou png</Form.Label>
                                            <div className="button-wrapper">
                                                <span className="label">
                                                    Upload File
                                                </span>
                                                <input type="file" onChange={onSelectFile} name="upload" id="upload" className="upload-box" placeholder="Upload File"/>    
                                            </div>
                                            {<Image src={preview} className="image-preview" fluid style={{ border: "1px #302d42 solid",marginTop: "1%", height: "10vh", width: "100%"}} /> }
                                            <Form.Text className="text-muted">
                                                Cet image sera afficher sur les applications mobiles pendant la durée choisie.
                                            </Form.Text>
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="row size-card-6 col-xs-12 card-speedrun">
                                <Card className="card-border">
                                    <Card.Body className="card-border row">
                                        <div className="col-12">
                                            <div className="col-12 row">
                                                <h3 className="text-left col-md-7">Nom de personne visé : <span className="text-xl">556</span></h3>
                                                <h3 className="text-left col-md-5">Prix à payer : <span className="text-xl">378</span></h3>
                                                <p className="text-center text-muted">La prix est calculer par rapport au nombre d'utilisateur + des frais de gestion de 100 € : 100 + 0.50 * 556</p>
                                            </div>
                                            <Button style={{marginTop: "3vh"}} className="col-12 btn color-speedrun-success">Valider la pub et payer</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div> 
                    </div>                    
                </Form>
            </div>
        </div>
    </>
    )
}

export default Home;
