import { useState } from 'react';
import * as con from '../utils/GlobalConstants.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
  const [name, setName] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLast_name(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister =  async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${con.URL_SERVER}/api/session/register`, {
          name,
          last_name,
          email,
          username,
          password,
        });
  

        navigateTo('/login');

      } catch (error) {
        console.error('Error al crear usuario:', error);
      }
  };

  return (
    <div>
      <div style={{ marginTop: '80px', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Ingresa los siguientes datos para crear un usuario</h1>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="last_name">Apellido:</label>
            <input type="text" id="last_name" value={last_name} onChange={handleLastNameChange} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username">Nombre de Usuario:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password">Nueva Contraseña:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Crear Usuario</button>
        </form>

      </div>
    </div>
  );
};

export default RegisterPage;