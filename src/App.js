import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/ui/Header';
import CharacterGrid from './Components/characters/CharacterGrid';
import Search from './Components/ui/Search';

class App extends Component {
  state = {
    items: {},
    isLoading: true,
    query: ""
  }

  componentDidMount = () => {
    this.fetchCharacters();
  }
  fetchCharacters = () => {
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${this.state.query}`).then(result => {
      // console.log(result);
      this.setState({items: result.data, isLoading: false});
    })
  }
  handleQueryChange = (q) => {
    this.setState({query: q});
    setTimeout(() => {
      this.fetchCharacters();
    }, 100);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Search handleQuery={(q) => {this.handleQueryChange(q)}} />
        <CharacterGrid isLoading={this.state.isLoading} items={this.state.items} />
      </div>
    );
  }
}

export default App;
