import React, { useState } from 'react';
import SideBar from './layouts/sideBar';
import TopBar from './layouts/topBar';
import "../../assets/style/doCodeApp.css"

export const ThemeAPP = ({ children }) => {

    const [page, setPage] = useState("");
    console.log(window.location.href);
    return (
        
        <main className="admin-layout">
            <SideBar setPage={(name)=>setPage(name)}/>
            <div className="wrapper">
                <TopBar page={page} />
                {/* PAGE CONTENT */}
                <section className="main-page-content">
                    {children}
                </section>
            </div>
        </main>
    )
};

