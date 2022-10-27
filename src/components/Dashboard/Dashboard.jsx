import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StarsIcon from '@mui/icons-material/Stars';
import './Dashboard.scss';


export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard__wrapper">
                <div className="dashboard__cards">
                    <div className="single__card">
                        <ShoppingBasketIcon className="iconDash" />
                        <div className="card__content">
                            <h4>Total invoices</h4>
                            <p className="card__text">75,650</p>
                            <p className="card__text__para">39% more growth</p>
                        </div>
                    </div>
                    <div className="single__card">
                        <PermIdentityIcon className="iconDash" />
                        <div className="card__content">
                            <h4>New users</h4>
                            <p className="card__text">37,650</p>
                            <p className="card__text__para">43% more this year</p>
                        </div>
                    </div>
                    <div className="single__card">
                        <OndemandVideoIcon className="iconDash" />
                        <div className="card__content">
                            <h4>Unique visits</h4>
                            <p className="card__text">1349</p>
                            <p className="card__text__para">69% increase</p>
                        </div>
                    </div>
                    <div className="single__card">
                        <StarsIcon className="iconDash" />
                        <div className="card__content">
                            <h4>Bounce rate</h4>
                            <p className="card__text">37,580</p>
                            <p className="card__text__para">65% higher rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
