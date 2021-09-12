import { Row, Col, Tag } from 'antd';
import React from 'react';
import './CardJob.css';
import {DollarCircleOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectJob } from '../../redux/actions/job';

const CardJob = (props) => {

    const selectedJob = useSelector(state => state.job.selectedJob);
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(selectJob(props.job));
    }

    return (
        <Row className={ selectedJob.id === props.job.id ? 'job-clicked' : 'job'} onClick={handleClick}>
            <Col span={5} style={{textAlign: 'center'}}>
                <img src={props.job.imageLink}></img>
            </Col>
            <Col span={14}>
                <div className='job-title'>
                    {props.job.jobName}
                </div>
                <div className='job-salary'>
                    <DollarCircleOutlined style={{marginRight: '2px'}}/>{props.job.salary}
                </div>
                <div className='skill-tag-list'>
                    {(props.job.skill).map(
                        skill => <Tag className='skill-tag'>{skill}</Tag>
                    )}
                </div>
            </Col>
            <Col span={5}>
                <div className='job-state'>
                    <Tag color="warning" style={{float: 'right', marginRight: 0}}>Hot</Tag>
                </div>
                <div className='job-place'>{props.job.place}</div>
                <div className='job-date-up'>1 phút</div>
            </Col>
        </Row>
    );
}
export default CardJob;