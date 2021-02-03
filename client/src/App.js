import React from 'react'
import './App.css';
import io from 'socket.io-client'

function App() {
  React.useEffect(() => {
    const socket = io('http://localhost:9999');
    console.log(socket)
    
  }, []);
  return (
    <div>le hong nghiem</div>
  );
}

export default App;
