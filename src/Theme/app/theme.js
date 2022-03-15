import React, { useEffect, useState } from 'react';
import SideBar from './layouts/sideBar';
import TopBar from './layouts/topBar';
import "assets/style/doCodeApp.css"
import { useDispatch } from 'react-redux';
import { loadUserSession } from 'redux/ducks/auth';

export const ThemeAPP = ({ children }) => {

    //ui state
    const [page, setPage] = useState("");
    
    //redux actions
    const call = useDispatch()
    useEffect(()=>{
        call(loadUserSession())
    },[])
    
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

