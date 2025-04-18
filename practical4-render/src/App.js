import React, { useState, useEffect } from 'react';

function App() {
  const [serverTime, setServerTime] = useState(new Date().toLocaleString());
  
  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setServerTime(new Date().toLocaleString());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Practical 4 - Docker Deployment</h1>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <h2>Docker Render Deployment Demo</h2>
        <p>This application is running in a Docker container on Render</p>
        <p>Current server time: <strong>{serverTime}</strong></p>
        
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
          <h3>Deployment Info</h3>
          <p>Environment: {process.env.NODE_ENV || 'development'}</p>
          <p>Container ID: {process.env.HOSTNAME || 'local'}</p>
        </div>
      </div>
    </div>
  );
}

export default App;