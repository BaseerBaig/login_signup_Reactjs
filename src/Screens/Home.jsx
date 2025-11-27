import React from "react";

function HomeScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to My Home Screen</h1>
      <p style={styles.subtitle}>This is a simple home page built with React JS.</p>

      <button style={styles.button}>Get Started</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: "32px",
    color: "#333",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default HomeScreen;
