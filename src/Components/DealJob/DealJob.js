import React from 'react';
import './DealJob.css';
import {Col, Row, Tag} from 'antd';
import {
    DollarCircleOutlined, 
    ScheduleOutlined, 
    EnvironmentOutlined, 
    SettingOutlined, 
    CalendarOutlined,
    TeamOutlined,
    BankOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';

import {Link} from 'react-router-dom';

const DealJob = (props) => {
    return (
        <div className='deal-job'>
            <div className='deal-job-title'>
                <div className='deal-job-title-name'>
                    {props.job.jobName}
                </div>
                <div className='deal-job-title-company'>
                    {props.job.companyName}
                </div>
                <div className='deal-job-title-apply'>
                    <button className='apply-button'>
                        <Link to='/jobapply' style={{textDecoration: 'none', color: 'white', display: 'block'}}>
                            Apply Now
                        </Link>
                    </button>
                </div>
            </div>
            <div className='deal-job-content'>
                <div className='skill-tag-list'>
                    {(props.job.skill).map(
                        skill => <Tag className='skill-tag'>{skill}</Tag>
                    )}
                </div>
                <div className='deal-job-salary'>
                    <DollarCircleOutlined style={{marginRight: '5px'}}/>{props.job.salary}
                </div>
                <div className='deal-job-place'>
                    <EnvironmentOutlined style={{marginRight: '5px'}}/>
                    {props.job.place}
                </div>
                <div className='deal-job-time'>
                    <ScheduleOutlined style={{marginRight: '5px'}}/>1 phút
                </div>
                <div className='deal-job-reason'>
                    <h2 className='deal-job-reason-title'>3 Lí Do Chính Khuyên Bạn Nên Ứng Tuyển </h2>
                    <ul >
                        {
                            (props.job.descrip).map( des => 
                                <li className='deal-job-reason-item'>{des}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className='deal-job-footer'>
                <Row className='deal-job-footer-title'>
                    <Col span={3}>
                        <img src={props.job.imageLink} style={{height: '65px', width: '65px', border: '1px solid black'}}/>
                    </Col>
                    <Col span={21}>
                        <div className='deal-job-footer-company-name'>
                            {props.job.companyName}
                        </div>
                        <div className='deal-job-footer-company-des'>
                            {props.job.companyDes}
                        </div>
                    </Col>
                </Row>
                <Row className='deal-job-footer-content'>
                    <Col span={16}>
                        <Row>
                            <Col span={12}>
                                <SettingOutlined className='deal-job-footer-content-icon'/>{props.job.companyAreas}
                            </Col>
                            <Col span={12}>
                                <TeamOutlined className='deal-job-footer-content-icon'/>{props.job.numberOfEmployees}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <CalendarOutlined className='deal-job-footer-content-icon'/>{props.job.workTime}
                            </Col>
                            <Col span={12}>
                                <BankOutlined className='deal-job-footer-content-icon'/>{props.job.companyCountry}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <ClockCircleOutlined className='deal-job-footer-content-icon'/>{props.job.otTime}
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <div className='deal-job-footer-view-profile-company'>
                            View profile company
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default DealJob;