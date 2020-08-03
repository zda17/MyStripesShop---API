import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";

//style
import '../stylesheets/ProductForm.scss';

//components
import Header from '../components/Header';
import Image from '../components/Image';

//context
import { CartContext } from '../utils/CartContext';
//import openPane from './Cart';

const ProductForm = (props) => {

    const { products } = props;

    const product = products[0];

    const colors = [];
    products.map(product => colors.includes(product.color) ? null : colors.push(product.color));

    const sizes = [];
    products.map(product => sizes.includes(product.size) ? null : sizes.push(product.size));

    const {handleSubmit, register, errors } = useForm();
    const [cart, setCart, state, setState] = useContext(CartContext);
    

    //add to cart button
    const onSubmit = (values) =>  {
        let newCart = [...cart];
        const itemInCart = newCart.find(
            (item) => product.sku === item.sku
        );
        
        if(itemInCart) {
            let basePrice = itemInCart.price / itemInCart.quantity;
            itemInCart.quantity++;
            itemInCart.price = basePrice * itemInCart.quantity;
        } else {
            const lineItem = {base_sku: product.base_sku, sku: product.sku, name: product.name, price: (product.price_cents / 100), color: values.color, size: values.size, photo_url: product.photo_url, quantity: 1, quantity_available: product.quantity_available};
            newCart.push(lineItem);
        }
        setCart(newCart);
        
    };

    return(
        <form method="post" className="ProductForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="ProductOptions">
                <div className="ProductSelect">
                 <Header 
                    title="COLOR" 
                    headerClass="Other-Header"
                    divClass="Container-Header"
                    hClass="Product-Header Padding"
                    subHClass="No-Sub"
                 />
                 {/*Colors*/}
                  <div className="Colors">
                    <ul>
                    {errors.color && (<p>COLOR IS REQUIRED.</p>)}{/*Need to make better with scss*/}
                        {colors.map((color, index) => (
                        <li className={color} key={index}>{/*<-- prop used to display the colors or not*/}
                            <input type="radio" name="color" id={color} value={color} ref={register({ required: true })}/>
                            <label className={color} htmlFor={color}><span className={color}></span><span className={color+"__selector"}/></label>
                        </li>
                      )) }
                    </ul>
                 </div>
                 {/*Header for sizes*/}
                 <Header 
                    title="SIZES" 
                    headerClass="Other-Header"
                    divClass="Container-Header"
                    hClass="Product-Header Padding"
                    subHClass="No-Sub"
                 />
                 {/*sizes you can pick*/}
                 <div className="Sizes">
                    <ul>
                    {errors.size && (<p>SIZE IS REQUIRED.</p>)}{/*Need to make better with scss*/}
                        {sizes.map((size, index) => (
                        <li className={size} key={index}> {/*<--prop used for showing out of order (not made yet)*/}
                            <input type="radio" name="size" id={size} value={size} ref={register({ required: true })}/>
                            <label htmlFor={size}><span className={size}>{size}</span></label>
                        </li>
                       ))  }
                    </ul>
                 </div>
                 <input type="submit" value="ADD TO CART" onClick={() => setState({ isPaneOpen: true })}/>
                </div>
            </div>
        </form>
    );
};

export default ProductForm;