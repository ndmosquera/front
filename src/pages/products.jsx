import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../components/Item/Item.jsx';
import Flex from '../components/Flex/Flex.jsx';
import * as con from '../utils/GlobalConstants.js'
import './css/Products.css'

const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get(`${con.URL_SERVER}/api/products`)
      .then(response => {
        const productsData = response.data?.data || []; 
        setProducts(productsData); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="products-container">
      <br/>
      <br/>
      <h2>Lista de Productos</h2>
      <div>
      <Flex>
        {products.map(product => (
          <Item key={product.code} {...product}/>
        ))}
      </Flex>
      </div>
    </div>
  );
};

export default Products;