import React, { useState } from 'react';
import  { BrowserRouter,Link} from 'react-router-dom'
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, Card, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pie, Bar, HorizontalBar,Line,Polar, } from 'react-chartjs-2';
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
                                        <div onClick={campagne} className="hover-color"><Nav.Link style={{color: "beige"}} className="active">Voir les campagnes</Nav.Link></div>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <div onClick={simple} className="hover-color"><Nav.Link style={{color: "beige"}}>Création simple</Nav.Link></div>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <div onClick={avancer} className="hover-color"><Nav.Link style={{color: "beige"}}>Création avancée</Nav.Link></div>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            <div className="row">
                <div className="size-card-12  col-xs-12 card-speedrun size-block-principal">
                    <h2>Toutes les campagnes</h2>
                    <Card className="col-md-12 card-border">
                        <Card.Body className="card-border">
                            <div className="row">
                                <Button className="col-md-3 option text-center text-center  color-speedrun-success">Imprimer les factures de la sections</Button>
                                <Button className="col-md-4 offset-md-1 option text-center text-right  color-speedrun-success">Imprimer vos factures</Button>
                                <Button className="col-md-3 offset-md-1 option text-center text-right  color-speedrun-success">Imprimer toutes les factures</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="row col-xs-12">
                        <Card className="col-md-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <p className="text-left col-md-3 col-xs-12">Nom de campagne : <span style={{fontWeight: "bold"}}>GoSport </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date début : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}  </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date fin : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                    <div className="col-md-5 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                        <Button className="offset-8 text-light text-right  color-speedrun-success">Imprimer la facture</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <p className="text-left col-md-3 col-xs-12">Nom de campagne : <span style={{fontWeight: "bold"}}>GoSport </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date début : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}  </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date fin : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                    <div className="col-md-5 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                        <Button className="offset-8 text-light text-right  color-speedrun-success">Imprimer la facture</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <p className="text-left col-md-3 col-xs-12">Nom de campagne : <span style={{fontWeight: "bold"}}>GoSport </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date début : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}  </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date fin : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                    <div className="col-md-5 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                        <Button className="offset-8 text-light text-right  color-speedrun-success">Imprimer la facture</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <p className="text-left col-md-3 col-xs-12">Nom de campagne : <span style={{fontWeight: "bold"}}>GoSport </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date début : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}  </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date fin : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                    <div className="col-md-5 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                        <Button className="offset-8 text-light text-right  color-speedrun-success">Imprimer la facture</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <p className="text-left col-md-3 col-xs-12">Nom de campagne : <span style={{fontWeight: "bold"}}>GoSport </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date début : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}  </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date fin : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                    <div className="col-md-5 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                        <Button className="offset-8 text-light text-right  color-speedrun-success">Imprimer la facture</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <p className="text-left col-md-3 col-xs-12">Nom de campagne : <span style={{fontWeight: "bold"}}>GoSport </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date début : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}  </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date fin : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                    <div className="col-md-5 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                        <Button className="offset-8 text-light text-right  color-speedrun-success">Imprimer la facture</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <p className="text-left col-md-3 col-xs-12">Nom de campagne : <span style={{fontWeight: "bold"}}>GoSport </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date début : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()}  </span></p>
                                    <p className="text-left col-md-2 col-xs-12">date fin : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                    <div className="col-md-5 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                        <Button className="offset-8 text-light text-right  color-speedrun-success">Imprimer la facture</Button>
                                    </div>
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
