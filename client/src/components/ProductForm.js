import React from 'react';

//components
import Header from '../components/Header';

const ProductForm = (props) => {

    const { defaultColor } = props

    return(
        <form method="post" className="ProductForm">
            <div className="ProductOptions">
                <div className="ProductSelect">
                 <Header 
                    title="Color" 
                    headerClass="Main-Header"
                    divClass="Container-Header"
                    hClass="Title-Header"
                    subHClass="No-Sub"
                 /> {/*Needs different hClass to make text smaller*/}
                 <ul class="Color-Pick">
                     <li className="Horizontal-Item">
                         {/*We should use Radio Buttons to pick colors and sizes*/}
                     </li>
                 </ul>
                </div>
            </div>
        </form>
    );
};

export default ProductForm;