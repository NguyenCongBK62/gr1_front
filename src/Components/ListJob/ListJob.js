import React, { useState } from 'react';
import CardJob from '../CardJob/CardJob';
import './ListJob.css';

const ListJob = (props) => {
    const [selectCard, setSelectCard] = useState(0);
    const handleClick = (id) => {
        setSelectCard(id);
        props.selectJob(id);
    }

    return(
        <>
            <div className='list-job-title'>{(props.listJob).length} việc làm IT tại Việt Nam</div>
            {(props.listJob).map(job => 
                <CardJob job={job} selectCard={selectCard} setSelectCard={handleClick}></CardJob>
            )}
        </>
    );
}

export default ListJob;