// src/components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../features/cart/cartSlice';

import './ProductList.css';
import { FaCartShopping, FaList } from 'react-icons/fa6';

function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Sản phẩm A', price: 100 },
    { id: 2, name: 'Sản phẩm B', price: 200 },
    { id: 3, name: 'Sản phẩm C', price: 300 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div>
      <h1><FaList />Danh sách sản phẩm</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString()}₫</td>
              <td>
                <button onClick={() => handleAddToCart(product)}><FaCartShopping /> Thêm vào giỏ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
