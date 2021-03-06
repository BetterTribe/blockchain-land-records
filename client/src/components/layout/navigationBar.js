import React, { Component } from "react";
import "../../App.css";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-red mb-4 navigate">
        <div className="container">
          <a
            style={{ color: "#99a2a9" }}
            className="navbar-brand fontTitle"
            href="/"
          >
            Land Docs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  style={{ color: "#99a2a9" }}
                  className="nav-link navOption"
                  href="/register"
                >
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "#99a2a9" }}
                  className="nav-link navOption"
                  href="/login"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
