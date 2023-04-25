import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark text-bg-danger">
                <Link className="navbar-brand ml-auto p-3" to="/books">
                    E-Library
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/books">
                                Books
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">
                                Categories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/authors">
                                Authors
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
