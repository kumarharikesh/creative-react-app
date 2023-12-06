import React from "react";
import "./calculator.css";

class Calculator extends React.Component {
  /** @param {Record<string, any>} props */
  constructor(props){
    super(props);
    this.state = {
      paddingtop: "50px",
    }
  }

  minimizeFontSize = (Length)=> {

    var gap = "&nbsp;&nbsp;&nbsp;";
    var size = "18px";
    
    if(Length > 10 && Length <12){
      gap = "&nbsp;&nbsp;";
      size = "16px";
    }if(Length >= 12){
      gap = "&nbsp;";
      size = "14px";
    }if(Length >= 18){
      size = "12px";
    }if(Length >= 25){
      gap = "";
      size = "8px";
    }
    return {gap, size};
  }

  onButtonClick = (e, action="") => {

    var text = "18px";
    var res = document.getElementById("res");
    res.style.fontSize=text;
    if(!action){
      var btn = e.target || e.srcElement;
      action = document.getElementById(btn.id).innerHTML;
    }
    switch (action) {
      case "C":
        res.innerHTML = "";
        break;
      case "=":
        var expr = res.innerHTML;
        if(expr === "" || expr.includes("=")){
          text = this.minimizeFontSize(expr.length);
          res.style.fontSize=text.size;
          break;
        }
        let value = expr;
        var nums = /(\d+)/g;
        // Replace all base 2 nums with base 10 equivs
        expr = expr.replace(nums, function (match) {
          return parseInt(match, 2);
        });
        // eval in base 10 and convert to base 2
        try{
          // eslint-disable-next-line no-eval
          var innerHtml = `${value} = ${eval(expr).toString(2)}`;
          var resLength= innerHtml.length;

          if(resLength > 20){
            res.style.fontSize="14px";
          }if(resLength > 30){
            res.style.fontSize="12px";
          }
          text = this.minimizeFontSize(resLength);
          res.style.fontSize= text.size;
          res.innerHTML = innerHtml;

        }catch(SyntaxError){

          var errorLength= res.innerHTML.length;
          text = this.minimizeFontSize(errorLength);
          var space = text.gap;
          var Npx= text.size;

          res.innerHTML = `<p style='font-size:${Npx}'>${res.innerHTML}<font style='color:lightsalmon;font-size:26px;font-weight:100;'>${space}|</font></p><strong style='color: orangered;font-size:${Npx}'>SyntaxError :</strong><h6>Clear & try again!!</h6>`;
        }
        break;
      default:
        if(res.innerHTML.includes("=") || res.innerHTML.includes("S")){
          res.innerHTML = "";
        }
        res.innerHTML += action;
        var innerHtmlLength = res.innerHTML.length;
        text= this.minimizeFontSize(innerHtmlLength);
        res.style.fontSize= text.size;
        break;
    }
  }

  handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      // button.click();
      // this.setState({action: '='});
      this.onButtonClick(e,"=");
    }
  }
  handleKeys(e) {
    if (e.keyCode === 48 || e.keyCode===96) {
      this.onButtonClick(e,"0");
    }if (e.keyCode === 49 || e.keyCode===97) {
      this.onButtonClick(e,"1");
    }if (e.keyCode === 107) {
      this.onButtonClick(e,"+");
    }if (e.keyCode === 109) {
      this.onButtonClick(e,"-");
    }if (e.keyCode === 106) {
      this.onButtonClick(e,"*");
    }if (e.keyCode === 111) {
      this.onButtonClick(e,"/");
    }if (e.keyCode === 8 || e.keyCode===46) {
      this.onButtonClick(e,"C");
    }
  }

  // OnScroll
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll= () =>{

    let scrollTop = document.documentElement.scrollTop;
    
    if (scrollTop>488) {
      this.setState({paddingtop:"140px"});
    }else{
      this.setState({paddingtop:"50px"});
    }
  }
  render() {
  return(
    
    <div id="calciback" style={{paddingTop: this.state.paddingtop}} >
      <h2>Binary Calculator</h2>
      <div id="calci">
        <div style={{padding: "30px 0 0"}}>
          <h3 style={{textAlign: "center", padding: "0px 15px 0px", fontSize: "14px", fontFamily: "cursive"}}>
            Solve some binary problems on it.
          </h3>
        </div>
        <div id="res"></div>
        <div id="btns" className="containerclass" onKeyUp={this.handleEnterKey.bind(this)} onKeyDown={this.handleKeys.bind(this)} >
          <button className="btnclass" id="btn0" onClick= {this.onButtonClick} >0</button>
          <button className="btnclass" id="btn1" onClick= {this.onButtonClick} >1</button>
          <button className="btnclass" id="btnClr" onClick= {this.onButtonClick} title="Clear Button" >C</button>
          <button className="btnclass" id="btnEql" onClick= {this.onButtonClick} >=</button>            
          <button className="btnclass" id="btnSum" onClick= {this.onButtonClick} >+</button>           
          <button className="btnclass" id="btnSub" onClick= {this.onButtonClick} >-</button>           
          <button className="btnclass" id="btnMul" onClick= {this.onButtonClick} >*</button>            
          <button className="btnclass" id="btnDiv" onClick= {this.onButtonClick} >/</button>
        </div>
      </div>
    </div>

  );
  }
}

export default Calculator;
