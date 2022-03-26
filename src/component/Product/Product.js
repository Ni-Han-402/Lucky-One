import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {img, name, price} = product;
    
    
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <h4>{name}</h4>
            <p>Price: {price}Tk</p>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'><p>Add to Cart</p></button>
        </div>
    );
};

export default Product;