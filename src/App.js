import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/ui/Header';
import CharacterGrid from './Components/characters/CharacterGrid';
import Search from './Components/ui/Search';

class App extends Component {
  state = {
    items: {},
    isLoading: true
  }

  componentDidMount = () => {
    axios.get(`https://www.breakingbadapi.com/api/characters`).then(result => {
      console.log(result);
      this.setState({items: result.data, isLoading: false});
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <CharacterGrid isLoading={this.state.isLoading} items={this.state.items} />
      </div>
    );
  }
}

export default App;
