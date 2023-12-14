import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const HomePage = () => {
  const name = useSelector((state) => state.user.name)
  const role = useSelector((state) => state.user.role)

  const predicate = role != "guest" ? `, Recuerda que eres usuario ${role}` : ""
  return (
    <div>
      <div style={{ marginTop: '80px', padding: '20px' }}> 
        <h1>Bienvenido {name} a la Página de Inicio{predicate}</h1>
        <p>Contenido de la página de inicio...</p>
        <Link to="/products">Ver Productos</Link>

      </div>
    </div>
  );
};

export default HomePage;
