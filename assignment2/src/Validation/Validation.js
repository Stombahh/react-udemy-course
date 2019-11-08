import React from 'react';

const validation = (props) => {

  let validationMessage = '';

  if (props.inputLength < 1) {
    validationMessage = '';
  } else if (props.inputLength < 5) {
    validationMessage = 'Text too short';
  } else if (props.inputLength >= 5) {
    validationMessage = 'Text long enough';
  };

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;