import React from 'react';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
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
                    <Nav.Link className="hover-color active" onClick={api}>API</Nav.Link>
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
            <div className="col-12">
                <div style={{height: "3%"}} className="text-left">
                    <h3>API</h3>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/login - Methode POST</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Email - string</td>
                                    </tr>
                                    <tr>
                                        <td>Password - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, message: "connecter"</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>400</td>
                                        <td>error : true, message: "email/password invalide"</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>400</td>
                                        <td>error : true, message: "votre compte à été bloquer temporairement"</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>400</td>
                                        <td>error : true, message: "votre rôle ne vous permets pas de vous connectez"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/register - Methode POST</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Email - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Headers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authorization : bearer - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, message: "email envoyé"</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>403</td>
                                        <td>error : false, message: "forbidden "</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>500</td>
                                        <td>error : true, message: "erreur serveur"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/password - Methode POST</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Email - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, message: "email envoyé"</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>500</td>
                                        <td>error : true, message: "erreur serveur"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/user - Methode GET</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Headers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authorization : bearer - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, user : nom, prenom,adresse, number_adresse, code_postal, ville, email,id_stripe, montent_du,active, active_coach, token, date_create, date_update, prenium, role, poids, taille, cours : [date_debut, date__fin, heure_debut, heure_fin, cours, user : user (envoi l'utilisateur type coach) ], conversation : [ date_envoi, message, user : user (envoi l'utilisateur type coach),facture_coach:[montant_du]], photo_profil, document : [document]  </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>500</td>
                                        <td>error : true, message: "erreur serveur"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/user/:email - Methode GET</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Headers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authorization : bearer - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, user : nom, prenom,adresse, number_adresse, code_postal, ville, email,id_stripe, montent_du,active, active_coach, token, date_create, date_update, prenium, role, poids, taille, cours : [date_debut, date__fin, heure_debut, heure_fin, cours, user : user (envoi l'utilisateur type coach) ], conversation : [ date_envoi, message, user : user (envoi l'utilisateur type coach),facture_coach:[montant_du]], photo_profil, document : [document]  </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>500</td>
                                        <td>error : true, message: "erreur serveur"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/users - Methode GET</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Headers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authorization : bearer - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, user : nom, prenom,adresse, number_adresse, code_postal, ville, email,id_stripe, montent_du,active, active_coach, token, date_create, date_update, prenium, role, poids, taille, cours : [date_debut, date__fin, heure_debut, heure_fin, cours, user : user (envoi l'utilisateur type coach) ], conversation : [ date_envoi, message, user : user (envoi l'utilisateur type coach),facture_coach:[montant_du]], photo_profil, document : [document]  </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>500</td>
                                        <td>error : true, message: "erreur serveur"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/statistique - Methode GET</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Headers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authorization : bearer - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, nombre : nombre_user, nombre_prenium, nombre_gratuit, nombre_coach, nombre_pub, chiffre_affaire]</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>500</td>
                                        <td>error : true, message: "erreur serveur"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/user - Methode PUT</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Headers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authorization : bearer - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Data is Update : string</td>
                                    </tr>
                                    <tr>
                                        <td>Email : string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, message : "uilisateur modifier"</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>500</td>
                                        <td>error : true, message: "erreur serveur"</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>500</td>
                                        <td>error : true, message: "Les données envoyés ne correspondents pas"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/pub - Methode POST</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Headers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authorization : bearer - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Date_debut : datetime</td>
                                    </tr>
                                    <tr>
                                        <td>Date_fin : datetime</td>
                                    </tr>
                                    <tr>
                                        <td>Nom : string</td>
                                    </tr>
                                    <tr>
                                        <td>Prenom : string</td>
                                    </tr>
                                    <tr>
                                        <td>CCV : Number</td>
                                    </tr>
                                    <tr>
                                        <td>Number_carte : Number</td>
                                    </tr>
                                    <tr>
                                        <td>Expire_date : Date</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>201</td>
                                        <td>error : false, message : "pub créer"</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>500</td>
                                        <td>error : true, message: "erreur serveur"</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>400</td>
                                        <td>error : true, message: "Les données envoyés ne correspondents pas"</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>400</td>
                                        <td>error : true, message: "Le paiement ne peuvent pas être valider vérifier les informations"</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>400</td>
                                        <td>error : true, message: "Les dates ne sont pas disponibles"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/pubs - Methode GET</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Headers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authorization : bearer - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, pub : [nom, date_debut, date_fin]</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>500</td>
                                        <td>error : true, message: "erreur serveur"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/coach - Methode POST</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Headers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authorization : bearer - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Email : string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, message: "Paiement effectuer"</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>400</td>
                                        <td>error : true, message: "Le coach n'a pas solution de paiement"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="size-card-12 col-xs-12 card-speedrun size-block-principal">
                            <h2>/facture - Methode POST</h2>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Headers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Authorization : bearer - string</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mode : (all, utilisateur, pages, id)</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="color-table-get" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="text-left">#</th>
                                        <th className="text-left">Status</th>
                                        <th className="text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>200</td>
                                        <td>error : false, message: "Facture envoyés par email"</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>400</td>
                                        <td>error : true, message: "Aucune facture n'a été envoyer"</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>400</td>
                                        <td>error : true, message: "vous avez selectionner trop de facture (limite 5)"</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home;
