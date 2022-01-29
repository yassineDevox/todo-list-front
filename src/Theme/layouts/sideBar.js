import React from 'react';

const SideBar = () => {
    return (
        <section className="side-bar">
            <div className="logo" />
            <nav className="menu">
                <ul>
                    {/* SIDE BAR ITEM  */}
                    <li className="side-bar-item">
                        <div className="item-icon"><i className="fas fa-tachometer" />
                        </div><a href>Dashboard</a>
                    </li>
                    {/* SIDE BAR ITEM END  */}
                    <li className="side-bar-item">
                        <div className="item-icon"><i className="fas fa-bolt" />
                        </div><a href>Checkpoints</a>
                    </li>
                    <li className="side-bar-item">
                        <div className="item-icon"><i className="fas fa-puzzle-piece" />
                        </div><a href> Projects</a>
                    </li>
                    <li className="side-bar-item">
                        <div className="item-icon"><i className="fas fa-chalkboard-teacher" />
                        </div><a href>Interviews</a>
                    </li>
                    <li className="side-bar-item">
                        <div className="item-icon"><i className="fas fa-user-graduate" />
                        </div><a href> Students</a>
                    </li>
                    <li className="side-bar-item">
                        <div className="item-icon"><i className="fas fa-store" />
                        </div><a >Store</a>
                    </li>
                </ul>
            </nav>
            {/* SIDE BAR FOOTER */}
            <div className="side-bar-footer">
                <ul>
                    <li className="side-bar-item">
                        <i className="fas fa-book-reader" />
                        <a href>Read</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SideBar;
