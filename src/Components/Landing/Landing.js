import React from 'react';
import {Row, Col} from 'antd';
import CardCompany from '../CardCompany/CardCompany';
import './Landing.css';

const Landing = () => {
    return(
        <div className='landing-content'>
            <h1 className='landing-content-title'>Nhà tuyển dụng hàng đầu</h1>
            <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col xs={24} xl={8}>
                    <CardCompany/>
                </Col>
                <Col xs={24} xl={8}>
                    <CardCompany/>
                </Col>
                <Col xs={24} xl={8}>
                    <CardCompany/>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24} xl={8}>
                    <CardCompany/>
                </Col>
                <Col xs={24} xl={8}>
                    <CardCompany/>
                </Col>
                <Col xs={24} xl={8}>
                    <CardCompany/>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24} xl={8}>
                    <CardCompany/>
                </Col>
                <Col xs={24} xl={8}>
                    <CardCompany/>
                </Col>
                <Col xs={24} xl={8}>
                    <CardCompany/>
                </Col>
            </Row>
        </div>
        </div>
    );
}

export default Landing;