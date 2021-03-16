import React from 'react';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, Card, Pagination, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from '../history'
import img from '.../../../public/profil.jpg'
import img2 from '.../../../public/carte-identite.jpg'

const publicite = () => {
    return history.push('/pub')
}

const home = () => {
    return history.push('/home')
}

const user = () => {
    return history.push('/utilisateur')
}

const coach = () => {
    return history.push('/coach')
}

const admin = () => {
    return history.push('/admin')
}

const profil = () => {
    return history.push('/profil')
}

const login = () => {
    return history.push('/')
}

const api = () => {
    return history.push('/api')
}

const validate = () => {
    return history.push('/validate')
}

const Home = () =>  {

    return (
        <>
         <Navbar className="nav-postition" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home" style={{color: "#F8AE6B"}} onClick={home}>SpeedRun</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto col-md-8">
                <div className="col-md-2 col-xs-12 hover-color"><Nav.Link onClick={publicite} className=" hover-color">Publicité</Nav.Link></div>
                <div className="col-md-2 col-xs-12 hover-color">
                    <NavDropdown className="hover-color active" title="Gestion" id="collasible-nav-dropdown">
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
                <h3>Gestion</h3>
            </div>
            <div className="col-12">
            <div className="row">
                <div className="size-card-12 col-xs-12 card-speedrun">
                    <Card className="card-border">
                        <Card.Body className="card-border">
                            <Nav>
                                <Nav.Item>
                                    <div className="hover-color" onClick={coach}><Nav.Link style={{color: "beige"}}>Voir les coachs</Nav.Link></div>
                                </Nav.Item>
                                <Nav.Item>
                                    <div className="hover-color active" onClick={validate}><Nav.Link style={{color: "beige"}}>Coachs en cours d'inscritpion</Nav.Link></div>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                    <h2>Nouveau Coach</h2>
                    <div className="row">
                        <Card className="col-md-4 col-xs-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <Card.Img variant="top" src={img} height={150} className="col-4 text-center img-change"/>
                                    <div className="col-md-8">
                                        <p className="text-left col-md-12 col-xs-12">Nom : <span style={{fontWeight: "bold"}}>Sylvestre</span></p>
                                        <p className="text-left col-md-12 col-xs-12">Prenom : <span style={{fontWeight: "bold"}}>Mike</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <p className="text-center col-md-12 col-xs-12">Email : <span style={{fontWeight: "bold"}}>mike.sylvestre@imie-paris.fr </span></p>
                                    <p className="text-center col-md-12 col-xs-12">Siret : <span style={{fontWeight: "bold"}}>829 420 702</span></p>
                                <hr/>
                                <div className="row ">
                                    <p className="text-center col-md-12 col-xs-12">Date d'inscritpion : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                </div>
                                <Carousel fade>
                                    <Carousel.Item interval={3000}>
                                        <img
                                        className="d-block w-100"
                                        src={img2}
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>
                                        <img
                                        className="d-block w-100"
                                        src={img2}
                                        alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item interval={3000}>
                                        <img
                                        className="d-block w-100"
                                        src={img2}
                                        alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                <div style={{marginTop: "3%"}} className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                    <Button className="col-md-12 text-center text-right color-speedrun-success">Accepter</Button>
                                </div>
                                <div style={{marginTop: "3%"}} className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                    <Button className="col-md-12 text-center text-right btn-danger">Refuser</Button>
                                </div>
                            </Card.Body>
                        </Card> 
                    </div>
                </div>
                    <div className="row">
                        <div className="pagination offset-2 col-md-3">
                            <Pagination className="pagination">
                                <Pagination.Item className="pagination">{1}</Pagination.Item>
                                <Pagination.Item className="pagination">{2}</Pagination.Item>
                                <Pagination.Item className="pagination">{3}</Pagination.Item>
                                <Pagination.Item className="pagination">Suivant</Pagination.Item>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home;
