import React from 'react';

const InputField = ({ label, type }) => (
  <div>
    <label>{label}</label>
    <input type={type} />
  </div>
);

export default InputField;
