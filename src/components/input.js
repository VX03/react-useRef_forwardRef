import React from 'react';

const forwardInput = React.forwardRef(Input);

function Input({type, onKeyDown, placeholder}, ref){
    
    return(
        <input 
            ref={ref}
            type={type}
            onKeyDown={onKeyDown}
            placeholder={placeholder}/>
        )
}

export default forwardInput;