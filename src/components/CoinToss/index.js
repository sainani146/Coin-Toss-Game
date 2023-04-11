/* eslint-disable no-unused-expressions */
// Write your code here
import {Component} from 'react'
import './index.css'

export default class CoinToss extends Component {
  state = {tossed: 0, to: 0, ta: 0, h: 0}

  onToss = () => {
    const {tossed} = this.state
    const coin = Math.floor(Math.random() * 2)
    console.log(coin)
    coin === 0 ? this.getHeads() : this.getTails()
    this.getTotal()
    return this.setState({tossed: coin})
  }

  coinImg = () => {
    const {tossed} = this.state
    if (tossed) {
      return 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
    return 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
  }

  getHeads = () => {
    const {h} = this.state
    return this.setState(prevState => ({h: prevState.h + 1}))
  }

  getTails = () => {
    const {ta} = this.state
    return this.setState(prevState => ({ta: prevState.ta + 1}))
  }

  getTotal = () => {
    const {to} = this.state
    return this.setState(prevState => ({to: prevState.to + 1}))
  }

  render() {
    const {tossed, to, ta, h} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img alt="toss result" src={this.coinImg()} />
          <button onClick={this.onToss} type="button">
            Toss Coin
          </button>
          <div className="result">
            <p>Total: {to}</p>
            <p>Heads: {h}</p>
            <p>Tails: {ta}</p>
          </div>
        </div>
      </div>
    )
  }
}
