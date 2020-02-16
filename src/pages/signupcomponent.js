import React, {Component} from "react";
import {Form, Button, Row, Container, Col} from 'react-bootstrap';

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <Form>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="email" placeholder="Full name"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupLocation">
                        <Form.Label>Location (City, Province)</Form.Label>
                        <Form.Control type="password" placeholder="Location (City, Province)"/>
                    </Form.Group>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Label>Gender</Form.Label>
                                {['checkbox'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Male" type={type} id={`inline-${type}-1`}/>
                                        <Form.Check inline label="Female" type={type} id={`inline-${type}-2`}/>
                                        <Form.Check inline label="Other" type={type} id={`inline-${type}-2`}/>

                                    </div>
                                ))}
                            </Col>
                            <Col>
                                <Form.Label>Looking For</Form.Label>
                                {['checkbox'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Male" type={type} id={`inline-${type}-1`}/>
                                        <Form.Check inline label="Female" type={type} id={`inline-${type}-2`}/>
                                        <Form.Check inline label="Other" type={type} id={`inline-${type}-2`}/>

                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </Container>

                </Form>
                <Button variant="signup" size="lg" block>
                    Sign Up
                </Button>

                <style type="text/css">
                    {
                        ` .btn-signup {
                            background: rgb( 30 215 96);
                            color: white; //if a semi colon appears here, DELETE IT 
                        }
                         `
                    }
</style>
            </form>

        );
    }
}
