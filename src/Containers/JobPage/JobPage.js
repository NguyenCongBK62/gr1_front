import React, {Component} from 'react';
import ListJob from '../../Components/ListJob/ListJob';
import DealJob from '../../Components/DealJob/DealJob';
import {Row, Col, Pagination} from 'antd';
import './JobPage.css';

const list_job = [
    {
        id: 1,
        companyName: 'FPT',
        companyDes: 'Rocket your career at Gameloft, a world leading mobile game developer and publisher!',
        companyAreas: 'Product',
        workTime: 'Monday-Friday',
        otTime: 'No OT',
        companyCountry: 'Vietnam',
        numberOfEmployees: '150',
        imageLink: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXduREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cbd3cde99194724073465f2d7fe4368ccea6db4c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e48ed52d99e56a5ff9747052d860ea1b318b2d76/gameloft-logo.jpg',
        jobName: 'Full-Stack Developer (NodeJS/Python)',
        salary: "You'll love it",
        place: 'Da Nang',
        skill: ['NodeJS', 'English'],
        descrip: ['Competitive salary & benefits', '13th month salary']
    },
    {
        id: 2,
        companyName: 'FPT',
        companyDes: 'Rocket your career at Gameloft, a world leading mobile game developer and publisher!',
        companyAreas: 'Product',
        workTime: 'Monday-Friday',
        otTime: 'No OT',
        companyCountry: 'Vietnam',
        numberOfEmployees: '150',
        imageLink: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXduREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cbd3cde99194724073465f2d7fe4368ccea6db4c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e48ed52d99e56a5ff9747052d860ea1b318b2d76/gameloft-logo.jpg',
        jobName: 'ok',
        salary: "You'll love it",
        place: 'Da Nang',
        skill: ['NodeJS', 'English'],
        descrip: ['Competitive salary & benefits', '13th month salary']
    },
    {
        id: 7,
        companyName: 'FPT',
        companyDes: 'Rocket your career at Gameloft, a world leading mobile game developer and publisher!',
        companyAreas: 'Product',
        workTime: 'Monday-Friday',
        otTime: 'No OT',
        companyCountry: 'Vietnam',
        numberOfEmployees: '150',
        imageLink: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXduREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cbd3cde99194724073465f2d7fe4368ccea6db4c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e48ed52d99e56a5ff9747052d860ea1b318b2d76/gameloft-logo.jpg',
        jobName: 'Full-Stack Developer (NodeJS/Python)',
        salary: "You'll love it",
        place: 'Da Nang',
        skill: ['NodeJS', 'English'],
        descrip: ['Competitive salary & benefits', '13th month salary']
    },
    {
        id: 3,
        companyName: 'FPT',
        companyDes: 'Rocket your career at Gameloft, a world leading mobile game developer and publisher!',
        companyAreas: 'Product',
        workTime: 'Monday-Friday',
        otTime: 'No OT',
        companyCountry: 'Vietnam',
        numberOfEmployees: '150',
        imageLink: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXduREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cbd3cde99194724073465f2d7fe4368ccea6db4c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e48ed52d99e56a5ff9747052d860ea1b318b2d76/gameloft-logo.jpg',
        jobName: 'Full-Stack Developer (NodeJS/Python)',
        salary: "You'll love it",
        place: 'Da Nang',
        skill: ['NodeJS', 'English'],
        descrip: ['Competitive salary & benefits', '13th month salary']
    },
    {
        id: 4,
        companyName: 'FPT',
        companyDes: 'Rocket your career at Gameloft, a world leading mobile game developer and publisher!',
        companyAreas: 'Product',
        workTime: 'Monday-Friday',
        otTime: 'No OT',
        companyCountry: 'Vietnam',
        numberOfEmployees: '150',
        imageLink: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXduREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cbd3cde99194724073465f2d7fe4368ccea6db4c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e48ed52d99e56a5ff9747052d860ea1b318b2d76/gameloft-logo.jpg',
        jobName: 'Full-Stack Developer (NodeJS/Python)',
        salary: "You'll love it",
        place: 'Da Nang',
        skill: ['NodeJS', 'English'],
        descrip: ['Competitive salary & benefits', '13th month salary']
    },
    {
        id: 5,
        companyName: 'FPT',
        companyDes: 'Rocket your career at Gameloft, a world leading mobile game developer and publisher!',
        companyAreas: 'Product',
        workTime: 'Monday-Friday',
        otTime: 'No OT',
        companyCountry: 'Vietnam',
        numberOfEmployees: '150',
        imageLink: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXduREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cbd3cde99194724073465f2d7fe4368ccea6db4c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e48ed52d99e56a5ff9747052d860ea1b318b2d76/gameloft-logo.jpg',
        jobName: 'Full-Stack Developer (NodeJS/Python)',
        salary: "You'll love it",
        place: 'Da Nang',
        skill: ['NodeJS', 'English'],
        descrip: ['Competitive salary & benefits', '13th month salary']
    },
    {
        id: 6,
        companyName: 'FPT',
        companyDes: 'Rocket your career at Gameloft, a world leading mobile game developer and publisher!',
        companyAreas: 'Product',
        workTime: 'Monday-Friday',
        otTime: 'No OT',
        companyCountry: 'Vietnam',
        numberOfEmployees: '150',
        imageLink: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXduREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cbd3cde99194724073465f2d7fe4368ccea6db4c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e48ed52d99e56a5ff9747052d860ea1b318b2d76/gameloft-logo.jpg',
        jobName: 'Full-Stack Developer (NodeJS/Python)',
        salary: "You'll love it",
        place: 'Da Nang',
        skill: ['NodeJS', 'English'],
        descrip: ['Competitive salary & benefits', '13th month salary']
    },
]

class JobPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listJob: list_job,
            selectedJob: list_job[0],
        }
    }
    selectJob = (id) => {
        this.setState({selectedJob: this.state.listJob.find(
            (job) => {
                return job.id === id;
            }
        )
        });
        this.props.selectJobApply(this.state.listJob.find(
            (job) => {
                return job.id === id;
            }
        ));
    };
    render() {
        return (
            <div className='job-page'>
                <Row>
                    <Col span={11}>
                        <ListJob listJob={this.state.listJob} selectJob={this.selectJob}/>
                        <Pagination defaultCurrent={1} total={50} style={{textAlign: 'center', marginTop: '3rem', marginBottom: '3rem'}}/>
                    </Col>
                    <Col span={13}>
                        <DealJob job={this.state.selectedJob}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default JobPage;

