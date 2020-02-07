import React, { Component } from 'react'; 
import './App.css'; 

import InputComponent from './components/InputCalc'; 

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <InputCalc></InputCalc>
        </div>
      </div>
    ); 
  }
}

export default App; 
