import { useState } from 'react';
import * as con from '../utils/GlobalConstants.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const RecoveryPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
        const response = await axios.put(`${con.URL_SERVER}/api/session/request-recovery`, {
          username,
          password,
        });
  

        navigateTo('/login');

      } catch (error) {
        console.error('Error al recuperar la contraseña:', error);
      }
  };



  return (
    <div>
      <div style={{ marginTop: '80px', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>¿Olvidó su Contraseña?</h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username">Nombre de Usuario:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password">Nueva Contraseña:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Cambiar Contraseña</button>
        </form>

      </div>
    </div>
  );
};

export default RecoveryPage;