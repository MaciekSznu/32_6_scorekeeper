import React from 'react';
import './AddPlayer.css';

const AddPlayer = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
    // onPlayerAdd - callback sending text to App component
    props.onPlayerAdd(input.value);
    // this line clear input after adding player
    input.value = '';
  }

  // ref simple function that we can assign any DOM element or component, the parameter is current element,  in this case it let us read input value
  // node parameter is input element where we save input varialbe
  let input;

  return (
    <form className="AddPlayer" onSubmit={onSubmit}>
      <input type="text" className="AddPlayer__input" ref={(node) => input = node} />
      <input type="submit" className="AddPlayer__submit" value="Add" />
    </form>
  )
};

export default AddPlayer;
