import { } from '@mui/icons-material';
import { keyboard } from '@testing-library/user-event/dist/keyboard/index.js';
import React from 'react'
import DashData from './DashData.jsx';
import './DashImg.scss';


export default function DashImg() {
    return (
        <div className='DashImg'>
            <img
                src="https://wallpapercave.com/wp/nsu3cSp.jpg"
                alt=""
                className="avatar"
            />
            <div className='single__data__data'>
                <div className="single__data">
                    <div className="data__content">
                        <h4>Google <span>Google Inc.</span></h4>
                        <p className="data__text">The search engine giant</p>
                        <p className="data__text__para">Czech Republic</p>
                        <button>+3.53%</button>
                    </div>
                </div>
                <div className="single__data__content">
                    <div className="data__content">
                        <h4>Google <span>Google Inc.</span></h4>
                        <p className="data__text">The search engine giant</p>
                        <p className="data__text__para">Czech Republic</p>
                        <button>+3.53%</button>
                    </div>
                </div>
            </div>
            <div className='single__data__performance'>
                <h4>Performance</h4>
                <div className='single_data_performance_table'>
                    {DashData.key}
                </div>

            </div>
        </div>
    )
}

