import React, { Component } from 'react'; 
import './App.css'; 

import Input from './components/InputCalc'; 

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Input></Input>
        </div>
      </div>
    ); 
  }
}

export default App; 
