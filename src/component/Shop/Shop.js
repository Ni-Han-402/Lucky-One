import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([])




    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const chooseOneItem = () => {
           const random = [cart[Math.floor(Math.random()*cart.length)]];
            setRandom(random);
            console.log(random);
    }
    const removeCart = () =>{
        setCart([]);
        setRandom([])
    }
   

    return (
        
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                 
            </div>
            <div className="cart-container">
            <div className='cart-section'>
                <h2>Selected Items</h2>
                {
                    cart.map(item => <div 
                        key={item.id} 
                        >
                            
                            <div className="cart">
                                <img key={item.id} src={item.img} alt="" />
                                <p>{item.name}</p>
                            </div>
                        
                        </div>)       
                }
                {
                    
                        random.map(item => 
                            <div key={item.id}>
                            <div className="select-item">
                                <img src={item.img} alt="" />
                                <p>{item.name}</p>
                            </div>
                            </div>)
                    
                }
                <div>
                    <button className='choose-btn' onClick={chooseOneItem} ><p>choose One</p></button>
                    <button className='remove-btn' onClick={removeCart} ><p>Choose Again</p></button>
                </div>
            </div>

                
               
            </div>
        </div>
    );
};

export default Shop;