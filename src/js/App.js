import React, { useState } from 'react';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/style.css';

export default function App() {
  const [message, setMessage] = useState('React is...');
  let triggered = false;
  function handleChange() {
    setMessage(triggered === false ? 'working!' : 'still working!');
    triggered = !triggered;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <h3 className="hero-heading">{message}</h3>
          <input className="u-full-width" placeholder="ex. Hello" onChange={handleChange} />
          <input className="button-primary" type="submit" value="?" onClick={handleChange} />
        </div>
      </div>
    </div>
  );
}
