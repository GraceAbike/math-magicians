import React from 'react';
import PropTypes from 'prop-types';

class CalcBtn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
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

  render() {
    const { value } = this.state;
    return (
      <button type="button" className={`${CalcBtn.getClassName(value)} button`}>
        {value}
      </button>
    );
  }
}

CalcBtn.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalcBtn;
