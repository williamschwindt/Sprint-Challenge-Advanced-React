import React from 'react';
import './App.css';
import { PlayerCard } from './components/PlayerCard';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
        .get("http://localhost:5000/api/players")
    
        .then(res => {
            console.log(res);
            this.setState({ data: res.data });
        })
    
        .catch(err => {
            console.log(err);
        })
  }

  render() {
    return (
      <div className="App">
        <PlayerCard data={this.state.data}/>
      </div>
    );
  }
}

export default App;
