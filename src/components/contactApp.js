import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contactApp.css";

class ContactUs extends React.Component {
  /** @param {Record<string, any>} props */
  constructor(props) {
    super(props);
    this.style1 = {
      width: '100%',
      height: '100%',
      color: 'rgb(10, 160, 10)',
      display: 'none',
    };
    this.style2 = {
      width: '100%',
      height: '100%',
      color: 'orangered',
      display: 'none',
    };
    this.state = { paddingtop: "0px" };
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
    // let scrWidth = document.body.scrollWidth;
    // console.log(scrWidth);

    if (scrollTop > 488) {
      this.setState({ paddingtop: "90px" });
    } else {
      this.setState({ paddingtop: "0px" });
    }
  }
  // document.getElementById("error_message").style.display= "";
  // document.getElementById("success_message").style.display= "none";

  render() {
    return (
      <div className="app" style={{ paddingTop: this.state.paddingtop }}>
        <div className="row" id="main_container">
          <div className="col-md-6 " id="form_container">

            <p> Please send your message below. We will get back to you at the earliest! </p>
            <form id="reused_form" method="post" action="https://telf0cjru3.execute-api.ap-south-1.amazonaws.com/harrycodes/contact" >

              <div className="row">
                <div className="col-sm-12 form-group">
                  <label htmlFor="message"> Message <font style={{ color: "rgb(247, 105, 22)" }}>*</font> </label>
                  <textarea className="form-control" type="textarea" id="message" name="message" placeholder="comment" maxLength="6000" rows="5" required ></textarea>
                </div>
              </div>

              <div className="row">

                <div className="col-sm-6 form-group">
                  <label htmlFor="name"> Your Name <font style={{ color: "rgb(247, 105, 22)" }}>*</font></label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="name" required />
                </div>
                <div className="col-sm-6 form-group">
                  <label htmlFor="name"> Phone </label>
                  <input type="number" className="form-control" id="name" name="number" placeholder="phone" />
                </div>
                <div className="col-sm-6 form-group">
                  <label htmlFor="email"> Email </label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="email" minLength="6" />
                </div>
                <div className="col-sm-6 form-group">
                  <label style={{ fontSize: "12px" }}>&nbsp;</label>
                  <div className="col-sm-12 form-group">
                    <button type="submit" className="btn btn-lg btn-default pull-right" >Send &rarr;</button>
                  </div>
                </div>

              </div>

            </form>

            <div id="success_message" style={this.style1}> <h3>Posted your message successfully!</h3> </div>
            <div id="error_message" style={this.style2}> <h3>Error</h3> Sorry! There was an error sending your message. </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
