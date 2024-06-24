import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    miutes: 0,
    seconds: 0,
  }

  time = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({miutes: prevState.miutes + 1, seconds: 0}))
    } else if (seconds < 59) {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }
  }

  Increment = () => {
    this.timerId = setInterval(this.time, 1000)
  }

  Decrement = () => {
    clearInterval(this.timerId)
  }

  Restart = () => {
    clearInterval(this.timerId)
    this.setState({miutes: 0, seconds: 0})
  }

  render() {
    const {seconds, miutes} = this.state
    const formattedSeconds = seconds.toString().padStart(2, '0')
    const formattedMinutes = miutes.toString().padStart(2, '0')
    return (
      <div className="main-container">
        <h1>Stopwatch</h1>
        <div className="content-container">
          <div className="stopwatch-logo-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <h3>Timer</h3>
          </div>
          <h1>
            {formattedMinutes}:{formattedSeconds}
          </h1>
          <div className="buttons-container">
            <button type="button" className="start" onClick={this.Increment}>
              Start
            </button>
            <button type="button" className="stop" onClick={this.Decrement}>
              Stop
            </button>
            <button type="button" className="reset" onClick={this.Restart}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
