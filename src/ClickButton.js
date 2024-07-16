import React, { useState } from 'react';

function ClickButton() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
    </div>
  );
}

export default ClickButton;