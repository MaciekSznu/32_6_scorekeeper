import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const playerScorePassed = 5;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = Number(playerComponent.find('.Player__score').text());

  expect(playerScoreRendered).toEqual(playerScorePassed);
});
