import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import WineBottle1 from '../images/wine1.jpeg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../features/cart'

const Wine = () => {
    const [quantity, setQuantity] = useState(0);
    const[qtyLimitMsg, setQtyLimitMsg] = useState('');
    const [itemAddedMsg, setItemAddedMsg] = useState('');
    const[outOfStock, setOutOfStock] = useState('');
    
    const wine = useSelector(state => state.inventory.value);
    const cart = useSelector(state => state.cart.value.cart)
    const dispatch = useDispatch(state => state.cart.value);

    //console.log(cart);

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
                        <li><Link className="navLinks" to="/contact">Contact Us</Link></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
          </>
        );
    }


   // QUANTITY BUTTONS - INC AND DEC QTY
    /* 
    --PROBLEM: All wine quantity values change simultaneously  
    --TRIED SOLUTION (below): It works but w/ a "lag" so when the + is first 
        clicked, the state remains at 0 INSIDE the incrementQty func
        but somehow does in fact increase to 1 OUTSIDE the incrementQty func.
        console.log() to see this
    
    let qtyValue = e.target.parentElement.querySelector('.qtyValue');
    qtyValue.innerText = quantity;  
    */
    
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
            let priceNum = parseInt(price.slice(1));
    
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
            <Row key={wine.id} className="mt-3">
                <Col className="tempBordWine d-flex justify-content-center">
                    <img className="wineBottleImg" src={WineBottle1} alt="Wine Bottle" /> 
                </Col>

                <Col className="tempBordWine d-flex justify-content-center align-items-center">
                    <Accordion>
                        <Accordion.Item eventKey="0" id={wine.id}>
                            <Accordion.Header className="wineName">{wine.name}</Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        carrot cake chupa chups marshmallow chocolate bar gummies jelly. Sesame snaps 
                                        sugar plum sugar plum marshmallow gummies jelly beans. Chocolate liquorice 
                                        dragée apple pie biscuit pie cake. Powder croissant powder chupa chups biscuit 
                                        croissant cupcake. Cupcake topping dragée pastry bear claw croissant carrot cake 
                                    </div>
                                    
                                    <div className="winePrice">&#36;{wine.price}</div>
                                    
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
        <div className="wineContainer">
            <SideNav/>
            <Container className="mainWine">
                {wineAndDetails}  
            </Container>
        </div>
    );
};

export default Wine;
