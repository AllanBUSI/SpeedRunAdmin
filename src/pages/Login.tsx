import React from 'react';
import history from '../history'
import img from '.../../../public/fond.png'
import {Button, Form, Col, Row, Container, Image} from 'react-bootstrap';


interface  P {}
interface S {}

export default class Login extends React.Component<P,S> {
    public static Display = Login as React.ComponentType<P>;

    home = () => {
        return history.push('/home')
    }

    password = () => {
        return history.push('/password')
    }

    render()
    {
        return (
                <Container fluid="md">
                    <Row>
                        <Col>
                            <Image src={img} className="col-6"/>
                            <Form style={{ marginTop: "1%"}}>
                                <Form.Group className="text-left" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group className="text-left" controlId="formBasicPassword">
                                    <Form.Label >Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                    <Button onClick={this.home} style={{ backgroundColor: "#fbae6b", border: "1px #302d42 solid"}}  type="submit" block>
                                        Submit
                                    </Button>
                            </Form>
                            <p onClick={this.password}> Mot de passe oublié</p>
                        </Col>
                    </Row>
                </Container>
        )
    }
}