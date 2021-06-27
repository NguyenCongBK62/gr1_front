import { Col, Pagination, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import DealJob from "../../Components/DealJob/DealJob";
import ListJob from "../../Components/ListJob/ListJob";
import "./JobPage.css";

export default function JobPage(props) {
  return (
    <div className="job-page">
      <Row>
        <Col span={11}>
          {/* <ListJob listJob={this.props.listJob} selectJob={this.selectJob}/> */}
          <ListJob listJob={props.listJob} />
          <Pagination
            defaultCurrent={1}
            total={50}
            style={{
              textAlign: "center",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          />
        </Col>
        <Col span={13}>
          <DealJob />
        </Col>
      </Row>
    </div>
  );
}
