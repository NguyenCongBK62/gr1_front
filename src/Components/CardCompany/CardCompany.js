import { Card } from "antd";
import { useEffect, useState } from "react";
import "./CardCompany.css";
const CardCompany = (props) => {
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users/job", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJob(data);
      });
  }, []);
  return (
    <a>
      <Card
        hoverable
        style={{ margin: "1rem", textAlign: "center" }}
        cover={
          <img alt="example" src={props.company.logo} className="logo-card" />
        }
      >
        <div className="company-name">{props.company.name}</div>
        <div className="job-suggestion">
          <div className="highlight">{job.length} Việc làm</div> -{" "}
          {props.company.address}
        </div>
      </Card>
    </a>
  );
};

export default CardCompany;
