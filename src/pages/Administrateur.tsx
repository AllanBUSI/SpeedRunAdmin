import React, { useState } from 'react';
import  { BrowserRouter,Link} from 'react-router-dom'
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, Card, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pie, Bar, HorizontalBar,Line,Polar, } from 'react-chartjs-2';
import history from '../history'
import img from '.../../../public/profil.jpg'

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
                <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                    <h2>Toutes les admins</h2>
                    <div className="row">
                        <Card className="col-md-3 col-xs-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <Card.Img variant="top" src={img} height={100} className="col-4 text-center img-change"/>
                                    <div className="col-md-8">
                                        <p className="text-left col-md-12 col-xs-12">Nom : <span style={{fontWeight: "bold"}}>Sylvestre</span></p>
                                        <p className="text-left col-md-12 col-xs-12">Prenom : <span style={{fontWeight: "bold"}}>Mike</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <p className="text-center col-md-12 col-xs-12">Email : <span style={{fontWeight: "bold"}}>mike.sylvestre@imie-paris.fr </span></p>
                                <hr/>
                                <div className="row ">
                                    <p className="text-left col-md-5 col-xs-12">Droit : <span style={{fontWeight: "bold"}}>Root</span></p>
                                    <p className="text-left col-md-12 col-xs-12">Date d'inscritpion : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                </div>
                                <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                    <Button className="col-md-12 text-center text-right color-speedrun-success">Voir le profil</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-3 col-xs-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <Card.Img variant="top" src={img} height={100} className="col-4 text-center img-change"/>
                                    <div className="col-md-8">
                                        <p className="text-left col-md-12 col-xs-12">Nom : <span style={{fontWeight: "bold"}}>Sylvestre</span></p>
                                        <p className="text-left col-md-12 col-xs-12">Prenom : <span style={{fontWeight: "bold"}}>Mike</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <p className="text-center col-md-12 col-xs-12">Email : <span style={{fontWeight: "bold"}}>mike.sylvestre@imie-paris.fr </span></p>
                                <hr/>
                                <div className="row ">
                                    <p className="text-left col-md-5 col-xs-12">Droit : <span style={{fontWeight: "bold"}}>Root</span></p>
                                    <p className="text-left col-md-12 col-xs-12">Date d'inscritpion : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                </div>
                                <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                    <Button className="col-md-12 text-center text-right color-speedrun-success">Voir le profil</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-3 col-xs-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <Card.Img variant="top" src={img} height={100} className="col-4 text-center img-change"/>
                                    <div className="col-md-8">
                                        <p className="text-left col-md-12 col-xs-12">Nom : <span style={{fontWeight: "bold"}}>Sylvestre</span></p>
                                        <p className="text-left col-md-12 col-xs-12">Prenom : <span style={{fontWeight: "bold"}}>Mike</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <p className="text-center col-md-12 col-xs-12">Email : <span style={{fontWeight: "bold"}}>mike.sylvestre@imie-paris.fr </span></p>
                                <hr/>
                                <div className="row ">
                                    <p className="text-left col-md-5 col-xs-12">Droit : <span style={{fontWeight: "bold"}}>Root</span></p>
                                    <p className="text-left col-md-12 col-xs-12">Date d'inscritpion : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                </div>
                                <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                    <Button className="col-md-12 text-center text-right color-speedrun-success">Voir le profil</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-3 col-xs-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <Card.Img variant="top" src={img} height={100} className="col-4 text-center img-change"/>
                                    <div className="col-md-8">
                                        <p className="text-left col-md-12 col-xs-12">Nom : <span style={{fontWeight: "bold"}}>Sylvestre</span></p>
                                        <p className="text-left col-md-12 col-xs-12">Prenom : <span style={{fontWeight: "bold"}}>Mike</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <p className="text-center col-md-12 col-xs-12">Email : <span style={{fontWeight: "bold"}}>mike.sylvestre@imie-paris.fr </span></p>
                                <hr/>
                                <div className="row ">
                                    <p className="text-left col-md-5 col-xs-12">Droit : <span style={{fontWeight: "bold"}}>Root</span></p>
                                    <p className="text-left col-md-12 col-xs-12">Date d'inscritpion : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                </div>
                                <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                    <Button className="col-md-12 text-center text-right color-speedrun-success">Voir le profil</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-3 col-xs-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <Card.Img variant="top" src={img} height={100} className="col-4 text-center img-change"/>
                                    <div className="col-md-8">
                                        <p className="text-left col-md-12 col-xs-12">Nom : <span style={{fontWeight: "bold"}}>Sylvestre</span></p>
                                        <p className="text-left col-md-12 col-xs-12">Prenom : <span style={{fontWeight: "bold"}}>Mike</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <p className="text-center col-md-12 col-xs-12">Email : <span style={{fontWeight: "bold"}}>mike.sylvestre@imie-paris.fr </span></p>
                                <hr/>
                                <div className="row ">
                                    <p className="text-left col-md-5 col-xs-12">Droit : <span style={{fontWeight: "bold"}}>Root</span></p>
                                    <p className="text-left col-md-12 col-xs-12">Date d'inscritpion : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                </div>
                                <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                    <Button className="col-md-12 text-center text-right color-speedrun-success">Voir le profil</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-3 col-xs-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <Card.Img variant="top" src={img} height={100} className="col-4 text-center img-change"/>
                                    <div className="col-md-8">
                                        <p className="text-left col-md-12 col-xs-12">Nom : <span style={{fontWeight: "bold"}}>Sylvestre</span></p>
                                        <p className="text-left col-md-12 col-xs-12">Prenom : <span style={{fontWeight: "bold"}}>Mike</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <p className="text-center col-md-12 col-xs-12">Email : <span style={{fontWeight: "bold"}}>mike.sylvestre@imie-paris.fr </span></p>
                                <hr/>
                                <div className="row ">
                                    <p className="text-left col-md-5 col-xs-12">Droit : <span style={{fontWeight: "bold"}}>Root</span></p>
                                    <p className="text-left col-md-12 col-xs-12">Date d'inscritpion : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                </div>
                                <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                    <Button className="col-md-12 text-center text-right color-speedrun-success">Voir le profil</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-3 col-xs-12 card-border">
                            <Card.Body className="card-border card-effet">
                                <div className="row">
                                    <Card.Img variant="top" src={img} height={100} className="col-4 text-center img-change"/>
                                    <div className="col-md-8">
                                        <p className="text-left col-md-12 col-xs-12">Nom : <span style={{fontWeight: "bold"}}>Sylvestre</span></p>
                                        <p className="text-left col-md-12 col-xs-12">Prenom : <span style={{fontWeight: "bold"}}>Mike</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <p className="text-center col-md-12 col-xs-12">Email : <span style={{fontWeight: "bold"}}>mike.sylvestre@imie-paris.fr </span></p>
                                <hr/>
                                <div className="row ">
                                    <p className="text-left col-md-5 col-xs-12">Droit : <span style={{fontWeight: "bold"}}>Root</span></p>
                                    <p className="text-left col-md-12 col-xs-12">Date d'inscritpion : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                                </div>
                                <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                    <Button className="col-md-12 text-center text-right color-speedrun-success">Voir le profil</Button>
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
