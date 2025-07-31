import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            id="username"
            data-testid="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Password:</label><br />
          <input
            type="password"
            id="password"
            data-testid="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          id="login-button"
          data-testid="login-button"
          style={{ marginTop: '1rem' }}
        >
          Login
        </button>
      </form>

      {message && (
        <p
          id="login-message"
          data-testid="login-message"
          style={{ marginTop: '1rem', fontWeight: 'bold' }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
