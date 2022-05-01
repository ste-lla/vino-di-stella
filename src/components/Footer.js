import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa"
import { ImInstagram } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return(
        <div>
            <footer>
                <Row className="footer">
                    <Col xs={12} md={6} lg={5} className="footerLftCol">
                        <div className="">
                            <div id="aboutCo" className="footerText">About The Company</div>
                            <div id="aboutTxt" className="footerText">
                                Glass Gem is one of the top 
                                <br/>
                                selling Italian wine brands of
                                <br/>
                                the world. Explore our <Link to='/about' className="footerLinks">about us</Link> 
                                <br/>
                                page to learn more.
                            </div>
                        </div> 
                    </Col>

                    <Col xs={12} md={6} lg={5} className="footerCtrCol">
                        <div className="">
                            <div className="mb-1">
                                <FaMapMarkerAlt className="me-2 footerIcons" />
                                <span className="footerText">Via Stazione, 33A, 37035 Santi Brogio di Valpollicci VR, Italy</span>
                                <br/>
                                <span className="ms-4 footerText">3333 S. Coral Road, Napa, CA 94558</span>
                            </div>

                            <div className="mb-2">
                                <BsFillTelephoneFill className="me-2 footerIcons" /> 
                                <span className="footerText">+39.555.555.5555</span>
                                <br/>
                                <span className="ms-4 footerText">+1.555.555.5555</span>
                            </div>

                            <div className="mb-2">
                                <FaEnvelope className="me-2 footerIcons" /> <Link to="#" className="footerLinks footerText">glassgem@company.com</Link>
                            </div>
                        </div> 
                    </Col>

                    <Col xs={12} md={6} lg={2} className="footerRgtCol">
                        <div className="">
                            <div className="followUs footerText">Connect With Us</div>
                            <span className="me-4"><Link to="#" className="socMediaLinks"><FaFacebookF className="socMediaIcons"/></Link></span>
                            <span className="me-4"><Link to="#" className="socMediaLinks"><ImInstagram className="socMediaIcons"/></Link></span>
                            <span className="me-4"><Link to="#" className="socMediaLinks"><BsTwitter className="socMediaIcons"/></Link></span>   
                        </div>
                    </Col>
                </Row> 
            </footer>
        </div>
    )
}

export default Footer;