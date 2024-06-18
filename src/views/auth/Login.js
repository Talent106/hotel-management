import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SideBarImg from "../../assets/login.jpg";
import './Login.scss';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login">
            <Card>
                <Card.Body>
                    <Image className="left-side" src={SideBarImg} rounded/>
                    <div className="right-side">
                        <h5>Hello!</h5>
                        <h4 className="mb-4 text-primary">Good morning</h4>
                        <div className="center-side">
                            <Card.Title>Login Your Account</Card.Title>
                            <div className="flex-d w-100">
                                <Button
                                    className="mt-4 ms-2"
                                    variant="outline-info"
                                >
                                    <i className="bi bi-google me-2"/>
                                    Continue with Google
                                </Button>
                                <Button
                                    className="mt-2 ms-2"
                                    variant="outline-info"
                                >
                                    <i className="bi bi-facebook me-2"/>
                                    Continue with Facebook
                                </Button>
                                <Button
                                    className="mt-2 ms-2"
                                    variant="outline-info"
                                >
                                    <i className="bi bi-linkedin me-2"/>
                                    Continue with Linkedin
                                </Button>
                            </div>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="mt-4">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Please input your password." />
                                </Form.Group>
                            </Form>
                            <div className="btn-line">
                                <Button className="mt-4 me-4" variant="primary">
                                    <i className="bi-lock-fill me-2"/>
                                    Login
                                </Button>
                                <Button
                                    className="mt-4 ms-4"
                                    variant="success"
                                    onClick={() => navigate("/register")}
                                >
                                    <i className="bi-person-fill-add me-2"/>
                                    Register
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login;