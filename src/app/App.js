import React, { Component } from "react";
import {hot} from "react-hot-loader";
import CheckboxWithLabel from './components/CheckboxWithLabel';
import "./App.css";
import "../assets/sass/global.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, MOomba! </h1>
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
      </div>
    );
  }
}

export default hot(module)(App);