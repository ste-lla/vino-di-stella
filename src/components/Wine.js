import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
//import WineBottle1 from '../images/wine1.jpeg';
import WineBottle from '../images/wineBot.jpeg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../features/cart';
import Footer from './Footer';

const Wine = () => {
    const [quantity, setQuantity] = useState(0);
    const[qtyLimitMsg, setQtyLimitMsg] = useState('');
    const [itemAddedMsg, setItemAddedMsg] = useState('');
    const[outOfStock, setOutOfStock] = useState('');
    
    //Redux
    const wine = useSelector(state => state.inventory.value);
    const cart = useSelector(state => state.cart.value.cart)
    const dispatch = useDispatch(state => state.cart.value);

    //console.log(quantity);

    //SIDE NAVIGATION WINDOW
    function SideNav() {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <div>
                <GiHamburgerMenu onClick={handleShow} className="burgerMenu" />
            </div>
      
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

    
    //Increment Qty Btn (+)
    let _incrementQty = () => {
        if(quantity <= 9) {
            setQuantity(quantity + 1);
        }
        else {
            setQtyLimitMsg("*Max quantity reached. Please contact us if you're interested in purchasing more.");
        }
    }

    //Decrement Qty Btn (-)
    let _decrementQty = () => {
        if(quantity !== 0) {
            setQuantity(quantity - 1);
        } 
        setQtyLimitMsg('');
    }


    // ADD ITEMS TO CART
    let _handleAddToCart = (e) => {
        if(quantity === 0) {
            setItemAddedMsg('Please select a quantity');
        }
        else {
            setQuantity(0);
            setItemAddedMsg('');
    
            let accordionItem = e.target.parentElement.parentElement.parentElement.parentElement;
           
            let wineId = parseInt(accordionItem.id);
            let wineName = accordionItem.querySelector('.wineName').textContent;
            let price = accordionItem.querySelector('.winePrice').textContent;
            let priceNum = Number(price.slice(1));
    
            const cartItemOverQty = cart.find(cartItem => wineId === cartItem.id && cartItem.quantity + quantity > 10);
            const wineItem = wine.inventory.find((wine => wine.id === wineId));
            const cartItem = cart.find(cartItem => cartItem.id === wineId);
    
            //cartItem qty + qty user wants to add > 10. 10 qty per wine is max limit
            if(cartItemOverQty) {
                setQtyLimitMsg('Qty limit of 10 reached for this item');
                setTimeout(function() {
                    setQtyLimitMsg('');
                }, 8000);
            }
            else {
                //if wineItem selected is already in cart --> check inventory to verify wineItem qty >= asking qty && asking qty + qty already in cart for this wineItem
                if(cartItem) {
                    if(wineItem.quantity >= quantity && wineItem.quantity >= cartItem.quantity + quantity) {
                        setQtyLimitMsg('');
                        dispatch(addToCart({
                            id: wineId,
                            name: wineName,
                            price: priceNum,
                            quantity: quantity   //from the useState quantity variable I defined
                        }))
                        
                        setItemAddedMsg('Added!');
                
                        setTimeout(function() {
                            setItemAddedMsg('');
                        }, 2000);
                    }
                    else {
                        setOutOfStock('Insufficient stock. Please select a lesser qty or contact us directly.');
                        setTimeout(function() {
                            setOutOfStock('');
                        }, 8000)
                    }
                } else { 
                    //if wineItem selected is not yet in cart --> check inventory to verify wineItem qty >= asking qty
                    if(wineItem.quantity >= quantity) {
                        setQtyLimitMsg('');
                        dispatch(addToCart({
                            id: wineId,
                            name: wineName,
                            price: priceNum,
                            quantity: quantity   //from the useState quantity variable I defined
                        }))
                        
                        setItemAddedMsg('Added!');
                
                        setTimeout(function() {
                            setItemAddedMsg('');
                        }, 2000);
                    }
                    else {
                        setOutOfStock('Insufficient stock. Please select a lesser qty or contact us directly.');
                        setTimeout(function() {
                            setOutOfStock('');
                        }, 8000)
                    }
                }
            }

        }
    }


    let wineAndDetails = wine.inventory.map((wine) => {
        return(
            <Row key={wine.id} className="mt-3 mb-3">
                <Col xs={12} md={6} className="tempBordWine d-flex justify-content-center">
                    <img className="wineBottleImg" src={WineBottle} alt="Wine Bottle" /> 
                </Col>

                <Col xs={12} md={6} className="tempBordWine d-flex justify-content-center align-items-center">
                    <Accordion>
                        <Accordion.Item eventKey="0" id={wine.id}>
                            <Accordion.Header className="wineName">{wine.name}</Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in venenatis augue. 
                                        In tempus urna eu ultrices egestas. Pellentesque imperdiet diam nisi, vel 
                                        fringilla nisl ornare ut. Suspendisse efficitur ultrices elit, sit amet dapibus 
                                        eros varius ac. Curabitur blandit porttitor 
                                    </div>
                                    
                                    <div className="winePrice mt-2">&#36;{wine.price}</div>
                                    
                                    <div className="d-flex">
                                        <div className="quantityButtons" onClick={_decrementQty}>&lt;</div>
                                        <div className="qtyValue">{quantity}</div>
                                        <div className="quantityButtons" onClick={_incrementQty}>&gt;</div>
                                    </div>
                                    
                                    <div className="d-flex">
                                        <Button className="addCartBtn mt-3" onClick={_handleAddToCart}>Add To Cart</Button>
                                        <div className="mt-4 ms-3" id="addedMsg">{itemAddedMsg}</div>
                                    </div>

                                    <div className="mt-2">{qtyLimitMsg}{outOfStock}</div>
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>  
                </Col>
            </Row>
        )
    })
            

    return (
        <div className="wineContainer d-flex flex-column">
            <div className="wineWrapper">
                <SideNav/>
                <Container className="mainWine mt-2 mb-3">
                    {wineAndDetails}  
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Wine;
