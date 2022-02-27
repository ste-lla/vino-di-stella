import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
//import Container from "react-bootstrap/Container";
//import Col from "react-bootstrap/Col";
//import Row from "react-bootstrap/Row";

const Landing = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [confirmAge, setConfirmAge] = useState('');
    
    let _handleVerify = () => {
        checked ? setChecked(false) : setChecked(true);
    }

    let _handleSubmit = (e) => {
        e.preventDefault();
        if(checked) {
            setConfirmAge('');
            navigate('/home');
        }
        else {
            setConfirmAge('The field above is required!');
        }
    }
    return (
        <div className="landingContainer d-flex justify-content-center">
            <div className="formContainer">
                <Form className="d-flex flex-column">
                    <Form.Group className="mb-3 formLabelHome" controlId="formBasicCheckbox">
                        <Form.Check onChange={_handleVerify} type="checkbox" label="Confirm You Are 21 Or Older Before Entering" name="confirmAge" />
                    </Form.Group>
                    <Button type="submit" className="enterButton mx-auto" onClick={_handleSubmit}>
                        ENTER
                    </Button>
                </Form>
                <div id="confirmAgeMsg" className="text-center mt-3">{confirmAge}</div>
            </div>
        </div>
    ); 
};

export default Landing;
