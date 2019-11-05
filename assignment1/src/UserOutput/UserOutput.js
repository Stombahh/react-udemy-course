import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="outputContainer">
            <p>My username is: {props.UserName}</p>
            <p>Thank you for such a ebin username!</p>
        </div>
    );
};

export default userOutput;