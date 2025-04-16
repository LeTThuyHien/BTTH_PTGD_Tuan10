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
            </ul>
        </div>

    );
}

export default Home;