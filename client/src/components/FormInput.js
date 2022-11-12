import React from 'react';

const FormInput = ({name,type,value,handleChange,labelText}) => {
  return (
    <div>
      <label htmlFor={name}>{ labelText || name }</label>
        <input type={type} name={name} value={value} onChange={handleChange}></input>
    </div>
  );
};

export default FormInput;