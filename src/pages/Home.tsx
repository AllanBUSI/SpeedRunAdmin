import React, { useState } from 'react';
import  { BrowserRouter,Link} from 'react-router-dom'
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, Card, Alert, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegWindowClose, FaWrench } from "react-icons/fa";
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

const Home = () =>  {

    const [polar, setPolar] = useState({
        labels: ['Jaquie', 'Michel', 'Jack', 'Daniels'],
        datasets: [
            {
            label: '',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [6,5,3,1]
            }
        ]
    });

    const [dataseter, setDataseter] = useState({
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
        datasets: [
        {
            label: '',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderDash: [],
            borderDashOffset: 0.0,
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 35, 25, 15, 65, 98, 10]
        }
        ]
    });

const [datasets, setDatasets] = useState({
        labels: [
            'NET', 
            'TVA',
            'BENEFICE'
        ],
        datasets: [{
            label: '',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [100, 20, 80]
        }]
    })

    return (
        <>
        <Navbar className="nav-postition" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home" style={{color: "#F8AE6B"}} onClick={home}>SpeedRun</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto col-md-8">
                <div className="col-md-2 col-xs-12 hover-color"><Nav.Link onClick={publicite} className=" hover-color">Publicité</Nav.Link></div>
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
                    <Nav.Link className="hover-color active" onClick={home}>Information</Nav.Link>
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
                <h3>Informations générales</h3>
            </div>
            <div className="col-12">
                <div className="row">
                <div className="size-card-4 col-xs-12 card-speedrun">
                    <Card className="card-border">
                        <Card.Body className="card-border">Nombre de coach <span className="text-xxl">100</span></Card.Body>
                    </Card>
                </div>
                <div className="size-card-4 col-xs-12 card-speedrun">
                    <Card className="card-border">
                        <Card.Body className="card-border">Nombre de compte gratuit <span className="text-xxl">500</span></Card.Body>
                    </Card>
                </div>
                <div className="size-card-4 col-xs-12 card-speedrun">
                    <Card className="card-border">
                        <Card.Body className="card-border">Nombre de compte payant <span className="text-xxl">150</span></Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="size-card-6 col-xs-12 card-speedrun size-block-principal">
                    <Card className="card-border">
                        <Card.Body className="card-border">
                            <h3>Chiffre d'affaire</h3>
                            <Bar data={datasets} height={100}/>
                        </Card.Body>
                    </Card>
                    <Card className="card-border">
                        <Card.Body className="card-border">
                            <h3>Prix d'une publicités moyenne</h3>
                            <Line data={dataseter} height={105} />
                        </Card.Body>
                    </Card>
                </div>
                <div className="size-card-5 col-xs-12 card-speedrun size-block-principal d-none d-sm-block d-sm-none d-md-block">
                    <Card className="card-border">
                        <Card.Body className="card-border">
                            <h2>Les 7 coachs les plus populaires</h2>
                            <HorizontalBar data={polar} height={75} />
                        </Card.Body>
                    </Card>
                    <Card className="card-border">
                        <Card.Body className="card-border">
                        <div className="col-12 row">
                                <div className="size-card-12 card-speedrun">
                                    <Card className="card-border">
                                        <Card.Body className="card-border">Coach qui peuvent être payer <span className="text-xl">15</span></Card.Body>
                                    </Card>
                                </div>
                                <div className="size-card-12 card-speedrun">
                                    <Card className="card-border">
                                        <Card.Body className="card-border">
                                            Nombre d'inscription en cours <span className="text-xl">150</span>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="size-card-12 card-speedrun">
                                    <Card className="card-border">
                                        <Card.Body className="card-border">
                                            <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                                <Button onClick={api} className="col-md-12 text-center text-right color-speedrun-success">Voir API</Button>
                                            </div>
                                            <hr/>
                                            <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                                <Button onClick={login} className="col-md-12 text-center text-right color-speedrun-success">Déconnexion</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>                                
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </div>
        </div>
    </>
    )
}

export default Home;
