import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../constants/menu';

const SideBar = ({setPage}) => {
    return (
        <section className="side-bar">
            <div className="logo" />
            <nav className="menu">
                <Menu setPage={setPage}/>
            </nav>
            {/* SIDE BAR FOOTER */}
            <div className="side-bar-footer">
                <ul>
                    <li className="side-bar-item">
                        <div className="item-icon">
                            <i className="fas fa-book-reader" />
                        </div>
                        <Link to="/read"> Read</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SideBar;