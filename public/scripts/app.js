// public/scripts/app.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>React App with Express Backend</h1>
      <p>Message from the server: {message}</p>
    </div>
  );
}

// Render the React app into the 'root' element in 'index.html'
ReactDOM.render(<App />, document.getElementById('root'));
