import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
//style
import '../stylesheets/ProductForm.scss';
//components
import Header from '../components/Header';
import Image from '../components/Image';
//context
import { CartContext } from '../utils/CartContext';
// localStorage and UUID for identifying users
import localStorage from '../utils/localStorage';
import {v4 as uuid} from 'uuid';

const ProductForm = (props) => {

    const { products } = props;

    const product = products[0];

    const colors = [];
    products.map(product => colors.includes(product.color) ? null : colors.push(product.color));

    const sizes = [];
    products.map(product => sizes.includes(product.size) ? null : sizes.push(product.size));

    const {handleSubmit, register, errors } = useForm();
    const [ cart, setCart, 
            state, setState,
            cartUUID, setCartUUID ] = useContext(CartContext);

    //converts cents to dollar amount
    const centsToUSD = (price) => {
        var dollars = price / 100;
        //var cents = price % 100;

        return dollars;
    } 
    const price_USD = centsToUSD(product.price_cents);


    //add to cart button
    const onSubmit = (values) =>  {
        // Check if user has UUID stored, if not: create one, store it in LocalStorage and cartContext
        if (!localStorage.hasUUID()) {
            const UUID = uuid();
            localStorage.setItem(UUID);
            setCartUUID(UUID);
        };
        // Create lineItem from form values and add it to cart
        const lineItem = {name: product.name, price: price_USD, color: values.color, size: values.size, photo_url: product.photo_url};
        setCart(currentState => [...currentState, lineItem]);
        //openPane();
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