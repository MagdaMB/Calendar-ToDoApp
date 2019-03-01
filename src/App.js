import React, { Component } from "react";
import "./App.css";

class Calendar extends Component {
  state = {
    topic: "",
    date: ""
  };

  handleClick = () => {
    const text = document.querySelector(".topic").value;
    const date = document.querySelector(".date").value;

    this.setState({
      topic: this.state.topic + text,
      date: this.state.date + date
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Wprowadź zadania do wykonania:</h1>
        <Description />
        <Date />
        <button type="button" onClick={this.handleClick}>
          Dodaj nowe zadanie
        </button>

        <p className="resut">
          {this.state.topic} {this.state.date}
        </p>
      </div>
    );
  }
}

const Description = () => {
  return (
    <>
      <h3>Podaj krótki opis </h3>
      <input
        type="text"
        placeholder="Podaj krótki opis zadania"
        className="topic"
      />
    </>
  );
};

const Date = () => {
  return (
    <>
      <h3>Podaj datę</h3>
      <input type="date" className="date" />
    </>
  );
};
export default Calendar;
