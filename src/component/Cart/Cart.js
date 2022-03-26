import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    return (
        <div className='cart-section'>
            <div className="cart">
            <h2>This is Cart: {cart.length}</h2>
            </div>
        </div>
    );
};

export default Cart;