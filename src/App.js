import React, { Component } from "react";
import "./App.css";

class Calendar extends Component {
  state = {
    topic: "",
    date: ""
  };

  handle = () => {
    console.log(this);
    const text = document.querySelector(".topic").value;
    console.log(text)

    const date = document.querySelector(".date").value;
    console.log(date)

    this.setState({
      topic: this.state.topic + text,
      date: this.state.date + date
    })
  };

  render() {
    return (
      <div className="app">
        <h1>Wprowadź zadania do wykonania:</h1>
        <h3>Wprowadź krótki opis zadania </h3>
        <input
          type="text"
          placeholder="Podaj krótki opis zadania"
          className="topic"
        />

        <h3>Podaj datę</h3>
        <input type="date" className="date" />
        <button type="button" onClick={this.handle}>
          Dodaj nowe zadanie
        </button>

        <p className="result">{this.state.topic}-{this.state.date}</p>
      </div>
    );
  }
}


export default Calendar;
