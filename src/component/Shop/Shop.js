import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // Set All State
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([])



    // Get Json File 
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    // Product Handler 
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    // Get Random One 
    const chooseOneItem = () => {
           const random = [cart[Math.floor(Math.random()*cart.length)]];
            setRandom(random);
            console.log(random);
    }

    // Remove Handler 
    const removeCart = () =>{
        setCart([]);
        setRandom([])
    }
   

    return (
        
        // Full Container 
        <div className='container'>
            <div className="shop-title">
                <h2>Choose Sunglass</h2>
            </div>
            <div className="shop-container">
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
                        <div className='interactive-btn'>
                            <button className='choose-btn' onClick={chooseOneItem} ><p>choose One</p></button>
                            <button className='remove-btn' onClick={removeCart} ><p>Choose Again</p></button>
                        </div>
                    </div>
                 </div> 
            </div>
            <div className="qus-answer">
                <p>1. React is a javascript library for building user interfaces. The user interface can be easily created using React. And UI can be formed with the help of JSX.React gives us benefits like html by using jsx syntex.React has virtual dom.</p>

                <p>2.
                    <ul>
                        <li>props: Props are read-only.<br/>
                            state:State changes can be asynchronous.</li>
                        <li>props: Props are immutable.<br/>
                            state: State is mutable.
                        </li>
                        <li>props: Props can be accessed by the child component.<br/>
                            state: State cannot be accessed by child components.
                        </li>
                    
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Shop;