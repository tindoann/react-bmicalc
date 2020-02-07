import React, { Component } from 'react'
import Result from '../components/Result'; 

class Input extends Component {
  constructor() {
    super(); 

    this.state = {
      height: 0, 
      weight: 0, 
      result: '', 
      message: ''
    }
  }

  // handle user input without binding due to es6
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value }); 
  }; 

  // To calculate BMI
  calculateBMI(event) {
    let {height, weight} = this.state;
    let result = ( ( weight / ( height * height ) ) * 10000 ).toFixed(1);

    if ( result < 15 ) {
        this.setState({message: 'Very severely underweight'});
    } else if ( result > 15 && result <= 16 ) {
        this.setState({message: 'Severely underweight'});
    } else if ( result > 16 && result <= 18.5 ) {
        this.setState({message: 'Underweight'});
    } else if ( result > 18.5 && result <= 25 ) {
        this.setState({message: 'Normal (healthy weight)'});
    } else if ( result > 25 && result <= 30 ) {
        this.setState({message: 'Overweight'});
    } else if ( result > 30 && result <= 35 ) {
        this.setState({message: 'Moderately obese'});
    } else if ( result > 35 && result <= 40 ) {
        this.setState({message: 'Severely obese'});
    } else if ( result > 40 ) {
        this.setState({message: 'Very severely obese'});
    } else {
        this.setState({message: 'NA'});
    }

    this.setState({result: result});
}

render() {
  return (
      <div className="container">
          <div style={{'marginTop': '50px'}}>
              <div className="text-center"><h5>BMI Calculator</h5></div>
              <form className="form-horizontal" autoComplete="off">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="height">Height:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" name="height" id="height" placeholder="Enter height in cm" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="weight">Weight:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" name="weight" id="weight" placeholder="Enter weight in kg" onChange={this.handleChange} />
                  </div>
                </div>
                  <div className="form-group">
                  <label className="control-label col-sm-2">Result:</label>
                  <div className="col-sm-10">
                    <ResultComponent result={this.state.result} message={this.state.message}></ResultComponent>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="button" onClick={this.calculateBMI} className="btn btn-primary">Calculate BMI</button>
                  </div>
                </div>
              </form>
          </div>
      </div>
  );
 }
}

export default Input;