// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../../features/cart/cartSlice';
import ProductList from './ProductList/ProductList';

import './Cart.css';
import { FaCartShopping, FaTrash } from 'react-icons/fa6';

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <div className="cart-container">
            <div className="cart-section">
                <h1><FaCartShopping /> Giỏ Hàng</h1>
                {cartItems.length === 0 ? (
                    <p>Không có sản phẩm nào trong giỏ hàng.</p>
                ) : (
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                dispatch(updateQuantity({
                                                    id: item.id,
                                                    quantity: Number(e.target.value),
                                                }))
                                            }
                                            className="input-quantity"
                                        />
                                    </td>
                                    <td>{item.price.toLocaleString()}₫</td>
                                    <td>{(item.quantity * item.price).toLocaleString()}₫</td>
                                    <td>
                                        <button
                                            className="remove-btn"
                                            onClick={() => dispatch(removeItem(item.id))}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="1"><strong>Tổng</strong></td>
                                <td><strong>{totalQuantity}</strong></td>
                                <td></td>
                                <td colSpan="1"><strong>{totalPrice.toLocaleString()}₫</strong></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                )}
            </div>
            <div className="product-list-section">
                <ProductList />
            </div>
        </div>
    );
}

export default Cart;
