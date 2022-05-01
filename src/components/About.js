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
                    <Offcanvas.Title className="sideNavTitle">Glass Gem</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="sideNavList">
                        <li className="navListItems"><Link className="navLinks" to="/home">Home</Link></li>
                        <li className="navListItems"><Link className="navLinks" to="/about">About</Link></li>
                        <li className="navListItems"><Link className="navLinks" to="/wine">Our Wines</Link></li>
                        <li className="navListItems"><Link className="navLinks" to="/cart">Cart</Link></li>
                        <li className="navListItems"><Link className="navLinks" to="/login">Login</Link></li>
                        <li className="navListItems"><Link className="navLinks" to="/register">Register</Link></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
          </>
        );
      }

    return(
        <div className="aboutContainer d-flex flex-column">
            <div className="nonFooterWrapper">
                <Row>
                    <Col xs={4}>
                        <SideNav/>
                    </Col>
                </Row>

                <Row className="">
                    <Col>
                        <div className="aboutUsMainImg d-flex justify-content-center align-items-center">
                            <h1 className="ourStoryHeaders headingFontStyle">Our Story</h1>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs={12} md={6} xl={5} className="">
                        <div className="aboutCircles ourHistoryImg headingFontStyle mx-auto d-flex justify-content-center align-items-center">
                            The Beginning
                        </div>
                    </Col>

                    <Col xs={12} sm={10} xl={7} className="d-flex justify-content-center align-items-center mx-auto">
                        <div className="aboutInfoTxt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi mi, 
                            malesuada eu eleifend sed, consectetur nec est. Sed porttitor lorem a mollis 
                            interdum. Mauris eu gravida neque, vel aliquam mauris. Mauris vel metus id orci 
                            aliquam maximus. Fusce vitae scelerisque ante. Nam non dapibus lorem. Vestibulum 
                            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                            Curabitur lacinia dui justo, eget venenatis justo rutrum quis. Aliquam placerat 
                            turpis sit amet justo ultricies, et ornare ligula ultricies. Etiam ut lobortis 
                            arcu, nec ornare lorem. Donec molestie urna ut nulla tristique, non pellentesque 
                            lorem ultrices. Aliquam erat volutpat. Etiam ut est vulputate, maximus nulla 
                            lorem. Nunc rutrum odio a felis hendrerit, placerat maximus turpis accumsan. Nunc 
                            scelerisque accumsan quam, et sagittis ex finibus finibus. Cras porttitor diam 
                            sit amet urna fringilla semper. Maecenas purus velit, egestas at vestibulum non.
                            Curabitur lacinia dui justo, eget venenatis justo rutrum quis. Aliquam placerat 
                            turpis sit amet justo ultricies, et ornare ligula ultricies. Etiam ut lobortis 
                            arcu, nec ornare lorem. Donec molestie urna ut nulla tristique, non pellentesque 
                            lorem ultrices.                             
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs={12} md={6} xl={5} className="order-1 order-xl-2">
                        <div className="aboutCircles ourVinesImg headingFontStyle mx-auto d-flex justify-content-center align-items-center">
                            Our Process
                        </div>
                    </Col>

                    <Col xs={12} sm={10} xl={7} className="d-flex justify-content-center align-items-center mx-auto order-2 order-xl-1">
                        <div className="aboutInfoTxt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi mi, 
                            malesuada eu eleifend sed, consectetur nec est. Sed porttitor lorem a mollis 
                            interdum. Mauris eu gravida neque, vel aliquam mauris. Mauris vel metus id orci 
                            aliquam maximus. Fusce vitae scelerisque ante. Nam non dapibus lorem. Vestibulum 
                            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                            Curabitur lacinia dui justo, eget venenatis justo rutrum quis. Aliquam placerat 
                            turpis sit amet justo ultricies, et ornare ligula ultricies. Etiam ut lobortis 
                            arcu, nec ornare lorem. Donec molestie urna ut nulla tristique, non pellentesque 
                            lorem ultrices. Aliquam erat volutpat. Etiam ut est vulputate, maximus nulla 
                            lorem. Nunc rutrum odio a felis hendrerit, placerat maximus turpis accumsan. Nunc 
                            scelerisque accumsan quam, et sagittis ex finibus finibus. Cras porttitor diam 
                            sit amet urna fringilla semper. Maecenas purus velit, egestas at vestibulum non.
                            Curabitur lacinia dui justo, eget venenatis justo rutrum quis. Aliquam placerat 
                            turpis sit amet justo ultricies, et ornare ligula ultricies. Etiam ut lobortis 
                            arcu, nec ornare lorem. Donec molestie urna ut nulla tristique, non pellentesque 
                            lorem ultrices.                             
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <div className="aboutUsImg2 d-flex justify-content-center align-items-center">
                            <h2 className="ourStoryHeaders headingFontStyle text-center">Pure Luxury in a Bottle</h2>
                        </div>
                    </Col>
                </Row>    
            </div>

            <Footer />
        </div>
    )
}

export default About;