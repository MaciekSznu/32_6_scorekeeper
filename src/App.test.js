import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {

  const players = [{
    name: 'Franek',
    score: 2
  }]

  // setting palyers as an empty array at test start
  const appComponent = shallow(<App players={[]} />);

  // setting state as players
  appComponent.setState({players});
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

  onScoreUpdate(0, 5);

  const playersAferUpdate = appComponent.state().players;

  // 2 + 5 = 7
  expect(playersAferUpdate[0].score).toEqual(7);
});

it('should add new player', () => {

  // rendering App
  const appComponent = shallow(<App players={[]} />);
  appComponent.setState({players: []});

  // execute onPlayerAdd in AddPlayer component with name 'Ania'
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');
  // read state
  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});