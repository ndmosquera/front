import { useState } from 'react';
import * as con from '../utils/GlobalConstants.js'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser, setToken } from '../redux/userSlice.js';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin =  async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${con.URL_SERVER}/api/session/login`, {
          username,
          password,
        });
  
        const { name, username: userUsername, email, role, cart, token } = response.data.data;
        dispatch(addUser({ name, username: userUsername, email, role, cart }));

        dispatch(setToken(token));

        navigateTo('/');

      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
  };

  
  const RedirectRecovery =  async (e) => {
    e.preventDefault();
        navigateTo('/recovery');
  };

  const handleGitHubLogin = () => {

    console.log('Iniciar sesión con GitHub');
  };


  return (
    <div>
      <div style={{ marginTop: '80px', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Iniciar Sesión</h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username">Nombre de Usuario:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Iniciar Sesión</button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button onClick={handleGitHubLogin} style={{ padding: '0.5rem', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>Iniciar sesión con GitHub</button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button onClick={RedirectRecovery} style={{ padding: '0.5rem', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>¿Olvidó su contraseña?</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
