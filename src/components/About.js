import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from './Footer';



const About = () => {

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
                        {/* <li><Link className="navLinks" to="/contact">Contact Us</Link></li> */}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
          </>
        );
      }

    return(
        <div className="homeContainer d-flex flex-column">
            <div className="nonFooterWrapper">
                <Row>
                    <Col xs={4}>
                        <SideNav/>
                    </Col>
                </Row>
                
                <div className="mainHome mx-auto mb-2">
                    <div className="text-center greetingHome headingFontStyle">About Us</div>
                    <p className="infoHome">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum orci quis 
                    aliquam dignissim. Nunc dictum vel erat et tempus. Aenean vel tortor eget metus 
                    dictum facilisis ac ut ante. In hac habitasse platea dictumst. Suspendisse massa 
                    nisi, efficitur nec egestas faucibus, efficitur sed elit. Maecenas ligula nibh, 
                    tempor et molestie a, consectetur ut enim. Vestibulum molestie lobortis urna sed  
                    </p>
                </div> 
            </div>

            <Footer />
        </div>
    )
}

export default About;