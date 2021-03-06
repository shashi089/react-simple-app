import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="about">
          <h1>Shashidhar Naik</h1> <h2> Front-end Developer</h2>
          <h3>
            I like dabbling in various parts of frontend development and like to
            learn about new technologies
          </h3>
          <h3>
            <a href="https://www.linkedin.com/in/shashidhar-naik-aab5b512a/">
              https://www.linkedin.com/in/shashidhar-naik-aab5b512a/
            </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default About;
