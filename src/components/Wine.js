import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from 'react-bootstrap/Accordion';
import WineBottle1 from '../images/wine1.jpeg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Wine = () => {

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
      
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Vino Di Stella</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="sideNavList">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/wine">Our Wines</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
          </>
        );
    }


    return (
        <div className="wineContainer">
        <SideNav/>
        <Container className="mainWine">
            <Row className="mt-3">
                <Col className="tempBordWine d-flex justify-content-center">
                    <img className="wineBottleImg" src={WineBottle1} alt="WineBottle1" />
                    <div>
                        Quantity 
                    </div>   
                </Col>
                <Col className="tempBordWine d-flex justify-content-center align-items-center">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Fancy Chablis</Accordion.Header>
                                <Accordion.Body>
                                    carrot cake chupa chups marshmallow chocolate bar gummies jelly. Sesame snaps 
                                    sugar plum sugar plum marshmallow gummies jelly beans. Chocolate liquorice 
                                    dragée apple pie biscuit pie cake. Powder croissant powder chupa chups biscuit 
                                    croissant cupcake. Cupcake topping dragée pastry bear claw croissant carrot cake 
                                    halvah. Cupcake soufflé bonbon tootsie roll macaroon pudding macaroon shortbread. 
                                    Muffin pudding sweet cookie toffee candy.
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col className="tempBordWine d-flex justify-content-center">
                    <img className="wineBottleImg" src={WineBottle1} alt="WineBottle1" />
                </Col>
                <Col className="tempBordWine d-flex justify-content-center align-items-center">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Fancy Zinfandel</Accordion.Header>
                                <Accordion.Body>
                                    carrot cake chupa chups marshmallow chocolate bar gummies jelly. Sesame snaps 
                                    sugar plum sugar plum marshmallow gummies jelly beans. Chocolate liquorice 
                                    dragée apple pie biscuit pie cake. Powder croissant powder chupa chups biscuit 
                                    croissant cupcake. Cupcake topping dragée pastry bear claw croissant carrot cake 
                                    halvah. Cupcake soufflé bonbon tootsie roll macaroon pudding macaroon shortbread. 
                                    Muffin pudding sweet cookie toffee candy.
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col className="tempBordWine d-flex justify-content-center">
                    <img className="wineBottleImg" src={WineBottle1} alt="WineBottle1" />
                </Col>
                <Col className="tempBordWine d-flex justify-content-center align-items-center">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Fancy Chardonnay</Accordion.Header>
                                <Accordion.Body>
                                    carrot cake chupa chups marshmallow chocolate bar gummies jelly. Sesame snaps 
                                    sugar plum sugar plum marshmallow gummies jelly beans. Chocolate liquorice 
                                    dragée apple pie biscuit pie cake. Powder croissant powder chupa chups biscuit 
                                    croissant cupcake. Cupcake topping dragée pastry bear claw croissant carrot cake 
                                    halvah. Cupcake soufflé bonbon tootsie roll macaroon pudding macaroon shortbread. 
                                    Muffin pudding sweet cookie toffee candy.
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col className="tempBordWine d-flex justify-content-center">
                    <img className="wineBottleImg" src={WineBottle1} alt="WineBottle1" />
                </Col>
                <Col className="tempBordWine d-flex justify-content-center align-items-center">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Fancy Pinot Nior</Accordion.Header>
                                <Accordion.Body>
                                    carrot cake chupa chups marshmallow chocolate bar gummies jelly. Sesame snaps 
                                    sugar plum sugar plum marshmallow gummies jelly beans. Chocolate liquorice 
                                    dragée apple pie biscuit pie cake. Powder croissant powder chupa chups biscuit 
                                    croissant cupcake. Cupcake topping dragée pastry bear claw croissant carrot cake 
                                    halvah. Cupcake soufflé bonbon tootsie roll macaroon pudding macaroon shortbread. 
                                    Muffin pudding sweet cookie toffee candy.
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Wine;
