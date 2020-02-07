import React, {Component} from 'react'

class Result extends Component {

  render() {
    let {result, message} = this.props; 

    return (
      <div>
        <span>{result}</span>
        <p>{message}</p>
      </div>
    )
  }
}

export default Result; 