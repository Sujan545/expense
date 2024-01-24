import React, { useState } from 'react';

function DropdownList() {
  // Define the initial state for the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Handle the change when the user selects an option
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h6>Select Frequncy</h6>
      <select id="frequency" value={selectedValue} onChange={handleSelectChange}>
      <option value="">Select an option</option>
        <option value="7">LAST 1 Week</option>
        <option value="30">LAST 1 Month</option>
        <option value="365">LAST 1 Year</option>
        <option value="custom">Custom</option>
        
      </select>
     
    </div>
  );
}

export default DropdownList;
