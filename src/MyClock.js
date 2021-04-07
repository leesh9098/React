import React from "react";
import ReactDOM from "react-dom";
import "./MyClock.css";

// const React = require('react');
// require('./MyClock.css')

class MyClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 50);
  }

  formatSet(data) {
    return data < 10 ? "0" + data : data;
  }

  formatMsSet(data) {
    return data < 100 ? (data < 10 ? "00" + data : "0" + data) : data;
  }

  render() {
    const { time } = this.state;
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    const ms = time.getMilliseconds();
    const yyyy = time.getFullYear().toString();
    const mm = (time.getMonth() + 1).toString();
    const dd = time.getDate().toString();

    return (
      <div className="clockBox" style={{color:this.props.color}}>
        <div className="clock_wrap">
          <h1>{this.props.text}</h1>
          <div className="date">
            {yyyy}-{mm}-{dd}
          </div>
          <div className="time_wrap">
            <span className="time">
              {h}:{m}:{s}
            </span>
            <span className="ms">{ms}</span>
          </div>
        </div>
      </div>
    );
  }
}

class MyApp extends React.Component {
  render() {
    return <div> myapp </div>;
  }
}

// ReactDOM.render(< MyClock />, document.querySelector("#app"));

export default MyClock;