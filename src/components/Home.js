import React from "react";

const Home = () => {
  const sectionStyle = {
    height: "100vh",
    background: "linear-gradient(135deg, #1f1f2e, #23243a)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#89f7fe",
  };

  const subTextStyle = {
    fontSize: "1.5rem",
    color: "#ccc",
    marginBottom: "30px",
    maxWidth: "600px",
  };

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "1rem",
    background: "#00c9ff",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>Hi, I'm Harshada Thakare</h1>
      <p style={subTextStyle}>
        A passionate Computer Engineering student who loves building web experiences with creativity and clean code.
      </p>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.background = "#ff758c")}
        onMouseLeave={(e) => (e.target.style.background = "#00c9ff")}
        onClick={() => window.location.href = "#projects"}
      >
        View My Projects 
      </button>
    </div>
  );
};

export default Home;
