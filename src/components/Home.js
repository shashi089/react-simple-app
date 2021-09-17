import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <p>CRUD Operation</p>
        </div>
        <h2 className="sub-title">Web Technologies</h2>
        <div className="tech-container">
          <div>
            <div>HTML</div>
            <div>CSS</div>
            <div>
              React JS
              <ul>
                <li>React Router Dom</li>
                <li>Axios</li>
                <li>React Hooks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
