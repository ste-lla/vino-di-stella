import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [loginErrMsg, setLoginErrMsg] = useState('');

    let _handleLogin = (e) => {
        e.preventDefault();
       
        const data = { 
            email: e.target.email.value,
            password: e.target.password.value 
        };

        fetch('http://localhost:3001/api/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.login) {
                navigate('/home');
            }
            else {
                setLoginErrMsg(data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return(
        <div className="loginContainer">
            <div id="loginTitle" className="headingFontStyle">Login</div>
            <Form className="loginForm" onSubmit={_handleLogin}>
                <Row className="d-flex justify-content-center">
                    <Col xs={12}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Email" name="email" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col xs={12}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control type="password" placeholder="Password" name="password" />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-flex justify-content-center">
                    <Button className="loginButton" type="submit">Login</Button>
                </div>
            </Form>

            <div className="loginErrMsg mt-3">{loginErrMsg}</div>

            <div className="text-center mt-2" style={{fontSize: "1.1rem"}}><Link to="/home">Return Home</Link></div>
        </div>
    )
}

export default Login;