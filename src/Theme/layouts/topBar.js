import React, { useState } from 'react';

const TopBar = ({ page }) => {
    const [showUserInfos, setShowUserInfos] = useState(false)
    return (
        <>
            <header className="top-bar">
                <span className="title-page">{page}</span>
                <div className="top-bar-right">
                    <div className="toggle-theme-mode">
                        <div className="circle-icon"><i className="fas fa-moon" /></div>
                        <div className="toggle-support" />
                    </div>
                    <div className="notification">
                        <i className="far fa-bell" />
                    </div>
                    <div className="support-ticket" title="Open Support Ticket">
                        <i className="fas fa-user-cog" />
                    </div>
                    {/* USER INFOS  */}
                    <div className="user-infos-continer">
                        <div className="avatar-continer">
                            <img className="circle-avatar"
                                src="https://gomycodelearn.blob.core.windows.net/profiles/2b3edd8c-98c9-4a15-8b05-e6c92ab73a00-132735634787447366.jpg" />
                        </div>
                        <div className="user-infos"
                            onClick={() => setShowUserInfos(!showUserInfos)}>
                            <span>Yassine</span>
                            <i className="fa fa-arrow-down" />
                        </div>
                    </div>
                    {/* USER INFOS END */}
                </div>
            </header>
            {/* USER INFOS DETAILS  */}
            <div className={showUserInfos ? "user-infos-details" : "d-none"} >
                <ul>
                    <li className="user-infos-item-disabled">
                        <h3>Yassine Rassy</h3>
                        <span className="email">
                            yassine.rassy1@gmail.com
                        </span>
                    </li>
                    <li className="user-infos-item-disabled">
                        <span className="phone-number">+212 635 093 199</span>
                        <i className="fas fa-phone" />
                    </li>
                    <li className="user-infos-item-disabled">
                        <span className="hs">
                            Casablanca HS
                        </span>
                        <i className="far fa-building" />
                    </li>
                    <li className="user-infos-item">Account Settings</li>
                    <li className="user-infos-item">Log out</li>
                </ul>
            </div>
        </>
    );
};

export default TopBar;
