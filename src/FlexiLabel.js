import React from 'react';

const FlexiLabel = (props) => {
    const {value, index} = props;
    return(
            <label key={index} className='flexi-label'> {value}:</label>
        );
}

export default FlexiLabel;