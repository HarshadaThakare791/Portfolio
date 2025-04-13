import React from "react";

const Education = () => {
  const eduStyle = {
    backgroundColor: "#1f1f2e",
    color: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    maxWidth: "800px",
    margin: "auto",
  };

  const cardStyle = {
    backgroundColor: "#29293d",
    marginBottom: "20px",
    padding: "20px",
    borderRadius: "10px",
    borderLeft: "6px solid #00c9ff",
    transition: "transform 0.3s",
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.transform = "scale(1.02)";
  };

  const removeHover = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={eduStyle}>
      <h2 style={{ fontSize: "2rem", textAlign: "center", color: "#00c9ff", marginBottom: "30px" }}>
        🎓 Education
      </h2>

      <div
        style={cardStyle}
        onMouseEnter={hoverEffect}
        onMouseLeave={removeHover}
      >
        <h3 style={{ margin: "0", color: "#89f7fe" }}>Bachelor of Technology in Computer Engineering</h3>
        <p style={{ margin: "5px 0", color: "#ccc" }}>R. C. Patel Institute of Technology, Shirpur</p>
        <p style={{ margin: 0, color: "#aaa" }}>2023 – 2027</p>
      </div>

      <div
        style={cardStyle}
        onMouseEnter={hoverEffect}
        onMouseLeave={removeHover}
      >
        <h3 style={{ margin: "0", color: "#89f7fe" }}>HSC (Science Stream)</h3>
        <p style={{ margin: "5px 0", color: "#ccc" }}>Art's , Science and Commers Junior College of Chopda</p>
        <p style={{ margin: 0, color: "#aaa" }}>2021 – 2023</p>
      </div>

      <div
        style={cardStyle}
        onMouseEnter={hoverEffect}
        onMouseLeave={removeHover}
      >
        <h3 style={{ margin: "0", color: "#89f7fe" }}>SSC (10th Grade)</h3>
        <p style={{ margin: "5px 0", color: "#ccc" }}>Pankaj Secondary and High Secondary School</p>
        <p style={{ margin: 0, color: "#aaa" }}>2011 – 2021</p>
      </div>
    </div>
  );
};

export default Education;
