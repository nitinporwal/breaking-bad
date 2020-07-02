import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/ui/Header';

class App extends Component {
  state = {
    items: {},
    isLoading: true
  }

  componentDidMount = () => {
    axios.get(`https://www.breakingbadapi.com/api/characters`).then(result => {
      console.log(result);
      this.setState({items: result.data, isLoading: false})
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default App;
