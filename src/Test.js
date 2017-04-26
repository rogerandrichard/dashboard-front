import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BeerList = (props) => {
  return (
    <ul>
      { props.beers.map ( beer => { return <Beer key={beer.id} {...beer} /> } ) }
    </ul>
  )
}
const Beer = (props) => {
  return (
    <li>{props.name}</li>
  )
}

class Test extends Component {
  constructor() {
    super()
    this.state = {beers: []}
  }
  componentDidMount() {
    fetch('http://localhost:3000/beers')
    .then( resp => {
      return resp.json()
    })
    .then( json => {
      var beers = json.beers;
      this.setState({beers})
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Beers</h1>
        <BeerList beers={this.state.beers} />
      </div>
    );
  }
}

export default Test;