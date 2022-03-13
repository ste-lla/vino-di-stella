import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from './Footer';
import homeVineyard from '../images/greenTreeVinyard.jpeg';
import homeVineyard2 from '../images/vineyard2Home.jpeg';



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

                <Row>
                    <Col className="d-flex align-items-center">
                        <h1 className="homeHeader mx-auto">Redefining The Future Of 
                        <br/> 
                        <span class="underLineWord">Top Quality</span> Italian Wine
                        </h1>
                    </Col>

                    <Col>
                        <img className="homeVineyardImg" src={homeVineyard} alt="Green trees on vineyard at sunset" />
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xl={6} className="mx-auto">
                      <h2 className="homeSubHeader1 text-center">Producing a Smooth and Balanced Wine Drenched in <span class="underLineWord">Elegance</span> Is No Easy Task. 
                          Not To Worry. Vino Di Stella Has You Covered.
                      </h2>
                    </Col>

                    <Col xl={8} className="mx-auto mt-3">
                        <p className="homeDescription1">
                            Vino Di Stella redefines the quality and expectations of fine Italian wine.
                            Everyday, we pour our hearts and souls into every bottle and we hope you may
                            taste the genuine efforts of our labor. Our 85 acre vineyard contains everything
                            we need to grow the finest grapes and transform them into something magical creating 
                            special memories with each sip. 
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xl={6} className="">
                        <div className="homeCircles mx-auto d-flex justify-content-center align-items-center">
                            Our Vineyards
                        </div>
                    </Col>

                    <Col xl={6}>

                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xl={6}>

                    </Col>

                    <Col xl={6} className="">
                        <div className="homeCircles mx-auto d-flex justify-content-center align-items-center">
                            Wine Tours and Tastings
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <div className="homeVineyardImg2 d-flex justify-content-center align-items-center">We Welcome You To Visit Us Anytime</div>
                        {/* <img className="homeVineyardImg2" src={homeVineyard2} alt="Wine vineyard with mountains in background" /> */}
                    </Col>
                </Row>
                
               {/*  <div className="mainHome mx-auto mb-2">
                    <div className="text-center greetingHome headingFontStyle">Ciao!</div>
                    <p className="infoHome">
                        Hello! Welcome to Vino Di Stella. We are so glad that you decided to stop
                        by. You may have just stumbled upon one of the purest top quality wines
                        in existence. Yes, we truly believe that and so will you should you decide 
                        to try! From the wine connoisseurs to the causal adventurists, Vino Di Stella 
                        has something refreshing for everyone to love and enjoy. 
                    </p>
                </div>  */}
            </div>

            <Footer />
        </div>
    )
}

export default Home;