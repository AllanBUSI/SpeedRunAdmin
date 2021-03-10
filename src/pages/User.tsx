import React, { useState, useEffect } from 'react';
import  { BrowserRouter,Link} from 'react-router-dom'
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, Card, Image, Modal, Col } from 'react-bootstrap';
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substr(0,10);

    return (
        <>
         <Navbar className="nav-postition" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home" style={{color: "#F8AE6B"}} onClick={home}>SpeedRun</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto col-md-8">
                <div className="col-md-2 col-xs-12 hover-color"><Nav.Link onClick={publicite} className=" hover-color">Publicité</Nav.Link></div>
                <div className="col-md-2 col-xs-12 hover-color active">
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
            <div style={{height: "5%", marginBottom:"2%"}} className="text-left">
                <h3>Profil de Mike Sylvestre</h3>
            </div>
            <div className="row">
                <Card className="col-md-5 col-xs-12 card-border card-speedrun">
                    <Card.Body className="card-border ">
                        <div className="row">
                            <Card.Img variant="top" src={preview ? preview : img} height={200} className="col-4 text-center img-change"/>
                            <div className="col-md-8">
                                <p className="text-left col-md-12 col-xs-12">Nom : Mike</p>
                                <p className="text-left col-md-12 col-xs-12">Prenom : Sylvestre</p>
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
                            <div style={{marginTop:"2%"}} className="col-md-12 col-xs-12 d-none d-sm-block d-sm-none d-md-block">
                                <Button className="col-md-12 text-center text-right color-speedrun-success" onClick={handleShow}>Modifier son prochain cours</Button>
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
        <Modal style={{backgroundColor: "rgba(48,45,68,0.5)"}} size="lg" show={show} onHide={handleClose}>
            <Modal.Header style={{backgroundColor: "#302d42"}} closeButton>
            <Modal.Title>Modifier le cours</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: "#302d42"}}>
            <Form>
                <Form.Row className="align-items-center">
                    <div className="col-12">
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                            style={{backgroundColor: "rgba(48,45,68,0.5)", color: "#fff", marginTop:"2%"}}
                        >
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                        </Form.Control>
                        <Form.Control
                            type="Date"
                            placeholder="date"
                            defaultValue={date}
                            style={{backgroundColor: "rgba(48,45,68,0.5)", color: "#fff", marginTop:"2%"}}
                        />
                       <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                            style={{backgroundColor: "rgba(48,45,68,0.5)", color: "#fff", marginTop:"2%"}}
                        >
                            <option value="6">coach1</option>
                            <option value="7">coach2</option>
                            <option value="8">coach3</option>
                            <option value="9">coach4</option>
                            <option value="10">coach5</option>
                            <option value="11">coach6</option>
                        </Form.Control>
                    </div>
                </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: "#302d42"}}>
            <Button variant="danger" onClick={handleClose}>
                Fermer
            </Button>
            <Button className="color-speedrun-success" onClick={handleClose}>
                Valider
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default Home;
