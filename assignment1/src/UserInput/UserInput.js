import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid grey',
        borderRadius: '5px',
        padding: '5px'
    };

    return  <input 
                type="text" 
                style={inputStyle} 
                onChange={props.changed} 
                value={props.originalName} />;
}

export default userInput;