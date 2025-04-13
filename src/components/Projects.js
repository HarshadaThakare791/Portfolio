import React from "react";

const Projects = () => {
  const sectionStyle = {
    backgroundColor: "#1f1f2e",
    color: "#fff",
    padding: "40px 20px",
    borderRadius: "12px",
    maxWidth: "1200px",
    margin: "auto",
  };

  const cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    backgroundColor: "#29293d",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)";
  };

  const removeHover = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)";
  };

  const projects = [
    {
      title: "🌐 Landing Page for Group",
      description: "A modern landing page introducing our team with a join form and dynamic layout. Built using HTML, CSS, and JavaScript.",
    },
    {
      title: "🎮 Tic-Tac-Toe Game",
      description: "A simple yet interactive game using HTML, CSS, and JavaScript with reset and win detection features.",
    },
    {
      title: "✅ To-Do List App",
      description: "Helps organize daily tasks. Built with HTML, CSS, and vanilla JavaScript, featuring local storage.",
    },
    {
      title: "📊 Monthly Expense Tracker",
      description: "Python-based CLI app to track income & expenses with totals. Simple and efficient.",
    },
  ];

  return (
    <div style={sectionStyle}>
      <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "30px", color: "#6dd5ed" }}>
        🚀 Projects
      </h2>

      <div style={cardContainerStyle}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={hoverEffect}
            onMouseLeave={removeHover}
          >
            <h3 style={{ color: "#89f7fe" }}>{project.title}</h3>
            <p style={{ color: "#ccc", marginTop: "10px" }}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
