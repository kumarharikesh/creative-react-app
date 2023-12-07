import React from "react";
import Child from "./Child.js";
import logo from "./img/h-logo.svg";
import "./App.css";

class TodoApp extends React.Component {
  /** @param {Record<string, any>} props */
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
      warningDataValue: "",
      x: 1,
      paddingbottom: "70px",
    };
  }
  handleEnterKey(e) {
    // if (e.key === 'Enter') {           /* or  // if (e.which === 13) {*/
    if (e.keyCode === 13) {
      this.addItem(this.state.newItem);

      const addBtn = document.getElementsByClassName("addBtn");
      addBtn.disabled = !this.state.newItem.length;
    }
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      todoValue =  todoValue[0].toUpperCase() + todoValue.slice(1);
      const newItem = {
        id: Date.now(),
        value: todoValue,
        // isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      list.sort((a, b) => a.value.localeCompare(b.value));

      this.setState({
        newItem: "",
        list: list,
        warningDataValue: "",
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });

    const checkList = document.querySelectorAll("li .li");
    if (checkList.length <= 2 - this.state.x) {
      const warnString = (
        <div>
          <h4>Your WorkList is <span style={{color: "orangered", fontWeight: "bold"}} >empty!!</span></h4>
          <h4>Add at least <span style={{color: "green", fontWeight: "bold"}} >one.</span></h4>
        </div>
      );
      this.setState({warningDataValue: warnString});
    }
  }
  DeleteHomeli() {
    document.getElementById("fixli").style.display = "none";
    this.setState({ x: 0 });

    const checkList = document.querySelectorAll("li .li");
    if (checkList.length <= 1) {
      const warnString = (
        <div>
          <h4>Your WorkList is <span style={{color: "orangered", fontWeight: "bold"}} >empty!!</span></h4>
          <h4>Add at least <span style={{color: "green", fontWeight: "bold"}} >one.</span></h4>
        </div>
      );

      this.setState({ warningDataValue: warnString });
    }
  }

  updateInput(input) {
    this.setState({ newItem: input });
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
      this.setState({paddingbottom:"30px"});
    }else{
      this.setState({paddingbottom:"70px"});
    };
  }
  render() {
    // const {handleSubmit} = this.addItem(this.state.newItem);
    return (
      <div className="logo-cont" style={{paddingBottom: this.state.paddingbottom}}>
        <a target="_blank"
          rel="noreferrer"
          href="https://the-creative-vibe-zone.netlify.app/" 
          title="A home where hopes and dreams kept…" 
        >
        <img src={logo} className="rotating-logo" alt="" />
            </a>
        <div className="owner">HarryStyle</div>
        <hr className="hr" />

        <div className="inputSection">
          <h4>Save your future WorkList . . .</h4><br></br>
          <input
            type="text"
            className="inputText"
            placeholder="Enter your ToDos"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
            onKeyUp={this.handleEnterKey.bind(this)}
          />
          <button
            className="addBtn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            AddTodo
          </button>
        </div>

        <div className="list">
          <ol id="list">
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  <div className="li">
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    />
                    <label>{item.value}</label>
                    <button
                      className="deleteBtn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}

            <li id="fixli">
              <div className="li" /*style={{background: "green"},{}}*/>
                <input type="checkbox" name="" id="checkbox" />
                <label>Study for MidSem 📑</label>
                <button className="deleteBtn" onClick={() => this.DeleteHomeli()}>
                  Delete
                </button>
              </div>
            </li>

            <Child warning={{ data: this.state.warningDataValue }} />
          </ol>
        </div>
      </div>
    );
  }
}

export default TodoApp;
