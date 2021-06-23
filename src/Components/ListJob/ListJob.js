import React, { useState } from 'react';
import CardJob from '../CardJob/CardJob';
import './ListJob.css';

const ListJob = (props) => {
    return(
        <>
            <div className='list-job-title'>{(props.listJob).length} việc làm IT tại Việt Nam</div>
            {(props.listJob).map(job => 
                <CardJob job={job}></CardJob>
            )}
        </>
    );
}

export default ListJob;