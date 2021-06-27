import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import CardCompany from "../CardCompany/CardCompany";
import "./Landing.css";

const Landing = () => {
  const [companys, setCompanys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users/getListCompany", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCompanys(data);
      });
  }, []);

  return (
    <div className="landing-content">
      <h1 className="landing-content-title">Nhà tuyển dụng hàng đầu</h1>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {companys.map((company) => {
            return (
              <Col xs={24} xl={8}>
                <CardCompany company={company} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Landing;
