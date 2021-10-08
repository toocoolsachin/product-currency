import React from 'react';
import Product from '../components/Product';
import data from '../data/data';

const ProductList = ({ curr }) => {
  return (
    <div className='product-list'>
      {data.map((product) => (
        <>
          <Product data={product} curr={curr} />
        </>
      ))}
    </div>
  );
};

export default ProductList;
