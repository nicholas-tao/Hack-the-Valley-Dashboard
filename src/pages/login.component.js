import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Login</h3>

                <Form>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="email" placeholder="Password"/>
                    </Form.Group>
                </Form>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Button variant="signup" size="lg" block>
                    Login
                </Button>                
                <style type="text/css"> {
                        ` .btn-signup {
                            background: rgb( 30 215 96);
                            color: white;
                        }
                         ` //if a semi colon appears here, DELETE IT 
                }</style>
               
            </form>
            
        );
    }
}