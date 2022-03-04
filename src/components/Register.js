import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [registerMsg, setRegisterMsg] = useState('');

    let _handleRegister = (e) => {
        e.preventDefault();
       
        const data = { 
            fName: e.target.fname.value,
            lName: e.target.lname.value,
            email: e.target.email.value,
            password: e.target.password.value, 
            confPassword: e.target.confPassword.value
        };

        fetch('http://localhost:3001/api/register', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            if(data.created) {
                navigate('/login');
            }
            else {
                setRegisterMsg(data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return(
        <div className="registerContainer">
            <div id="registerTitle" className="headingFontStyle">Register</div>
            <Form className="registerForm" onSubmit={_handleRegister}>
                <Row className="">
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            {/* <Form.Label className="formLabels">First Name</Form.Label> */}
                            <Form.Control required type="text" name="fname" placeholder="First Name" />
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3">
                            {/* <Form.Label className="formLabels">Last Name</Form.Label> */}
                            <Form.Control required type="text" name="lname" placeholder="Last Name" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control required type="email" placeholder="Email" name="email" />
                        </Form.Group>
                    </Col>
                    
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control required type="password" placeholder="Password" name="password" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="">
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control required type="password" placeholder="Confirm Password" name="confPassword" />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-flex justify-content-center">
                    <Button className="registerButton" type="submit">Register</Button>
                </div>
            </Form>

            <div className="registerErrMsg mt-3">{registerMsg}</div>

            <div className="text-center mt-2" style={{fontSize: "1.1rem"}}><Link to="/home">Return Home</Link></div>
        </div>
    )
}

export default Register;