import React from "react";

const Contact = () => {
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
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#6dd5ed" }}>
        Let's Connect
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#ccc", marginBottom: "30px" }}>
        I’m always open to collaborations, ideas, or just a friendly hello!
      </p>
      
      <div style={{ fontSize: "1.1rem", lineHeight: "2" }}>
        📧 <strong>Email:</strong> <a href="hthakare385@gmail.com" style={{ color: "#89f7fe", textDecoration: "none" }}>harshada@example.com</a><br />
        📱 <strong>Phone:</strong> <span style={{ color: "#89f7fe" }}>+91 9022713183</span><br />
        🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harshada-thakare-2b5913308" target="_blank" rel="opener referrer" style={{ color: "#89f7fe", textDecoration: "none" }}>linkedin.com/in/harshada-thakare-2b5913308</a><br />
        💻 <strong>GitHub:</strong> <a href="https://github.com/HarshadaThakare791" target="_blank" rel="opener referrer" style={{ color: "#89f7fe", textDecoration: "none" }}>github.com/HarshadaThakare791</a>
      </div>
    </div>
  );
};

export default Contact;
