import React from "react";
import "./birdApp.css";

class BirdApp extends React.Component {
  /** @param {Record<string, any>} props */
  
// OnScroll
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll= () => {

    let scrollTop = document.documentElement.scrollTop;
    
    if (scrollTop>488) {
      document.getElementById("ba").style.paddingTop = "120px";
    }else{
      document.getElementById("ba").style.paddingTop = "30px";
    }
  }

  render() {
    return <div className="container" id="ba">	
            <div className="flexBox">
              <h3><span style={{color:"rgb(71, 55, 34)", fontSize:"22px"}}>Birds Query: </span>Did you hear about new restaurant called FLOATING BIRD ?
              <span style={{color:"rgb(71, 55, 34)", fontSize:"22px"}}> Natures Response: </span>There's no menu, you get what you deserve.</h3>
              <h2>“SOFT FEATHERS CANNOT MAKE A CRUEL BIRD KIND”</h2>
            </div>
            <div className="bird-container">
              <div className="bird"></div>
            </div>
          </div>;
  }
}
export default BirdApp;
