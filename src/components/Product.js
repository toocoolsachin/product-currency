import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = ({ data: { title, img, price }, curr }) => {
  const apiUrl = `http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_ACCESS_KEY}`;

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiUrl]);

  let inr = data && data.rates && data.rates.INR;

  let eur = (price / inr).toFixed(2);

  return (
    <div className='product-card'>
      <img src={img} alt={title} width='200' height='200' />
      <p>{title}</p>
      <small>{curr.value === 'INR' ? `₹${price}` : `€${eur}`}</small>
    </div>
  );
};

export default Product;
