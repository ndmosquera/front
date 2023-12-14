import { Link } from 'react-router-dom';
import axios from 'axios';
import * as con from '../../utils/GlobalConstants.js'
import './Item.css';
import { useSelector } from 'react-redux';


const Item = ({ title, price, image, _id, category }) => {
  const token = useSelector((state) => state.user.token)
  const handleAddToCart = () => {

    axios.put(`${con.URL_SERVER}/api/carts/${_id}`, 
    {
      "quantity": 1
    },
    {
      headers: {
        'token': token,
      },
    })
    .then(response => {
      console.log('Update request sent.');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };


  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={title} />
      <div className="product-details">
        <h2 className="product-name">{title}</h2>
        <small>{category}</small>
        <p className="product-price">{price}</p>
        <Link to={`/product/${_id}`}>
        <button>Más Detalles</button>
        </Link>
        {token ? (
          <button onClick={handleAddToCart}>Añadir al carrito</button>
        ) : (
          <p>Necesitas iniciar sesión para añadir al carrito</p>
        )}
      </div>
    </div>
  );
};

export default Item;
