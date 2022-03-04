import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
//import Container from "react-bootstrap/Container";
//import Button from "react-bootstrap/Button";


const Home = () => {

    function SideNav() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <div>
                <GiHamburgerMenu onClick={handleShow} className="burgerMenu" />
            </div>
            {/* <Button variant="primary" onClick={handleShow}>Launch</Button> */}
      
            <Offcanvas className="sideNavMain" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="sideNavTitle">Vino Di Stella</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="sideNavList">
                        <li><Link className="navLinks" to="/home">Home</Link></li>
                        <li><Link className="navLinks" to="/about">About</Link></li>
                        <li><Link className="navLinks" to="/wine">Our Wines</Link></li>
                        <li><Link className="navLinks" to="/cart">Cart</Link></li>
                        <li><Link className="navLinks" to="/login">Login</Link></li>
                        <li><Link className="navLinks" to="/register">Register</Link></li>
                        <li><Link className="navLinks" to="/contact">Contact Us</Link></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
          </>
        );
      }

    return(
        <div className="homeContainer">
            <Row>
                <Col xs={4}>
                    <SideNav/>
                </Col>
            </Row>
            
            <div className="mainHome mx-auto">
                <div className="text-center greetingHome headingFontStyle">Ciao!</div>
                <p className="infoHome">
                    Hello! Welcome to Vino Di Stella. We are so glad that you decided to stop
                    by. You may have just stumbled upon one of the purest top quality wines
                    in existence. Yes, we truly believe that and so will you should you decide 
                    to try! From the wine connoisseurs to the causal adventurists, Vino Di Stella 
                    has something refreshing for everyone to love and enjoy. 
                </p>
            </div>            
        </div>
    )
}

export default Home;