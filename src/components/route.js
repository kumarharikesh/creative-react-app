import { BrowserRouter as Router, Route, Routes as Switch, NavLink } from 'react-router-dom';
import BirdApp from './birdApp';
import HomeApp from './homeApp';
import CalculatorApp from './calculatorApp';
import ContactApp from './contactApp';
import './route.css';

var React = require('react');

class RouteApp extends React.Component {
  /** @param {Record<string, any>} props */
  constructor(props){
    super(props);
    this.state = {
      position: null,
      style: {
        position: "relative",
        // position: "sticky",
        // position: "fixed",
        top: "0",
        zIndex: "100",
        width: "100%",
      }
    }
  }
// OnScroll
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll= ()=>{

    let style= {
      position: "fixed",
      top: "0",
      zIndex: "100",
      width: "100%",
    };
    let scrollTop = document.documentElement.scrollTop;
    this.setState({position:scrollTop,});
    if (scrollTop>488) {
      this.setState({
        style: style,
      });
    }else{
      this.setState({
        style: {
          position: "relative",
          top: "0",
          zIndex: "100",
          width: "100%",
        },
      });
    }
  }

  render() {
    const { style } = this.state;
    // console.log(this.state.position);
    return (
      <Router>
        <div >
          <nav className="header" id="myHeader" style={style}>
          <div className="router-header">
            <ul id="route-header" >
              <li >
                <NavLink className="Link" exact='true' to="/" >Home</NavLink>
              </li>
              <li >
                <NavLink className="Link" to="/calculate" activeClassName="active" activestyle={{color: "#ff5722"}} >Calculate</NavLink>
              </li>
              <li >
                <NavLink className="Link" to="/fun" activeClassName="active" activestyle={{color: "#ff5722"}}>BirdApp</NavLink>
              </li>
              <li >
                <NavLink className="Link" to="/contact" activeClassName="active" activestyle={{color: "#ff5722"}}>Contact Me</NavLink>
              </li>
            </ul>
          </div>
          </nav>

          <Switch>
            <Route path="/" exact='true' Component={HomeApp} />
            <Route path="/calculate" Component={CalculatorApp} />
            <Route path="/fun" Component={BirdApp} />
            <Route path="/contact" Component={ContactApp} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default RouteApp;