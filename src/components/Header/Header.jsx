
import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import './Header.scss';

export default function Header() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <h1>Flare UI</h1>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <NotificationsOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <WifiOutlinedIcon
                            className="icon" />
                    </div>
                    <div className="item">
                        Hello Andre Rivera
                    </div>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

