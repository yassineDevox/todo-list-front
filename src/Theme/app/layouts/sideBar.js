import React from 'react';
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
                        <a href>Read</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SideBar;
