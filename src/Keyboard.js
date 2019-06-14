import React from 'react';
import _ from "lodash";
import './Keyboard.css';

function Keyboard(props) {
  const nums = "0123456789".split("");
  const signs = "+−×÷_".split("");
  const makeKey = (char, i) => <Key key={i} char={char} keyPress={props.keyPress} />
  return (
    <div className="Keyboard p-3 bg-light">
      <div>{nums.map(makeKey)}</div>
      <div>{signs.map(makeKey)}</div>
    </div>
  )
}

function Key(props) {
  const click = ()=> { props.keyPress(props.char); }
  return (
    <button type="button"
      className="Key btn btn-secondary mr-2"
      onClick={click}>
      {props.char}
    </button>
  )
}

export default Keyboard;
