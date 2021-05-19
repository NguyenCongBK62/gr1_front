import React from 'react';
import './CardCompany.css';
import {Card} from 'antd';
import Bank from './Bank.jpeg';
const CardCompany = () => {
    return (
        <a>
            <Card hoverable style={{margin: '1rem', textAlign: 'center'}} cover={<img alt="example" src={Bank} className='logo-card'/>}>
                <div className='company-name'>SacomBank</div>
                <div className='job-suggestion'><div className='highlight'>1 Việc làm</div> - Hà Nội</div>
            </Card>
        </a>
        
    );
}

export default CardCompany;