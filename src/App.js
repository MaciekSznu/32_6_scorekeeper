import React from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends React.Component {

  state = {
    players: [
      {
        name: 'Kunegunda',
        score: 5,
      },
      {
        name: 'Antek',
        score: 0,
      }
    ]
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        // returns new object based on player object with nev score value
        if (index === playerIndex) {
          return {...player, score: player.score + scoreChange};
        }
        return player;
      })
    })
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }
 
  onPlayerRemove = (playerIndex) => {
    this.setState({
      players: this.state.players.filter((player, index) => index !== playerIndex)
    });
  };

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} />
      </div>
    );
  }
}

export default App;
