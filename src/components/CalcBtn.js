import React from 'react';
import PropTypes from 'prop-types';
import { CalcContext } from '../context/CalcContext';
import calculate from '../logic/calculate';

class CalcBtn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static getClassName(value) {
    const classNames = {
      AC: 'ac',
      '+/-': 'plusMinus',
      '%': 'mod',
      '÷': 'opt',
      x: 'opt',
      '-': 'opt',
      '+': 'opt',
      '=': 'equal',
      0: 'zero',
      '.': 'dot',
    };
    return classNames[value] || 'num';
  }

  handleClick() {
    const { calc, setCalc } = this.context;
    const { value } = this.state;
    const calcResult = calculate(calc, value);

    setCalc(calcResult);
  }

  render() {
    const { value } = this.state;
    return (
      <button onClick={this.handleClick} type="button" className={`${CalcBtn.getClassName(value)} button`}>
        {value}
      </button>
    );
  }
}

CalcBtn.contextType = CalcContext;

CalcBtn.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalcBtn;
