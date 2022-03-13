import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from './Footer';
import homeVineyard from '../images/greenTreeVinyard.jpeg';
import swirl from '../images/swirl2.png';



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
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center mt-3">
                        <div className="text-center ms-3 me-3">
                            <h1 className="homeHeader headingFontStyle">
                                Redefining The Future Of Top Quality Italian Wine
                            </h1>
                            <div id="swirlWrapper">
                                <img id="swirl" src={swirl} alt="swirl" />
                            </div>   
                        </div>                    
                    </Col>

                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <img className="homeVineyardImg" src={homeVineyard} alt="Green trees on vineyard at sunset" />
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs={12} md={7} xl={6} className="mx-auto">
                      <h2 className="homeSubHeader1 text-center headingFontStyle p-2">Producing a Smooth and Balanced Wine Drenched in <span className="underLineWord">Elegance</span> Is No Easy Task. 
                          Not To Worry. Vino Di Stella Has You Covered.
                      </h2>
                    </Col>

                    <Col xs={12} md={10} lg={9} xl={8} className="mx-auto mt-3">
                        <p className="homeInfoTxt p-3">
                            Vino Di Stella redefines the quality and expectations of fine Italian wine.
                            Everyday, we pour our hearts and souls into every bottle and we hope you may
                            taste the genuine efforts of our labor. We use only the best techniques and
                            grade A machinery, from grape seed to bottle, creating something magical 
                            with each sip. 
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs={12} md={6} className="">
                        <div className="homeCircles ourVineyardsImg headingFontStyle mx-auto d-flex justify-content-center align-items-center">
                            Our Vineyards
                        </div>
                    </Col>

                    <Col xs={12} sm={10} md={6} xl={4} className="d-flex justify-content-center align-items-center mx-auto">
                        <div className="homeInfoTxt p-3">Our winery expands over 85 acres of planted vineyards, producing  
                             nebbiolo and angiovese grapes to create our finest Barolo, Brunello di Montalcino
                             and more. Every year, our vines yield an abundance of healthy grapes - 
                             the stepping stones for creating our award-winning wines.
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs={12} sm={10} md={6} xl={4} className="d-flex flex-column justify-content-center align-items-center mx-auto order-2 order-md-1">
                        <div className="homeInfoTxt p-3">
                            We offer guided tours and tastings &#40;California location only&#41;
                            Thursday-Sunday from 11am-4:30pm. Each tour is around 30 min and begins
                            with an introduction to the history of our company and spectacular wine
                            making process. You will then have a chance try each of our wines paired
                            with a appetizer specially picked to pair with your current wine sample. 
                        </div>
                        <div id="ageReqrmntMsg" className="p-3" style={{color: "white"}}>*Must be 21 or older to participate. I.D is required before entry</div>
                    </Col>

                    <Col xs={12} md={6} className="order-1 order-md-2">
                        <div className="homeCircles winePourImg headingFontStyle mx-auto d-flex justify-content-center align-items-center">
                            Wine Tours and Tastings
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className="d-flex justify-content-center align-items-center accomplishmentsWrapper">
                        <div className="accomplishments text-center">
                            <h2 id="accompTitle" className="headingFontStyle">Our Humble Accomplishments</h2>
                            Named Wine of the Year by Fancy Italian Wine Magazine
                            <br/>
                            Voted #1 Wine by Wonderful Wines of the World LLC
                            <br />
                            "Hands down best wine I've ever tasted!" -Amaril Logosse
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <div className="homeVineyardImg2 d-flex flex-column justify-content-center align-items-center">
                            <p id="visitUs" className="headingFontStyle">We Welcome You To Visit Us</p>
                            <p id="hoursOfOp"><strong>Open:</strong> Thursday - Sunday | 11am to 4:30pm</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <Footer />
        </div>
    )
}

export default Home;