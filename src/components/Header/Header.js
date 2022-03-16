import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header-area d-flex justify-content-between align-items-center container">
            <div>
                <h1>Nexus Valley</h1>
            </div>
            <nav className="nav-bar me-5">
                <ul className="d-flex flex-row m-0 p-0">
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li style={{ fontWeight: 'bold' }}> {loggedInUser.name}</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;