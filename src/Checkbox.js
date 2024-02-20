import React from 'react';

const Checkbox = ({ label }) => (
  <div>
    <label>
      <input type="checkbox" />
      {label}
    </label>
  </div>
);

export default Checkbox;
