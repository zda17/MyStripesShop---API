import React, { Fragment } from 'react';
import { Wave } from 'react-animated-text';
 
const animateText = () => {
return (
    <Fragment>
      <div className="container">
        <Wave
            text="Hello World!"
            effect="verticalFadeIn"
            effectDirection="up"
            effectChange={3.0}
        />
      </div>
    </Fragment>
);
};

export default animateText;