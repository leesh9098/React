import React from 'react';
import './App.css';
import MyClock from './MyClock';

class App extends React.Component {
  render() {
    return (
      <div>
        <MyClock text="시계1번" color="red"/>
        <MyClock text="시계2번" color="yellow"/>
        <MyClock text="시계3번" color="green"/>
        <MyClock text="시계4번" color="blue"/>
      </div>
    )
  }
}

export default App;
