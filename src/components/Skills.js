import React from "react";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaCuttlefish } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava color="#f89820" size={50} /> },
    { name: "C", icon: <FaCuttlefish color="#A8B9CC" size={50} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={50} /> },
    { name: "HTML", icon: <FaHtml5 color="#e34c26" size={50} /> },
    { name: "CSS", icon: <FaCss3Alt color="#264de4" size={50} /> },
    { name: "JavaScript", icon: <FaJsSquare color="#f0db4f" size={50} /> },
  ];

  const containerStyle = {
    backgroundColor: "#1f1f2e",
    padding: "40px 20px",
    color: "#fff",
    textAlign: "center",
  };

  const scrollContainer = {
    display: "flex",
    overflowX: "auto",
    padding: "20px 10px",
    gap: "20px",
    justifyContent: "center",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  const cardStyle = {
    minWidth: "150px",
    backgroundColor: "#29293d",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
    textAlign: "center",
    flexShrink: 0,
  };

  const cardHover = {
    transform: "scale(1.1)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
  };

  return (
    <div style={containerStyle} id="skills">
      <h2 style={{ fontSize: "2rem", color: "#6dd5ed", marginBottom: "30px" }}> My Skills</h2>
      <div
        style={scrollContainer}
        onWheel={(e) => {
          if (e.deltaY !== 0) {
            e.currentTarget.scrollLeft += e.deltaY;
          }
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            {skill.icon}
            <p style={{ marginTop: "10px", fontSize: "1.1rem", color: "#ccc" }}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
