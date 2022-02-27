import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
//import Container from "react-bootstrap/Container";
//import Button from "react-bootstrap/Button";


const Home = () => {

   /*  useEffect(() => {

    
    },[]) */
    
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

    return(
        <div className="homeContainer">
            <Row>
                <Col xs={4}>
                    <SideNav/>
                </Col>
            </Row>
            
            <div className="mainHome mx-auto">
                <h1 className="text-center greetingHome">Welcome to Vino Di Stella</h1>
                <p className="infoHome">Jelly beans tiramisu topping sweet chocolate bar halvah. Tiramisu fruitcake 
                    carrot cake chupa chups marshmallow chocolate bar gummies jelly. Sesame snaps 
                    sugar plum sugar plum marshmallow gummies jelly beans. Chocolate liquorice 
                    dragée apple pie biscuit pie cake. Powder croissant powder chupa chups biscuit 
                    croissant cupcake. Cupcake topping dragée pastry bear claw croissant carrot cake 
                    halvah. Cupcake soufflé bonbon tootsie roll macaroon pudding macaroon shortbread. 
                    Muffin pudding sweet cookie toffee wafer.
                </p>
            </div>            
        </div>
    )
}

export default Home;