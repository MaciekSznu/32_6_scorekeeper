import React from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';

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

  render() {
    return (
      <div className="App">
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} />
      </div>
    );
  }
}

export default App;
