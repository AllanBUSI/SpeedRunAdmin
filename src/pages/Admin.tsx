import React, { useState, useEffect } from 'react';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HorizontalBar } from 'react-chartjs-2';
import history from '../history'
import img from '.../../../public/profil.jpg'


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

const Home = () =>  {

    const polar = {
        labels: ['','Création profil', 'Coach créé', 'Publicités lancer',''],
        datasets: [
            {
                label: '',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [0,6,5,3,0]
            }
        ]
    };

    const selectedFile = useState()
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

    return (
        <>
         <Navbar className="nav-postition" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand style={{color: "#F8AE6B"}} onClick={home}>SpeedRun</Navbar.Brand>
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
            <div style={{height: "5%"}} className="text-left">
                <h3>Profil de Mike Sylvestre</h3>
            </div>
            <div className="row">
                <Card className="col-md-5 col-xs-12 card-border card-speedrun">
                    <Card.Body className="card-border ">
                        <div className="row">
                            <Card.Img variant="top" src={preview ? preview : img} height={200} className="col-4 text-center img-change"/>
                            <div className="col-md-8">
                                <p className="text-left col-md-12 col-xs-12">Nom : <span style={{fontWeight: "bold"}}>Mike</span> </p>
                                <p className="text-left col-md-12 col-xs-12">Prenom : <span style={{fontWeight: "bold"}}>Sylvestre</span></p>
                                <p className="text-left col-md-12 col-xs-12">Email : <span style={{fontWeight: "bold"}}>mike.sylvestre@imie-paris.com</span></p>
                                <p className="text-left col-md-12 col-xs-12">Date d'inscritpion : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Changer le role</Form.Label>
                                    <Form.Control style={{ backgroundColor: "#302d42", color:"#fff"}} as="select">
                                        <option>Admin</option>
                                        <option>Publicitaire</option>
                                        <option>Root</option>
                                        <option>User</option>
                                        <option>Coach</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                <Button style={{ borderColor:"#302d42" }} className="col-md-12 text-center text-right bg-danger">Désactiver le profil</Button>
                            </div>
                            <div style={{marginTop:"2%"}} className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                <Button className="col-md-12 text-center text-right color-speedrun-success">Valider les modifications</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="size-card-5 col-xs-12 card-speedrun size-block-principal d-none d-sm-block d-sm-none d-md-block">
                    <Card.Body className="card-border">
                        <h2>Action en tant que Role</h2>
                        <HorizontalBar data={polar} height={200} />
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
    )
}

export default Home;
