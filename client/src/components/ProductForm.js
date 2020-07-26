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

    const { product } = props;

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
                        {product.color.map(color => (
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
                        {/*cart.map(product => (*/}
                        <li className={product.size}> {/*<--prop used for showing out of order (not made yet)*/}
                            <input type="radio" name="size" id={product.size} value={product.size} ref={register({ required: true })}/>
                            <label htmlFor={product.size}><span className={product.size}>{product.size}</span></label>
                        </li>
                    {/*    ))   */}
                        {/*<li className={xs}> {//<--prop used for showing out of order (not made yet)//}
                            <input type="radio" name="size" id="x-small" value="X-SMALL" ref={register({ required: true })}/>
                            <label htmlFor="x-small"><span className="x-small">XS</span></label>
                        </li>
                        <li className={s}>
                            <input type="radio" name="size" id="small" value="SMALL" ref={register({ required: true })}/>
                            <label htmlFor="small"><span className="small">S</span></label>
                        </li>
                        <li className={m}>
                            <input type="radio" name="size" id="medium" value="MEDIUM" ref={register({ required: true })}/>
                            <label htmlFor="medium"><span className="medium">M</span></label>
                        </li>
                        <li className={l}>
                            <input type="radio" name="size" id="large" value="LARGE" ref={register({ required: true })}/>
                            <label htmlFor="large"><span className="large">L</span></label>
                        </li>
                        <li className={xl}>
                            <input type="radio" name="size" id="x-large" value="X-LARGE" ref={register({ required: true })}/>
                            <label htmlFor="x-large"><span className="x-large">XL</span></label>
                        </li>
                        <li className={xxl}>
                            <input type="radio" name="size" id="xx-large" value="XX-LARGE" ref={register({ required: true })}/>
                            <label htmlFor="xx-large"><span className="xx-large">XXL</span></label>
                        </li>
                        <li className={xxxl}>
                            <input type="radio" name="size" id="xxx-large" value="XXX-LARGE" ref={register({ required: true })}/>
                            <label htmlFor="xxx-large"><span className="xxx-large">XXXL</span></label>
                        </li>*/}
                    </ul>
                 </div>
                 <input type="submit" value="ADD TO CART"/>
                </div>
            </div>
        </form>
    );
};

export default ProductForm;