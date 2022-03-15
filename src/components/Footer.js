import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
//import { BsFacebook } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa"
import { ImInstagram } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return(
        <div>
            <Row className="footer">
                <Col xs={12} md={6} lg={5} className="footerCols footerLftCol">
                    <div className="footer-left">
                        <div id="aboutCo">About The Company</div>
                        <div id="aboutTxt">
                            Vino Di Stella is one of the top 
                            <br/>
                            selling Italian wine brands of
                            <br/>
                            the world. Explore our <Link to='/about' className="footerLinks">about us</Link> 
                            <br/>
                            page to learn more.
                        </div>
                    </div> 
                </Col>

                <Col xs={12} md={6} lg={5} className="footerCols footerCtrCol">
                    <div className="footer-center">
                        <div className="mb-1">
                            <FaMapMarkerAlt className="me-2" />Via Stazione, 33A, 37035 Santi Brogio di Valpollicci VR, Italy
                            <br/>
                            <span className="ms-4">3333 S. Coral Road, Napa, CA 94558</span>
                        </div>

                        <div className="mb-2">
                            <BsFillTelephoneFill className="me-2" /> +39.555.555.5555
                            <br/>
                            <span className="ms-4">+1.555.555.5555</span>
                        </div>

                        <div className="mb-2">
                            <FaEnvelope className="me-2" /> <Link to="#" className="footerLinks">vinodistella@company.com</Link>
                        </div>
                    </div> 
                </Col>

                <Col xs={12} md={6} lg={2} className="footerCols footerRgtCol">
                    <div className="footer-right">
                        <div className="mb-2 followUs">Follow Us</div>
                        <span className="me-4"><Link to="#" className="socMediaLinks"><FaFacebookF className="socMediaIcons"/></Link></span>
                        <span className="me-4"><Link to="#" className="socMediaLinks"><ImInstagram className="socMediaIcons"/></Link></span>
                        <span className="me-4"><Link to="#" className="socMediaLinks"><BsTwitter className="socMediaIcons"/></Link></span>   
                    </div>
                </Col>
            </Row> 
        </div>
    )
}

export default Footer;