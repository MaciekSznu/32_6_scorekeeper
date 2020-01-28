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

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  // mockowanie - zasymulowanie wykonania callbacka przekazanego w props, tutaj używamy jest.fn()
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  // symulowanie kliknięcia w button
  const plusButton = playerComponent.find('.Player__button').first();

  plusButton.simulate('click');

  // expect(mockedOnPlayerScoreChange).toBeCalled();
  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);

});

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
  // mockowanie - zasymulowanie wykonania callbacka przekazanego w props, tutaj używamy jest.fn()
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  // symulowanie kliknięcia w button; at() nnumeracja od 0 jak w tablicach
  const plusButton = playerComponent.find('.Player__button').at(1);

  plusButton.simulate('click');

  // expect(mockedOnPlayerScoreChange).toBeCalled();
  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);

});

