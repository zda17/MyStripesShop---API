import React from 'react';
import { useForm } from "react-hook-form";

//style
import '../stylesheets/ProductForm.scss';

//components
import Header from '../components/Header';

const ProductForm = () => {

    const {handleSubmit, register, errors } = useForm();
    const onSubmit = (values) =>  {console.log(values)};

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
                        <li>
                            <input type="radio" name="color" id="red" value="red" ref={register({ required: true })}/>
                            <label htmlFor="red"><span className="red"></span><span className="selector"></span></label>
                        </li>
                        <li>
                            <input type="radio" name="color" id="green" value="green" ref={register({ required: true })}/>
                            <label htmlFor="green"><span className="green"></span><span className="selector"></span></label>
                        </li>
                        <li>
                            <input type="radio" name="color" id="yellow" value="yellow" ref={register({ required: true })}/>
                            <label htmlFor="yellow"><span className="yellow"></span><span className="selector"></span></label>
                        </li>
                        <li>
                            <input type="radio" name="color" id="olive" value="olive" ref={register({ required: true })}/>
                            <label htmlFor="olive"><span className="olive"></span><span className="selector"></span></label>
                        </li>
                        <li>
                            <input type="radio" name="color" id="orange" value="orange" ref={register({ required: true })}/>
                            <label htmlFor="orange"><span className="orange"></span><span className="selector"></span></label>
                        </li>
                        <li>
                            <input type="radio" name="color" id="teal" value="teal" ref={register({ required: true })}/>
                            <label htmlFor="teal"><span className="teal"></span><span className="selector"></span></label>
                        </li>
                        <li>
                            <input type="radio" name="color" id="blue" value="blue" ref={register({ required: true })}/>
                            <label htmlFor="blue"><span className="blue"></span><span className="selector"></span></label>
                        </li>
                        <li>
                            <input type="radio" name="color" id="violet" value="violet" ref={register({ required: true })}/>
                            <label htmlFor="violet"><span className="violet"></span><span className="selector"></span></label>
                        </li>
                        <li>
                            <input type="radio" name="color" id="purple" value="purple" ref={register({ required: true })}/>
                            <label htmlFor="purple"><span className="purple"></span><span className="selector"></span></label>
                        </li>
                        <li>
                            <input type="radio" name="color" id="pink" value="pink" ref={register({ required: true })}/>
                            <label htmlFor="pink"><span className="pink"></span><span className="selector"></span></label>
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
                        <li>
                            <input type="radio" name="size" id="x-small" value="x-small" ref={register({ required: true })}/>
                            <label htmlFor="x-small"><span className="x-small">x-small</span></label>
                        </li>
                        <li>
                            <input type="radio" name="size" id="small" value="small" ref={register({ required: true })}/>
                            <label htmlFor="small"><span className="small">small</span></label>
                        </li>
                        <li>
                            <input type="radio" name="size" id="medium" value="medium" ref={register({ required: true })}/>
                            <label htmlFor="medium"><span className="medium">medium</span></label>
                        </li>
                        <li>
                            <input type="radio" name="size" id="large" value="large" ref={register({ required: true })}/>
                            <label htmlFor="large"><span className="large">large</span></label>
                        </li>
                        <li>
                            <input type="radio" name="size" id="x-large" value="x-large" ref={register({ required: true })}/>
                            <label htmlFor="x-large"><span className="x-large">x-large</span></label>
                        </li>
                        <li>
                            <input type="radio" name="size" id="xx-large" value="xx-large" ref={register({ required: true })}/>
                            <label htmlFor="xx-large"><span className="xx-large">xx-large</span></label>
                        </li>
                        <li>
                            <input type="radio" name="size" id="xxx-large" value="xxx-large" ref={register({ required: true })}/>
                            <label htmlFor="xxx-large"><span className="xxx-large">xxx-large</span></label>
                        </li>
                    </ul>
                    {errors.size && (<p>Size is required.</p>)}
                    <input type="submit" value="Order"/>
                 </div>
                </div>
            </div>
        </form>
    );
};

export default ProductForm;