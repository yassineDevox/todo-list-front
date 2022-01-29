import React from 'react';
import SideBar from './layouts/sideBar';
import TopBar from './layouts/topBar';

export const Theme = ({ children }) => {
    return (
        <main className="admin-layout">
            <SideBar />
            <div className="wrapper">
                <TopBar />
                {/* PAGE CONTENT */}
                <section className="main-page-content">
                    {children}
                </section>
            </div>
        </main>
    )
};
