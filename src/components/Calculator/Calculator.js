import React, { Component } from 'react';
import styles from './styles.css'

import Button from '../Button/Button';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      history: [],
      total: null
    }
    this.handleOpteration = this.handleOpteration.bind(this);
  }

  renderButtons() {
    const operations = ['AC','sqRoot','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];
    return operations.map(operation => {
      return <Button key={operation} onClick={this.handleOpteration} operation={operation} />
    })
  }

  handleOpteration(e) {
    const operation = e.target.innerHTML;
    console.log(operation);
  }

  render() {
    return (
      <figure className="calculator">
        {this.renderButtons()}
      </figure>
    );
  }


}

export default Calculator;