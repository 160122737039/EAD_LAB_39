import React, { useState } from 'react';

// Password strength checker component
const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strengthMessage, setStrengthMessage] = useState('');

  // Define the password strength criteria
  const criteria = [
    { regex: /.{8}/}, // Length of 8 or more characters
    { regex: /[a-z]/}, // Lowercase letter
    { regex: /[A-Z]/}, // Uppercase letter
    { regex: /[0-9]/}, // Number
    { regex: /[^A-Za-z0-9]/} // Special character
  ];

  // Function to check how many criteria the password meets
  const checkPasswordStrength = (password) => {
    const metCriteria = criteria.filter((criterion) => criterion.regex.test(password));

    // Determine strength level using switch case
    switch (metCriteria.length) {
      case 5:
        return 'Very Strong';
      case 4:
        return 'Strong';
      case 3:
        return 'Medium';
      case 2:
        return 'Low';
      default:
        return 'Very Weak';
    }
  };

  // Handle input change and dynamically update the strength message
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrengthMessage(checkPasswordStrength(newPassword));
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '100%'
        }}
      />
      <p style={{
        fontWeight: 'bold',
        color: strengthMessage === 'Very Strong' ? 'green' : strengthMessage === 'Strong' ? 'blue' : strengthMessage === 'Medium' ? 'orange' : 'red',
        marginTop: '10px'
      }}>
        {strengthMessage && `Password is ${strengthMessage}`}
      </p>
    </div>
  );
};

export default PasswordStrengthChecker;