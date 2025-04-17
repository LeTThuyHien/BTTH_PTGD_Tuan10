import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../features/theme/themeSlice';

import { FaSun, FaMoon } from 'react-icons/fa'; // 🔥 import icon
import './ThemeToggle.css';

function ThemeToggle() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className="theme-container">
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                {theme === 'light' ? <FaSun size={32} color="#f39c12" /> : <FaMoon size={28} color="#f1c40f" />}
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </h1>
            <button onClick={() => dispatch(toggleTheme())}>
                Đổi giao diện
            </button>
        </div>
    );
}

export default ThemeToggle;
