import React from "react";
import ProfileImage from "./img/IMG2.jpg";
import "./home.css";

class HomeApp extends React.Component {
  /** @param {Record<string, any>} props */
  constructor(props) {
    super(props);
    this.state = { paddingtop: "150px" };
  }
  // OnScroll
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {

    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 488) {
      this.setState({ paddingtop: "140px" });
    } else {
      this.setState({ paddingtop: "50px" });
    }
  }
  render() {
    return (
      <div className="headerHome" style={{ paddingTop: this.state.paddingtop }}>
        <div className="containerhome">
          <div className="home">

            <div className="col_md_3">
              <div className="profile-img">
                <a href="https://kumarharikesh.github.io/" target="_blank" rel="noreferrer">
                  <img src={ProfileImage} className="img-responsive" alt="" />
                </a>
              </div>
            </div>

            <div className="data_field" >
              <div className="name-wrapper">
                <h1 className="h1">Harikesh Patel</h1>
                <span>System Engineer at TCS</span>
              </div>

              <p className="p">
                Credibly embrace visionary internal or "organic" sources and business benefits. Collaboratively
                integrate efficient portals rather than customized customer service. Assertively deliver
                frictionless services via leveraged interfaces. Conveniently evisculate accurate sources and
                process-centric expertise.Energistically fabricate customized imperatives through cooperative
                catalysts for change.
              </p>

              <div id="data">
                <div className="co_-md_3">
                  <div className="personal-details">
                    <strong>JULY 24, 1999</strong>
                    <small>BIRTH</small>
                  </div>
                </div>

                <div className="col_md_3">
                  <div className="personal-details">
                    <strong>INDIA</strong>
                    <small>NATIONALITY</small>
                  </div>
                </div>

                <div>
                  <div className="personal-details">
                    <strong>HINDI <span>(NATIVE)</span>, ENGLISH <span>(FLUENT)</span></strong>
                    <small>LANGUAGE</small>
                  </div>
                </div>
              </div>

              <ul className="social-icon">
                <li className="facebook">
                  <a href="https://www.facebook.com/profile.php?id=100022095913969" rel="noreferrer" title="Like me on Facebook" target="_blank">facebook</a>
                </li>
                <li className="twitter">
                  <a href="https://twitter.com/Harikes49467657" rel="noreferrer" title="Follow me on Twitter" target="_blank">twitter</a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/harikesh-patel-357171191" rel="noreferrer" title="Connect with me on Linkedin" target="_blank">linkedin</a>
                </li>
                <li className="git">
                  <a id="github" href="https://github.com/kumarharikesh" rel="noreferrer" title="Checkout my git Repo" target="_blank" data-clipboard-text="harikeshpatel24@gmail.com">github</a>
                </li>
                <li className="hackerrank">
                  <a href="https://www.hackerrank.com/Harikesh_Patel" rel="noreferrer" title="Follow me on Hackerrank" target="_blank">hackerrank</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default HomeApp;
