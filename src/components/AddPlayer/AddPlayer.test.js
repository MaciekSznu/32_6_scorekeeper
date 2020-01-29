import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPlayer from './AddPlayer';

it('renders without crashing', () => {
  shallow(<AddPlayer />);
});

it('add name and send form', () => {
  // mock
  const onPlayerAdd = jest.fn();
  // run ock in AddPlayer component
  const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
  // find() let us get to first() input, getDOMNode let us get into real input, it works only in mount mode
  const nameInput = addPlayerComponent.find('input').first().getDOMNode();
  // assing vale to nameInput.value
  nameInput.value = 'Ania';

  const form = addPlayerComponent.find('form');
  // submit simulation
  form.simulate('submit');

  expect(onPlayerAdd).toBeCalledWith('Ania');
});