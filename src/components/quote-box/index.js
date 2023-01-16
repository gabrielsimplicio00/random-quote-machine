import React from 'react'
import './quote-box.css'

class QuoteBox extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleClick.bind(this)
    this.state = {
      date: new Date(),
      counter: 0
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      counter: this.state.counter + 1
    })
    console.log(this.state.counter)
  }
  
  render() {
    return (
      <div className='QuoteBox' id='quote-box'>
        <div className='quote-text quote' id='text'>dale</div>
        <div className='quote-author quote' id='author'>
          <p>{this.state.date.toLocaleTimeString()}</p>
        </div>
        <div className='quote-button quote'>
          <button className='new-quote' onClick={this.handleClick}>New Quote</button>
        </div>
      </div>
    )
  }
  
}

export default QuoteBox