import React from "react";
import ProfileImage from "./img/IMG2.jpg";
import "./home.css";

class HomeApp extends React.Component {
  /** @param {Record<string, any>} props */
  constructor(props) {
    super(props);
    this.state = { paddingtop: "150px" };
  }

  owner = {
    name: 'Harikesh Patel',
    designation: 'System Engineer',
    employer: 'TCS',
    profileImageUrl: ProfileImage,
    profileImageLink: "https://kumarharikesh.github.io/",
    description: "Credibly embrace visionary internal or 'organic' sources and business benefits. Collaboratively integrate efficient portals rather than customized customer service. Assertively deliver frictionless services via leveraged interfaces. Conveniently evisculate accurate sources andprocess-centric expertise.Energistically fabricate customized imperatives through cooperative catalysts for change.",
    DOB: 'JULY 24, 1999',
    nationality: 'INDIA',
    language: {
      l1: 'HINDI',
      t1: '(NATIVE)',
      l2: 'ENGLISH',
      t2: '(FLUENT)',
    },
  };
  ownerSocialLinks = [
    {
      url: 'https://www.facebook.com/profile.php?id=100022095913969',
      title: 'Like me on Facebook',
      className: 'facebook',
    },
    {
      url: 'https://twitter.com/Harikes49467657',
      title: 'Follow me on Twitter',
      className: 'twitter',
    },
    {
      url: 'https://www.linkedin.com/in/harikesh-patel-357171191',
      title: 'Connect with me on Linkedin',
      className: 'linkedin',
    },
    {
      url: 'https://github.com/kumarharikesh',
      title: 'Checkout my git Repo',
      className: 'github',
    },
    {
      url: 'https://www.hackerrank.com/Harikesh_Patel',
      title: 'Follow me on Hackerrank',
      className: 'hackerrank',
    },
  ]


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
                <a href={this.owner.profileImageLink} target="_blank" rel="noreferrer">
                  <img src={this.owner.profileImageUrl} className="img-responsive" alt="" />
                </a>
              </div>
            </div>

            <div className="data_field" >
              <div className="name-wrapper">
                <h1 className="h1">{this.owner.name}</h1>
                <span>{this.owner.designation} at {this.owner.employer}</span>
              </div>

              <p className="description">{this.owner.description}</p>

              <div id="data">
                <div className="co_-md_3">
                  <div className="personal-details">
                    <strong>{this.owner.DOB}</strong>
                    <small>BIRTH</small>
                  </div>
                </div>

                <div className="col_md_3">
                  <div className="personal-details">
                    <strong>{this.owner.nationality}</strong>
                    <small>NATIONALITY</small>
                  </div>
                </div>

                <div>
                  <div className="personal-details">
                    <strong>{this.owner.language.l1} <span>{this.owner.language.t1}</span>, {this.owner.language.l2} <span>{this.owner.language.t2}</span></strong>
                    <small>LANGUAGE</small>
                  </div>
                </div>
              </div>

              <ul className="social-icon">
                {this.ownerSocialLinks.map(link =>
                  <li className={link.className}>
                    <a href={link.url} 
                      title={link.title}
                      rel="noreferrer"
                      target="_blank"
                      />
                  </li>
                )}                
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default HomeApp;
