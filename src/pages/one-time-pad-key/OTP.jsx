import React, { useState } from 'react';
import "./OTP.css"


function OneTimePad() {
  const [input, setInput] = useState(['', '', '', '', '', '']);

  const handleInputChange = (e, index) => {
    let value = e.target.value;

    if (/[^0-9]/.test(value)) {
      return;
    }

    input[index] = value;

    if (index < input.length - 1 && value !== '') {
      document.getElementById(`box${index + 2}`).focus();
    }

    setInput([...input]);
  };

  const handleSubmit = () => {
    const inputValue = input.join('');
    if(inputValue.length === 6) {
      console.log("6-digit number is:", inputValue);
    } else {
      console.log("Please enter a 6-digit number.");
    }
  };
  console.log("hello world from OTP file")

  return (
    <div className="box-container">
      <div className="otpTitle"> Tuba </div>
      <div className="otptitlesec"> Enter OTP: </div>
      <div className="box">
        {input.map((_, index) => (
          <input
            type="text"
            maxLength="1"
            className="input-box"
            key={index}
            id={`box${index + 1}`}
            value={input[index]}
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default OneTimePad