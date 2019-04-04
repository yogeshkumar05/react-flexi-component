import React from 'react';

const FlexiTextbox = (props) => {
    const {value, onChangeHandler, index} = props;

    return(
            <input key={index} name={index} className='flexi-text' type='text' value={value} onChange={onChangeHandler}/>
        );
}

export default FlexiTextbox;