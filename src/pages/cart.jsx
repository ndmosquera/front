import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import * as con from '../utils/GlobalConstants.js'
import axios from "axios";


function CartPage () {
    const navigateTo = useNavigate();

    const token = useSelector((state) => state.user.token)
    const handleCheckOut =  async () => {
        axios.get(`${con.URL_SERVER}/api/tickets`,
        {
            headers: {
                'token': token,
            },
        }
        )
        .then(response => {
          console.log('Update request sent.');
        })
        .catch(error => {
          console.error('Error:', error);
        });
      };


        const [cart, setCart] = useState([]);
        useEffect(() => {
            axios.get(`${con.URL_SERVER}/api/carts`,
            {
                headers: {
                    'token': token,
                },
            }
            )
              .then(response => {
                const CartData = response.data?.data || []; 
                setCart(CartData); 
              })
              .catch(error => {
                console.error('Error fetching cart data:', error);
              });
          }, []);
    

          console.log(cart)
    
    return (

        <>  
        {cart.length === 0 ? (
            <>
            <div className="empty-cart-container">
            <h2>TU CARRITO ESTÁ VACIO</h2>

            <strong>
                Te invitamos a revisar nuestro catagolo haciendo: <Link to="/products">CLIC AQUÍ</Link>
            </strong>

        </div>
            </>

        ) : (
        <>
        <section className="cart-container">
        <h2 className='section-tittle'>CARRITO DE COMPRAS</h2>
        <table>
            <thead>
            <tr>
                <th>PRODUCTO</th>
                <th>CANTIDAD</th>
            </tr>
            </thead>
            <tbody>
            {cart.map(product => (
                <tr key={product._id}>
                    <td>
                        {product._id}
                    </td>
                    <td>
                        {product.quantity}
                    </td>
                </tr>
            ))}
            </tbody>

        </table>

         </section>

         <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button onClick={handleCheckOut} style={{ padding: '0.5rem', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>Liquidar compra</button>
        </div>
        </>
        )}
        </>
    )
}

export default CartPage