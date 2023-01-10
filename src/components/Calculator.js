import React from 'react';
import CalcLogic from './CalcLogic';
import CalcScreen from './CalcScreen';
import CalcBtnsPad from './CalcBtnsPad';
import CalcBtn from './CalcBtn';
/* eslint-disable react/no-array-index-key */
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.btnValues = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
  }

  render() {
    return (
      <CalcLogic>
        <CalcScreen value="0" />
        <CalcBtnsPad>
          {this.btnValues.flat().map((row, index) => (
            <CalcBtn key={index} value={row} />
          ))}
        </CalcBtnsPad>
      </CalcLogic>
    );
  }
}

export default Calculator;
