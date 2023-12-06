import React from "react";
import "./footer.css";

function App() {
  const date = new Date(); //(2018, 6, 15, 12);
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    background: "#ff5722",
    color: "#2E0929",
    borderRadius: "3rem",
    padding: "0px 5px",
  };

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Night";
    styles.background = "#0ea0a0";
    styles.color = "#fcd000";
  }

  return (
    <div className="App">
      <footer className="footer">
        <h3 style={styles}>{`Good.${timeOfDay}.!!.`}</h3>
        <p>
          Learn REACT by <a href="https://youtu.be/nvHeB32ICDM">Hitesh's</a>{" "}
          crash course
        </p>
      </footer>
    </div>
  );
}

export default App;
