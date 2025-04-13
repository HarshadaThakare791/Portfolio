import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const sectionStyle = {
    minHeight: "100vh", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "40px 20px",
    scrollSnapAlign: "start",
    boxSizing: "border-box"
  };
  

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", backgroundColor: "#0f0f0f", color: "#ffffff" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#1e1e2f", color: "white", padding: "30px 20px", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Harshada Thakare</h1>
        <p style={{ fontStyle: "italic", fontSize: "1.1rem", color: "#ccc" }}>
          Welcome to my professional portfolio
        </p>
      </header>

      {/* Navigation Bar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#121212",
          padding: "12px 0",
          textAlign: "center",
          zIndex: 1000,
        }}
      >
        {["Home", "About", "Skills", "Education", "Projects", "Contact"].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            style={{
              color: "#ffffff",
              margin: "0 20px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ff6b81")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            {section}
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <main
        style={{
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          overflowY: "scroll",
          height: "calc(100vh - 150px)", // adjust if header height changes
        }}
      >
        <section id="home" style={sectionStyle}><Home /></section>
        <section id="about" style={sectionStyle}><About /></section>
        <section id="skills" style={sectionStyle}><Skills /></section>
        <section id="education" style={sectionStyle}><Education /></section>
        <section id="projects" style={sectionStyle}><Projects /></section>
        <section id="contact" style={sectionStyle}><Contact /></section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1e1e2f", color: "white", padding: "20px", textAlign: "center" }}>
        © {new Date().getFullYear()} <strong>Harshada Thakare</strong>.
      </footer>
    </div>
  );
}

export default App;
