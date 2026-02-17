import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const startSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate a real server delay
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 2000);
  };

  if (done) {
    return (
      <div className="page-wrapper">
        <div className="success-card">
          <h1>✨ Verified!</h1>
          <p>Welcome to the premium club.</p>
          <button onClick={() => setDone(false)} className="back-btn">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="glass-card">
        <form onSubmit={startSignup}>
          <div className="header">
            <h2>Join the Wave</h2>
            <div className="underline"></div>
          </div>

          <div className="input-box">
            <input type="text" required placeholder=" " />
            <label>Full Name</label>
          </div>

          <div className="input-box">
            <input type="email" required placeholder=" " />
            <label>Email Address</label>
          </div>

          <div className="input-box">
            <input type="password" required placeholder=" " />
            <label>Create Password</label>
          </div>

          <button type="submit" className={loading ? "btn loading" : "btn"}>
            {loading ? <div className="spinner"></div> : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}