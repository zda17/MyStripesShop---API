import React, { useState } from 'react';
import { useForm } from "react-hook-form";

//style
import '../stylesheets/ProductForm.scss';

//components
import Header from '../components/Header';

const ProductForm = (props) => {

    const {handleSubmit, register, errors } = useForm();
    const onSubmit = (values) =>  {console.log(values)};

    const { darkBlue, blue, green, peach, gold, red, yellow, orange, purple, pink,
            xs, s, m, l, xl, xxl, xxxl } = props;



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
                 /> {/*Needs different hClass to make text smaller*/}
                  <div className="Colors">
                    <ul>
                        <li className={darkBlue}>
                            <input type="radio" name="color" id="darkBlue" value="darkBlue" ref={register({ required: true })}/>
                            <label className="darkBlue" htmlFor="darkBlue"><span className="darkBlue"></span><span className="darkBlue__selector"/></label>
                        </li>
                        <li className={blue}>
                            <input type="radio" name="color" id="blue" value="blue" ref={register({ required: true })}/>
                            <label htmlFor="blue"><span className="blue"></span><span className="blue__selector"/></label>
                        </li>
                        <li className={green}>
                            <input type="radio" name="color" id="green" value="green" ref={register({ required: true })}/>
                            <label htmlFor="green"><span className="green"></span><span className="green__selector"/></label>
                        </li>
                        <li className={peach}>
                            <input type="radio" name="color" id="peach" value="peach" ref={register({ required: true })}/>
                            <label htmlFor="peach"><span className="peach"></span><span className="peach__selector"/></label>
                        </li>
                        <li className={gold}>
                            <input type="radio" name="color" id="gold" value="gold" ref={register({ required: true })}/>
                            <label htmlFor="gold"><span className="gold"></span><span className="gold__selector"/></label>
                        </li>
                        <li className={red}>
                            <input type="radio" name="color" id="red" value="red" ref={register({ required: true })}/>
                            <label htmlFor="red"><span className="red"></span><span className="red__selector"/></label>
                        </li>
                        <li className={yellow}>
                            <input type="radio" name="color" id="yellow" value="yellow" ref={register({ required: true })}/>
                            <label htmlFor="yellow"><span className="yellow"></span><span className="yellow__selector"/></label>
                        </li>
                        <li className={orange}>
                            <input type="radio" name="color" id="orange" value="orange" ref={register({ required: true })}/>
                            <label htmlFor="orange"><span className="orange"></span><span className="orange__selector"/></label>
                        </li>
                        <li className={purple}>
                            <input type="radio" name="color" id="purple" value="purple" ref={register({ required: true })}/>
                            <label htmlFor="purple"><span className="purple"></span><span className="purple__selector"/></label>
                        </li>
                        <li className={pink}>
                            <input type="radio" name="color" id="pink" value="pink" ref={register({ required: true })}/>
                            <label htmlFor="pink"><span className="pink"></span><span className="pink__selector"/></label>
                        </li>
                    </ul>
                    {errors.color && (<p>Color is required.</p>)}
                 </div>
                 <Header 
                    title="SIZES" 
                    headerClass="Other-Header"
                    divClass="Container-Header"
                    hClass="Product-Header Padding"
                    subHClass="No-Sub"
                 /> {/*Needs different hClass to make text smaller*/}
                 <div className="Sizes">
                    <ul>
                        <li className={xs}>
                            <input type="radio" name="size" id="x-small" value="x-small" ref={register({ required: true })}/>
                            <label htmlFor="x-small"><span className="x-small">XS</span></label>
                        </li>
                        <li className={s}>
                            <input type="radio" name="size" id="small" value="small" ref={register({ required: true })}/>
                            <label htmlFor="small"><span className="small">S</span></label>
                        </li>
                        <li className={m}>
                            <input type="radio" name="size" id="medium" value="medium" ref={register({ required: true })}/>
                            <label htmlFor="medium"><span className="medium">M</span></label>
                        </li>
                        <li className={l}>
                            <input type="radio" name="size" id="large" value="large" ref={register({ required: true })}/>
                            <label htmlFor="large"><span className="large">L</span></label>
                        </li>
                        <li className={xl}>
                            <input type="radio" name="size" id="x-large" value="x-large" ref={register({ required: true })}/>
                            <label htmlFor="x-large"><span className="x-large">XL</span></label>
                        </li>
                        <li className={xxl}>
                            <input type="radio" name="size" id="xx-large" value="xx-large" ref={register({ required: true })}/>
                            <label htmlFor="xx-large"><span className="xx-large">XXL</span></label>
                        </li>
                        <li className={xxxl}>
                            <input type="radio" name="size" id="xxx-large" value="xxx-large" ref={register({ required: true })}/>
                            <label htmlFor="xxx-large"><span className="xxx-large">XXXL</span></label>
                        </li>
                    </ul>
                    {errors.size && (<p>Size is required.</p>)}
                 </div>
                 <input type="submit" value="ADD TO CART"/>
                </div>
            </div>
        </form>
    );
};

export default ProductForm;