// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../features/auth/authSlice';
import './Login.css';

function Login() {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector((state) => state.auth);
    const [username, setUsername] = useState('');

    // Log để kiểm tra isLoggedIn và user
    console.log(isLoggedIn, user);

    const handleLogin = () => {
        if (username.trim()) {
            dispatch(login({ name: username }));
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="login-container">
            {isLoggedIn ? (
                <div className="login-card">
                    <h2>Chào mừng, <span className="login-username">{user.name}</span>!</h2>
                    <button onClick={handleLogout} className="logout-btn">Đăng xuất</button>
                </div>
            ) : (
                <div className="login-card">
                    <h2>Đăng nhập</h2>
                    <input
                        type="text"
                        placeholder="Nhập tên của bạn"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-input"
                    />
                    <button onClick={handleLogin} className="login-btn">Đăng nhập</button>
                </div>
            )}
        </div>
    );
}

export default Login;
