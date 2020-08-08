import React from 'react';
import { useForm } from "react-hook-form";
import '../stylesheets/CheckoutForm.scss';


const CheckoutForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
    const formInputs = ['Address', 'Apartment, suite, etc. (optional)', 'City']

    const Inputs = () => {
        return (
            <>
                {formInputs.map((inputStr, index) => (
                    <input
                        type='text'
                        placeholder={inputStr}
                        name={inputStr}
                        ref={register}
                        key={index}
                    />
                ))}
            </>
        )
    }

    const states = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona",
        "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", " North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Contact Information</h3>
                <input type='text' placeholder='Email' name='Email' ref={register} />
                <h3>Shipping Address</h3>
                <div className='name-div'>
                    <input type='text' placeholder='First name (optional)' className='name first-name' name='First name' ref={register} />
                    <input type='text' placeholder='Last name' className='name last-name' name='Last name' ref={register} />
                </div>
                <Inputs />
                <div className='name-div'>
                    <select name='country' defaultValue='' className='country-select' required>
                        <option value="" disabled hidden>Country/Region</option>
                        <option value="United States">United States</option>
                    </select>
                    <select name='state' defaultValue='' className='state-select' required>
                        <option value="" disabled hidden>State</option>
                        {states.map((state, index) => (
                            <option value={state} key={index}>{state}</option>
                        ))}
                    </select>
                    <input type='text' placeholder='ZIP code' className='zip' name='ZIP code' ref={register} />
                </div>
                <input type='text' placeholder='Phone' className='name' name='Phone' ref={register} />
                <div className='button-div'>
                    <button type='button' className='ship-btn'>Continue to shipping</button>
                </div>
            </form>
        </>
    )
}


export default CheckoutForm;