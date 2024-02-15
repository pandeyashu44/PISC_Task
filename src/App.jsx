import React, { useState } from 'react';
import './App.css';

function Popup({ message, onClose }) {
  return (
    <div className="popup-message">
      <div className="popup">
        <p>{message}</p>
        <button onClick={onClose} className="bg-blue-500 text-white 
        px-4 py-2 rounded mt-2 ml-3">Close</button>
      </div>
    </div>
  );
}

function App() {
  const [input, setInput] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const textValue = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    if (input.trim() === '') {
      alert('Please enter a message before clicking the button!');
    } 
    else setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
      <h1 className='mr-4'>Write your message here : </h1>
      <div>
        <input 
          type="text" 
          value={input} 
          onChange={textValue} 
          placeholder="Enter text here..." 
          className="border border-gray-800"
        />
        <button 
          onClick={handleButtonClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
        >
          Click Me
        </button>
      </div>
      {showPopup && <Popup message={`Your message is: ${input}`} onClose={closePopup} />}
    </div>
  )
}

export default App;

