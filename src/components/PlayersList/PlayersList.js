import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';

const PlayersList = (props) => (
  <ul className="PlayerList">
    {props.players.map((player, i) => (
      <Player
        key={i}
        name={player.name}
        score={player.score}
        // each time when +/- button is pressed in Player component onPlayerScoreChange function is executed, info about points and palyer key is transeferd to App component with onScoreUpdate function
        onPlayerScoreChange={(points) => props.onScoreUpdate(i,points)}
      />)
    )}
  </ul>
);

export default PlayersList;

