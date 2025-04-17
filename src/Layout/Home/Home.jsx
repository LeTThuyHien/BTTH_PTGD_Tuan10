import { Link } from 'react-router-dom';

import "./Home.css"
function Home() {
    return (
        <div className="menu">
            <ul className="menu-item">
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li >
                    <Link to="/step1">Step1</Link>
                </li>
                <li >
                    <Link to="/step2">Step2</Link>
                </li>
                <li >
                    <Link to="/step3">Step3</Link>
                </li>
                <li >
                    <Link to="/counterApp">Bai1. Counter App</Link>
                </li>
                <li >
                    <Link to="/todolist">Bai2. To Do List</Link>
                </li>
                <li >
                    <Link to="/themetoggle">Bai3. Theme Toggle</Link>
                </li>

            </ul>
        </div>

    );
}

export default Home;