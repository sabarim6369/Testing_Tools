import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    Age: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (formData.password !== formData.confirmPassword) {
    //   setMessage('Passwords do not match!');
    //   return;
    // }

    // You can replace this with an API call
    console.log('Signup Success:', formData);
    setMessage('Signup Successful!');
  };

  return (
    <div className="signup-container" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            id="Age"
            type="number"
            value={formData.Age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* <div>
          <label>Confirm Password:</label>
          <input
            id="confirm-password"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div> */}

        <button type="submit" id="signup-button">Signup</button>
      </form>

      {message && <p id="signup-message">{message}</p>}
    </div>
  );
}
