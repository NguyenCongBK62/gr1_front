import './App.css';
import 'antd/dist/antd.css';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Containers/HomePage/HomePage';
import SigninPage from './Containers/AuthPage/SigninPage';
import SignupPage from './Containers/AuthPage/SignupPage';
import JobPage from './Containers/JobPage/JobPage';
import JobApply from './Components/JobApply/JobApply';
import React, {Component} from 'react';
import { Layout } from 'antd';
import {Switch, Route, Redirect} from 'react-router-dom';
const { Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    const accessToken = localStorage.getItem("Authorization");
    let loggedIn = true;
    if(accessToken === null){
      loggedIn = false;
    }
    this.state = {
      jobApply: {
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
      loggedIn,
    }
  }
  selectJobApply = (job) => this.setState({jobApply: job});
  render() {
    return (
      <Layout>
          <Switch>
            <Route path='/signin'>
              <Navigation/>
              <Content className="site-layout-content">
                {
                  this.state.loggedIn ? <Redirect to='/'/> : <SigninPage/>
                }
              </Content>
            </Route>
            <Route path='/signup'>
              <Navigation/>
              <Content className="site-layout-content">
                {
                  this.state.loggedIn ? <Redirect to='/'/> : <SignupPage/>
                }
              </Content>
            </Route>
            <Route path='/jobs'>
              <Navigation/>
              <Content className="site-layout-content">
                <JobPage selectJobApply={this.selectJobApply}/>
              </Content>
            </Route>
            <Route path='/jobapply'>
              <Navigation/>
              <Content className="site-layout-content">
                <JobApply job={this.state.jobApply}></JobApply>
              </Content>
            </Route>
            <Route exact path='/'>
              <Navigation/>
              <Content className="site-layout-content">
                <HomePage/>
              </Content>
            </Route>
          </Switch>
        
        <Footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>design by Nguyen Cong BKA_2021</Footer>
      </Layout>
    );
 }
}

export default App;
