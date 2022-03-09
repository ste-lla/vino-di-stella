import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import WineBottle1 from '../images/wine1.jpeg';
import { Link } from 'react-router-dom';
import { BsTrash2Fill } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { incCartQty, decCartQty, removeFromCart } from '../features/cart';

const Cart = () => {
    const [qtyLimitMsg, setQtyLimitMsg] = useState('');
    const[outOfStock, setOutOfStock] = useState('');

    const wine = useSelector(state => state.inventory.value);
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch(state => state.cart.value);
    
    console.log(cart);

    let allCartItems = cart.cart.map((wineItem) => {
        let itemPrice = wineItem.price * wineItem.quantity;
        //console.log(`outsideFunc: ${wineItem.quantity}`);
        
        //Increase QTY Btn (+)
        let _incrementQty = (e) => {
            const selectedWineId = parseInt(e.target.parentElement.id);
            const wineFound = wine.inventory.find((wine => wine.id === selectedWineId));
            
            //Ensure user does not select more than 10 qty. 10 is the max
            if(wineItem.quantity < 10) {
                //check inventory to ensure qty >= cart wineItem qty + 1
                if(wineFound.quantity >= wineItem.quantity + 1) {
                    dispatch(incCartQty({
                        id: selectedWineId,
                        quantity: wineItem.quantity + 1
                    }))
                }
                else {
                    setOutOfStock('Insufficient stock. Please select a lesser qty or contact us directly.');
    
                    setTimeout(function() {
                        setOutOfStock('');
                    }, 8000);
                }
            //Else, alert user max qty reached. 10 is the max   
            } else { 
                setQtyLimitMsg("Max quantity reached. Please contact us if you're interested in purchasing more.");

                setTimeout(function() {
                    setQtyLimitMsg('');
                }, 8000);
            }
        }

        //Decrease QTY Btn (-)
        let _decrementQty = (e) => {
            const selectedWineId = parseInt(e.target.parentElement.id);
            if(wineItem.quantity !== 1) {
                dispatch(decCartQty({
                    id: selectedWineId,
                    quantity: wineItem.quantity - 1
                }))
            }
        }

        //Remove Item From Cart
        let _removeCartItem = () => {
            dispatch(removeFromCart(wineItem));
        }

        return(
            <Row key={wineItem.id} className="mt-3">
                <Col className="d-flex justify-content-center">
                    <img className="cartImg" src={WineBottle1} alt="Wine Bottle" /> 
                </Col>

                <Col>
                    <div>{wineItem.name}</div>
                    <div>&#40;&#36;{wineItem.price}&#41;</div>
                </Col>

                <Col>
                    <div className="d-flex idWine" id={wineItem.id}>
                        <div className="quantityButtons" onClick={_decrementQty}>&lt;</div>
                        <div className="qtyValue">{wineItem.quantity}</div>
                        <div className="quantityButtons" onClick={_incrementQty}>&gt;</div>
                    </div>
                    
                </Col>

                <Col>
                    <div>&#36;{itemPrice}</div>
                </Col>

                <Col>
                    <BsTrash2Fill className="trashCan" onClick={_removeCartItem} />
                </Col>
            </Row>
        )
    })
     
    return (
        <div className="cartContainer d-flex flex-column justify-content-center align-items-center">
            { cart.cart.length === 0 ? (
                <div className="cartMain">
                    <div className="text-center cartHeading headingFontStyle">Your cart is currently empty</div>
                    <Link to="/wine" className="">Start Shopping</Link>
                </div>
            ) : (
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="cartMain">
                        <div className="text-center cartHeading headingFontStyle">Cart&#40;{cart.cartCount}&#41;</div>
                    
                        <div>
                            {allCartItems}
                        </div>
        
                        <div className="">
                            Subtotal: &#36;{cart.total}
                            <br/>
                            <Button>Checkout</Button>
                            <br/>
                            <div>*Taxes and shipping calculated at checkout</div>
                        </div>
                    </div>
    
                    <div>{qtyLimitMsg}</div>
        
                    <div>{outOfStock}</div>
        
                    <Link to="/wine" className="mt-3">Continue Shopping</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
