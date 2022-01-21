import React from 'react';
import './Button.css';
const Button = ({symbol,color,handleClick,buttonText})=>{
    return (
        <div className='button-wrapper'
            style={{backgroundColor:color,color:buttonText}}
            onClick={()=>handleClick(symbol)}
        >
            {symbol}
        </div>
    );
}

export default Button;