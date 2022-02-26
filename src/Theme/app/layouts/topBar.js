import { faArrowDown, faBell, faMoon, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../redux/ducks/auth';

const TopBar = ({ page }) => {
    const [showUserInfos, setShowUserInfos] = useState(false)
    //redux state 
    const {user} = useSelector(s=>s.auth.userInfo)
    //redux auth action
    const call = useDispatch()
    //router
    const navTo = useNavigate()
    //events
    const handleLogOutClick = ()=>{
        call(logout())
        navTo("/")
    }
    return (
        <>
            <header className="top-bar">
                <span className="title-page">{page}</span>
                <div className="top-bar-right">
                    <div className="toggle-theme-mode">
                        <div className="circle-icon">
                            <FontAwesomeIcon icon={faMoon} color="yellow"/>
                        </div>
                        <div className="toggle-support" />
                    </div>
                    <div className="notification">
                        <FontAwesomeIcon icon={faBell} className="fa-lg" />
                    </div>
                    <div className="support-ticket" title="Open Support Ticket">
                        <FontAwesomeIcon icon={faUserCog} />
                    </div>
                    {/* USER INFOS  */}
                    <div className="user-infos-continer">
                        <div className="avatar-continer">
                            <img className="circle-avatar"
                                src="https://gomycodelearn.blob.core.windows.net/profiles/2b3edd8c-98c9-4a15-8b05-e6c92ab73a00-132735634787447366.jpg" />
                        </div>
                        <div className="user-infos"
                            onClick={() => setShowUserInfos(!showUserInfos)}>
                            <span>{user?.firstname}</span>
                            <FontAwesomeIcon icon={faArrowDown} style={{marginLeft:"4px"}} size="sm"/>
                        </div>
                    </div>
                    {/* USER INFOS END */}
                </div>
            </header>
            {/* USER INFOS DETAILS  */}
            <div className={showUserInfos ? "user-infos-details" : "d-none"} >
                <ul>
                    <li className="user-infos-item-disabled">
                        <h3>{user?.firstname+" "+user?.lastname}</h3>
                        <span className="email">
                            {user?.email}
                        </span>
                    </li>
                    <li className="user-infos-item-disabled">
                        <span className="phone-number">{user?.phone}</span>
                        <i className="fas fa-phone" />
                    </li>
                    <li className="user-infos-item-disabled">
                        <span className="hs">
                            Casablanca HS
                        </span>
                        <i className="far fa-building" />
                    </li>
                    <li className="user-infos-item">Account Settings</li>
                    <li className="user-infos-item" 
                        onClick={handleLogOutClick}>Log out</li>
                </ul>
            </div>
        </>
    );
};

export default TopBar;
