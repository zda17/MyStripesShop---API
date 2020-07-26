import React, { useContext } from 'react';
import { useForm } from "react-hook-form";

//style
import '../stylesheets/ProductForm.scss';

//components
import Header from '../components/Header';
import Image from '../components/Image';

//context
import { CartContext } from '../utils/CartContext';

const ProductForm = (props) => {

<<<<<<< HEAD
    const { products } = props;

    const product = products[0];

    const colors = [];
    products.map(product => colors.includes(product.color) ? null : colors.push(product.color));

    const sizes = [];
    products.map(product => sizes.includes(product.size) ? null : sizes.push(product.size));
=======
    const { product } = props;
>>>>>>> ad23912e3ae3ab0ec2ac0279d975e060ae647615

    const {handleSubmit, register, errors } = useForm();
    const [cart, setCart] = useContext(CartContext);

    //converts cents to dollar amount
    const centsToUSD = (price) => {
        var dollars = price / 100;
        //var cents = price % 100;

        return dollars;
    } 
    const price_USD = centsToUSD(product.price_cents);


    //add to cart button
    const onSubmit = (values) =>  {
        const lineItem = {name: product.name, price: price_USD, color: values.color, size: values.size, photo_url: product.photo_url};
        setCart(currentState => [...currentState, lineItem]);
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
                        {colors.map(color => (
                        <li className={color}>{/*<-- prop used to display the colors or not*/}
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
                        {sizes.map(size => (
                        <li className={size}> {/*<--prop used for showing out of order (not made yet)*/}
                            <input type="radio" name="size" id={size} value={size} ref={register({ required: true })}/>
                            <label htmlFor={size}><span className={size}>{size}</span></label>
                        </li>
                       ))  }
                    </ul>
                 </div>
                 <input type="submit" value="ADD TO CART"/>
                </div>
            </div>
        </form>
    );
};

export default ProductForm;