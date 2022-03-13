import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
//import WineBottle1 from '../images/wine1.jpeg';
import WineBottle from '../images/wineBot.jpeg';
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
        //console.log(Number(wineItem.quantity));
        
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
                        quantity: Number(wineItem.quantity + 1)
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
                    quantity: Number(wineItem.quantity - 1)
                }))
            }
        }

        //Remove Item From Cart
        let _removeCartItem = () => {
            dispatch(removeFromCart(wineItem));
        }

        return(
            <Row key={wineItem.id} className="mt-4">
                <Col xs={6} sm={5} xl={4} className="d-flex justify-content-center order-1">
                    <img className="cartImg" src={WineBottle} alt="Wine Bottle" /> 
                </Col>

                <Col xs={6} sm={5} xl={2} className="order-2">
                    <div className="cartItemName">{wineItem.name}</div>
                    <div className="cartItemPrice">&#40;&euro;{wineItem.price}&#41;</div>
                </Col>

                <Col xs={7} sm={6} xl={3} className="order-4 order-sm-5 order-xl-4">
                    <div className="d-flex idWine qtyBtnsContainer" id={wineItem.id}>
                        <div className="cartQtyBtns" onClick={_decrementQty}>&lt;</div>
                        <div className="qtyValue">{wineItem.quantity}</div>
                        <div className="cartQtyBtns" onClick={_incrementQty}>&gt;</div>
                    </div>
                    
                </Col>

                <Col xs={3} sm={6} xl={2} className="order-3 order-sm-4 order-xl-3">
                    <div className="cartItemTotal">&euro;{itemPrice}</div>
                </Col>

                <Col xs={2} sm={2} xl={1} className="order-5 order-sm-3 order-xl-5">
                    <BsTrash2Fill className="trashCan" onClick={_removeCartItem} />
                </Col>
            </Row>
        )
    })
     
    return (
        <div className="cartContainer d-flex flex-column justify-content-center align-items-center">
            { cart.cart.length === 0 ? (
                <div className="cartMain">
                    <div className="text-center cartHeadingEmpty headingFontStyle">Your Cart Is Currently Empty</div>
                    <div className="text-center">
                        <Link className="" to="/wine"><Button className="startShopBtn">Shop</Button></Link>    
                    </div>
                </div>
            ) : (
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="cartMain">
                        <div className="text-center cartHeadingFull headingFontStyle">Cart&#40;{cart.cartCount}&#41;</div>
                    
                        <div>
                            {allCartItems}
                        </div>
        
                        <div className="mt-5 subtotalContainer d-flex flex-column">
                            <div id="subtotal" className="mb-2"><span><strong>Subtotal:</strong></span> &euro;{cart.total}</div>
                            <Button id="checkoutBtn" className="mb-2">Checkout</Button>
                            <div id="taxShipMsg">*Taxes and shipping calculated at checkout</div>
                        </div>
                    </div>
    
                    <div className="cartWarningMsg mt-2">{qtyLimitMsg}</div>
        
                    <div className="cartWarningMsg">{outOfStock}</div>
        
                    <Link to="/wine" className="mt-3 cartContShpLink">Continue Shopping</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
