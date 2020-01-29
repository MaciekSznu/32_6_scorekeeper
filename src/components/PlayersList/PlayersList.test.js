import PlayersList from './PlayersList';
import Player from '../Player/Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {

  // testowa tablica graczy
  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Antek',
      score: 0
    }
  ]
  
  // shallow shows error, this method doesn't render li tags, only Player components, what we can see in debug log
  // const playerComponent = shallow(<PlayersList players={players} />)
  // need to import mount method
  // const playerComponent = mount(<PlayersList players={players} />)

  // shallow is ok when we are finding components e.g. Player
  const playerComponent = shallow(<PlayersList players={players} />)

  // debug function log
  // console.log(playerComponent.debug());
  
  // li tags checking
  // const expectedPlayersNumber = playerComponent.find('li').length;

  // Player components checking
  const expectedPlayersNumber = playerComponent.find(Player).length;

  
  expect(expectedPlayersNumber).toEqual(2)
});

it('execute onScoreUpdate', () => {

  // testowa tablica graczy
  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Antek',
      score: 0
    }
  ]

  // mock
  const mockedOnScoreUpdate = jest.fn();
  // render
  const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  // component to test
  const firstPlayer = playerComponent.find(Player).first();
  // we can't get into component but we can get to it's props, with prop function we can transfer props name we want to get into
  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
  // we call function with specified value
  onPlayerScoreChange(10);

  // expected value for first player with score 10
  expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);

});

it('execute onPlayerRemove', () => {

  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Antek',
      score: 0
    }
  ]

  const mockedOnPlayerRemove = jest.fn()

  const playerComponent = shallow(<PlayersList players={players} onPlayerRemove={mockedOnPlayerRemove} />);

  const firstPlayer = playerComponent.find(Player).first();

  const onPlayerRemove = firstPlayer.prop('onPlayerRemove');

  onPlayerRemove();

  expect(mockedOnPlayerRemove).toBeCalledWith(0);
})

