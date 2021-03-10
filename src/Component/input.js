import React, { Component } from "react";

export default class input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleClick = (e) => {
    // var input = document.getElementsByName("name[]");
    // var a = new Array(10);
    // for (var i = 0; i < input.length; i++) {
    //   a = input[i];
    // }
    // console.log(a.value);
    e.preventDefault();
    var inputtag = document.createElement("INPUT");
    document.body.appendChild(inputtag);
  };

  handleChange = (e) => {
    e.preventDefault();
    var a;
    var input = document.getElementsByName("name");
    for (var i = 0; i < input.length; i++) {
      a = input[i];
    }
    console.log(a.value);
  };

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     this.props.Submitform(this.state.form);
  //   };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
            <button onClick={this.handleClick}>+</button>
          </label>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
}
