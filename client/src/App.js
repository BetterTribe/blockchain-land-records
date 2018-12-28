import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/navigationBar";
import Home from "./components/layout/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="optionsLandingPage">
          <nav>
            <ul>
              <li>Sign Up</li>
              <li style={{ marginLeft: 60 }}>Log In</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
