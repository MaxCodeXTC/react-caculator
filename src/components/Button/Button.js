import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.operation}
    </button>
  )
}

export default Button;
