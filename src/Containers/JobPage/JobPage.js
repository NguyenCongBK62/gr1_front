import React, {Component} from 'react';
import ListJob from '../../Components/ListJob/ListJob';
import DealJob from '../../Components/DealJob/DealJob';
import {Row, Col, Pagination} from 'antd';
import { connect } from 'react-redux';
import './JobPage.css';

const mapStateToProps = (state) => {
    return {
        selectedJob: state.job.selectedJob
    }
}


class JobPage extends Component {
    render() {
        return (
            <div className='job-page'>
                <Row>
                    <Col span={11}>
                        {/* <ListJob listJob={this.props.listJob} selectJob={this.selectJob}/> */}
                        <ListJob listJob={this.props.listJob}/>
                        <Pagination defaultCurrent={1} total={50} style={{textAlign: 'center', marginTop: '3rem', marginBottom: '3rem'}}/>
                    </Col>
                    <Col span={13}>
                        <DealJob job={this.props.selectedJob}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(mapStateToProps)(JobPage);

