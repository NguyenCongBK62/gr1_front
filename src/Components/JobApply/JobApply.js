import React from 'react';
import './JobApply.css';
import {Form} from 'antd';
 
const JobApply = (props) => {
    return (
        <div className='apply-form'>
            <div className='apply-form-title'>
                {props.job.jobName}
            </div>
            <div className='apply-form-content'>
                <form>

                </form>
            </div>
        </div>
    );
}

export default JobApply;