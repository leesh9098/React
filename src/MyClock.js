import React from "react";
// import ReactDOM from "react-dom";
import "./MyClock.css";
import SnowStorm from 'react-snowstorm';
import Tilt from "react-tilt";
import moment from "moment";
// const React = require('react');
// require('./MyClock.css')

class MyClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      stopList: []
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

  stopEventListener() {
    this.setState({
      stopList: this.state.stopList.concat(this.state.time)
    })
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
      <div className="clockBox" style={{ color: this.props.color }}>
        <Tilt className="Tilt" options={{ max: 100 }} style={{ height: 250, width: 250 }} >
          <div className="Tilt-inner">
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
                <ul>
                  {this.state.stopList.map((entry, idx) => {
                    return <li key={idx}>{moment(entry).format("YYYY-MM-DD hh:mm:ss")}</li>
                  })}
                </ul>
                <div className="button" onClick={this.stopEventListener.bind(this)}>Stop!</div>
              </div>
            </div>
          </div>
        </Tilt>
        <SnowStorm />
      </div>
    );
  }
}

// ReactDOM.render(< MyClock />, document.querySelector("#app"));

export default MyClock;