import React, { useEffect, useState } from "react";
import "./DealJob.css";
import { Col, Row, Tag } from "antd";
import {
  DollarCircleOutlined,
  ScheduleOutlined,
  EnvironmentOutlined,
  SettingOutlined,
  CalendarOutlined,
  TeamOutlined,
  BankOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetSelectedJob } from "../../Store/modules/Job";

const DealJob = () => {
  const selectedJob = useSelector(GetSelectedJob);
  const [companyProfile, setCompanyProfile] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/users/getprofilecompany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("Authorization"),
      },
      body: JSON.stringify({ id: selectedJob.companyid }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCompanyProfile(data);
        console.log(data);
      });
  }, [selectedJob]);

  if (companyProfile === undefined) {
    return null;
  }

  return (
    <div className="deal-job">
      <div className="deal-job-title">
        <div className="deal-job-title-name">{selectedJob.jobName}</div>
        <div className="deal-job-title-company">{selectedJob.companyName}</div>
        <div className="deal-job-title-apply">
          <button className="apply-button">
            <Link
              to="/jobapply"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
              }}
            >
              Apply Now
            </Link>
          </button>
        </div>
      </div>
      <div className="deal-job-content">
        <div className="skill-tag-list">
          {selectedJob.skills.map((skill) => (
            <Tag className="skill-tag">{skill}</Tag>
          ))}
        </div>
        <div className="deal-job-salary">
          <DollarCircleOutlined style={{ marginRight: "5px" }} />
          {selectedJob.salary}
        </div>
        <div className="deal-job-place">
          <EnvironmentOutlined style={{ marginRight: "5px" }} />
          {companyProfile.address}
        </div>
        <div className="deal-job-time">
          <ScheduleOutlined style={{ marginRight: "5px" }} />1 phút
        </div>
        <div className="deal-job-reason">
          <div
            dangerouslySetInnerHTML={{ __html: selectedJob.jobdesrciption }}
          />
        </div>
      </div>
      <div className="deal-job-footer">
        <Row className="deal-job-footer-title">
          <Col span={3}>
            <img
              src={companyProfile.logo}
              style={{
                height: "65px",
                width: "65px",
                border: "1px solid black",
              }}
            />
          </Col>
          <Col span={21}>
            <div className="deal-job-footer-company-name">
              {companyProfile.name}
            </div>
            <div className="deal-job-footer-company-des">
              {companyProfile.slogan}
            </div>
          </Col>
        </Row>
        <Row className="deal-job-footer-content">
          <Col span={16}>
            <Row>
              <Col span={12}>
                <SettingOutlined className="deal-job-footer-content-icon" />
                {companyProfile.field}
              </Col>
              <Col span={12}>
                <TeamOutlined className="deal-job-footer-content-icon" />
                {companyProfile.memberQuantity}
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <CalendarOutlined className="deal-job-footer-content-icon" />
                {`${companyProfile.workTimeStart} - ${companyProfile.workTimeEnd}`}
              </Col>
              <Col span={12}>
                <BankOutlined className="deal-job-footer-content-icon" />
                {companyProfile.address}
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <ClockCircleOutlined className="deal-job-footer-content-icon" />
                {`${companyProfile.timeOT}h/Tháng OT`}
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <div className="deal-job-footer-view-profile-company">
              View profile company
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DealJob;
