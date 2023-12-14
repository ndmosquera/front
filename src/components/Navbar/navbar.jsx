import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../redux/userSlice.js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import * as con from '../../utils/GlobalConstants.js'

const Navbar = ({ userRole }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token)
  const handleLogout = () => {
    dispatch(resetUser()); 
    axios.post(`${con.URL_SERVER}/api/session/logout`, {},
    {
      headers: {
        'token': token,
      },
    })
    .then(response => {
      console.log('Logout request sent.');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  return (
    <nav style={{
      backgroundColor: '#333',
      color: '#fff',
      width: '100%',
      position: 'fixed',
      top: 0,
      zIndex: 1000,
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 0,
        padding: '1rem 0',
      }}>
        {userRole === 'guest' && (
          <>
            <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link></li>
            <li><Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Productos</Link></li>
            <li><Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Registro</Link></li>
            <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Iniciar Sesión</Link></li>
          </>
        )}
        {userRole === 'user' && (
          <>
            <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link></li>
            <li><Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Productos</Link></li>
            <li><Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Carrito</Link></li>
            <li><Link to="/premium" style={{ color: '#fff', textDecoration: 'none' }}>Premium</Link></li>
            <li><button onClick={handleLogout} style={{ color: '#fff', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Cerrar Sesión</button></li>
          </>
        )}
        {userRole === 'premium' && (
          <>
            <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link></li>
            <li><Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Productos</Link></li>
            <li><Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Carrito</Link></li>
            <li><Link to="/new" style={{ color: '#fff', textDecoration: 'none' }}>Nuevo Producto</Link></li>
            <li><Link to="/update" style={{ color: '#fff', textDecoration: 'none' }}>Actualizar Producto</Link></li>
            <li><button onClick={handleLogout} style={{ color: '#fff', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Cerrar Sesión</button></li>
          </>
        )}
        {userRole === 'admin' && (
          <>
            <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link></li>
            <li><Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Productos</Link></li>
            <li><Link to="/new" style={{ color: '#fff', textDecoration: 'none' }}>Nuevo Producto</Link></li>
            <li><Link to="/update" style={{ color: '#fff', textDecoration: 'none' }}>Actualizar Producto</Link></li>
            <li><button onClick={handleLogout} style={{ color: '#fff', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Cerrar Sesión</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
