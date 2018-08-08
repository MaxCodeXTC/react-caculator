import React from 'react';
import styles from './styles.css';

const Button = (props) => {
  if(props.operation !== '0') {
    return (
      <button onClick={props.onClick}>
        {props.operation}
      </button>
    )
  }
  return (
    <button className="zero" onClick={props.onClick}>
      {props.operation}
    </button>
  )
}

export default Button;
