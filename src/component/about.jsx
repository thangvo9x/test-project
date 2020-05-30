import React from "react";
import myImage from "../img/avatar.png";

// eslint-disable-next-line
export default class About extends React.Component {
  render() {
    return (
      <div
        id="about-container"
        className="content-containers container text-center mt-5"
      >
        <div className="row" style={{ marginTop: 7 + "rem" }}>
          <div className="col-lg-12 col-sm-12 col-xs-12 row">
            <div className="col-lg-6 col-sm-12 col-xs-12 center">
              <img
                className={"img-fluid " + this.props.fadeIn}
                src={myImage}
                alt=""
                style={{
                  borderRadius: 50 + "%",
                  height: 250 + "px",
                  width: 250 + "px",
                }}
              />
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 center">
              <h2>VO HUYNH DUY THANG</h2>
              <p className={"mytext pt-3 " + this.props.fadeIn}>
                I love to transform ideas into reality using code. I am
                passionate about using Javascript and animations to create
                awesome user experiences.
              </p>
            </div>
          </div>
          <div className="container col-12 col-sm-12 col-md-12 col-lg-6 wrapper">
            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 80 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                HTML5
              </div>
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 80 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                CSS3
              </div>
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-90-bar"
                role="progressbar"
                style={{ width: 90 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Javascript
              </div>
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-60-bar"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                PHP
              </div>
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-80-bar"
                role="progressbar"
                style={{ width: 80 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                ReactJS
              </div>
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-60-bar"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                NodeJs
              </div>
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-60-bar"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                SASS
              </div>
            </div>
            <div className="progress mb-3">
              <div
                className="progress-bar fill-60-bar"
                role="progressbar"
                style={{ width: 60 + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                JQuery
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
