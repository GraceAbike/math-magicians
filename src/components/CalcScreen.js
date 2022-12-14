import React from 'react';
import { Textfit } from 'react-textfit';
import { CalcContext } from '../context/CalcContext';

class CalcScreen extends React.PureComponent {
  render() {
    const { calc } = this.context;
    return (
      <Textfit className="calcScreen" max={50} mode="single">
        {calc.total}
        {' '}
        {calc.operation}
        {' '}
        {calc.next}
      </Textfit>
    );
  }
}

CalcScreen.contextType = CalcContext;

export default CalcScreen;
