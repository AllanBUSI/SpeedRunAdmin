import React, { useState, useEffect } from 'react';
import  { BrowserRouter,Link} from 'react-router-dom'
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, Card, Image } from 'react-bootstrap';
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

    const [polar, setPolar] = useState({
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
    });

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
                <div className="col-md-2 col-xs-12 hover-color"><Nav.Link onClick={publicite} className=" hover-color">Publicité</Nav.Link></div>
                <div className="col-md-2 col-xs-12 hover-color">
                    <NavDropdown className="hover-color" title="Gestion" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={user}>Utilisateur</NavDropdown.Item>
                        <NavDropdown.Item onClick={coach}>Coach</NavDropdown.Item>
                        <NavDropdown.Item onClick={admin}>Administration</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className="col-md-2 hover-color">
                    <Nav.Link className="hover-color active" onClick={profil}>Mon Profil</Nav.Link>
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
                                <p className="text-left col-md-12 col-xs-12">Nom : <input type="text" className="form-control" placeholder="sylvestre"/></p>
                                <p className="text-left col-md-12 col-xs-12">Prenom : <input type="text" className="form-control" placeholder="mike"/></p>
                            </div>
                        </div>
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
                                    <Form.Text className="text-muted">
                                        Cet image sera afficher sur les applications mobiles pendant la durée choisie.
                                    </Form.Text>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                        <hr/>
                            <div  className="row">
                                <p className="text-center col-md-12 col-xs-12">Email : <input type="email" className="form-control" placeholder="mike.sylvestre@imie-paris.fr"/></p>
                                <p className="text-center col-md-6 col-xs-12">Password : <input type="password" placeholder="password" className="form-control" /></p>
                                <p className="text-center col-md-6 col-xs-12">Confirme password : <input type="password" placeholder="password" className="form-control" /></p>
                            </div>
                        <hr/>
                        <div className="row">
                            <p className="text-center col-md-12 col-xs-12">Date d'inscritpion : <span style={{fontWeight: "bold"}}> {new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()} </span></p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                <Button style={{ borderColor:"#302d42" }} className="col-md-12 text-center text-right bg-danger">Désactiver mon profil</Button>
                            </div>
                            <div className="col-md-4 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                <Button className="col-md-12 text-center text-right color-speedrun-success">Activer les modifications</Button>
                            </div>
                            <div className="col-md-4 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                <Button className="col-md-12 text-center text-right color-speedrun-success">Valider les modifications</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="size-card-5 col-xs-12 card-speedrun size-block-principal d-none d-sm-block d-sm-none d-md-block">
                    <Card.Body className="card-border">
                        <h2>Action en tant que Root</h2>
                        <HorizontalBar data={polar} height={200} />
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
    )
}

export default Home;
