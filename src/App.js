import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import JobApply from "./Components/JobApply/JobApply";
import Navigation from "./Components/Navigation/Navigation";
import SigninPage from "./Containers/AuthPage/SigninPage";
import SignupPage from "./Containers/AuthPage/SignupPage";
import HomePage from "./Containers/HomePage/HomePage";
import JobPage from "./Containers/JobPage/JobPage";
import { setJob } from "./Store/modules/Job";
const { Content, Footer } = Layout;

const App = (props) => {
  const selectedJob = useSelector((state) => state.job.selectedJob);
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState();
  const [listJob, setListJob] = useState([]);
  useEffect(() => {
    let accessToken = localStorage.getItem("Authorization");
    setLoggedIn(accessToken ? true : false);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let jobs = await fetch("http://localhost:3001/users/job", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    setListJob(jobs);
    dispatch(setJob(jobs[0]));
  };

  return (
    <Layout>
      <Switch>
        <Route path="/signin">
          <Navigation />
          <Content className="site-layout-content">
            {loggedIn ? <Redirect to="/" /> : <SigninPage />}
          </Content>
        </Route>
        <Route path="/signup">
          <Navigation />
          <Content className="site-layout-content">
            {loggedIn ? <Redirect to="/" /> : <SignupPage />}
          </Content>
        </Route>
        <Route path="/jobs">
          <Navigation />
          <Content className="site-layout-content">
            <JobPage listJob={listJob} />
          </Content>
        </Route>
        <Route path="/jobapply">
          <Navigation />
          <Content className="site-layout-content">
            <JobApply job={selectedJob}></JobApply>
          </Content>
        </Route>
        <Route exact path="/">
          <Navigation />
          <Content className="site-layout-content">
            <HomePage />
          </Content>
        </Route>
      </Switch>

      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        design by Nguyen Cong BKA_2021
      </Footer>
    </Layout>
  );
};

export default App;
