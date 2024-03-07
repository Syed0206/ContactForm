import React from 'react';
import './App.css';
import handleSubmit from './sheets'; // Import the handleSubmit function

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Contact Us</header>
        <div className="contact">
          <form method="post" className="main"action="https://script.google.com/macros/s/AKfycbylOas_KvL8dnmZeQErXjuPyjZWesHLwo1IM0_qeUj9De1SG_BRpTnDnDgNQn3k5fjnxA/exec" onSubmit={handleSubmit}>
            <input type="text" name="Name" placeholder="Name" />
            <input type="email" name="Email" placeholder="Email" />
            <input type="tel" name="PhoneNumber" placeholder="Phone Number" />
            <textarea rows="5" name="Message" placeholder="Enter your Message"></textarea>
            <input type="submit" id="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
  
    </div>
  );
}

export default App;
