import React, { useState } from "react";
import "./JobApply.css";

const JobApply = (props) => {
  const [imageURL, setImageURL] = useState();
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0], "file");
    fetch("http://localhost:3001/admin/cloudinary-upload", {
      method: "post",
      body: uploadData,
    })
      .then((response) => response.json())
      .then((data) => setImageURL(data.secure_url))
      .then((err) => console.log(err));
  };
  return (
    <div className="apply-form">
      <div className="apply-form-title">{props.job.jobtitle}</div>
      <div className="apply-form-content">
        <div>
          <div style={{ margin: 10 }}>
            <label style={{ margin: 10 }}>Cloudinary:</label>
            <input type="file" onChange={(e) => handleFileUpload(e)} />
          </div>
        </div>
      </div>
      <a href={imageURL}>{`${imageURL}`}</a>
    </div>
  );
};

export default JobApply;
