import React, { useState } from 'react';
import Login from './component/Login';
import FileUpload from './component/FileUpload';
import Dashboard from './component/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleFileUpload = () => {
    setFileUploaded(true);
  };

  return (
    <div className="App">
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && !fileUploaded && <FileUpload onSubmit={handleFileUpload} />}
      {isLoggedIn && fileUploaded && <Dashboard />}
    </div>
  );
}

export default App;
