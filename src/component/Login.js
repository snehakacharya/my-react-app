import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., validating credentials
    if (employeeId && password) {
      onLogin();
    } else {
      alert("Please enter both Employee ID and Password");
    }
  };

  return (
    <div className="login-container">
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Employee ID:</label>
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Login;








// import React from 'react';
// import './Login.css'; // Import the CSS file

// const Login = () => {
//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <input type="text" placeholder="Employee ID" required />
//         <input type="password" placeholder="Password" required />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

