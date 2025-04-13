import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#1f1f2e",
        color: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        maxWidth: "700px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "15px", color: "#ff758c" }}>
        About Me
      </h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#ccc" }}>
         I’m <strong>Harshada Thakare</strong>, a Computer Engineering student passionate about learning new things .
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#ccc", marginTop: "10px" }}>
         Passionate about turning ideas into real-world solutions with clean code & a creative touch.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#ccc", marginTop: "10px" }}>
         Always learning. Always growing.
      </p>
    </div>
  );
};

export default About;
