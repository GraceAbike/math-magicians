import React from 'react';
import PropTypes from 'prop-types';

class CalcBtnsPad extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="btnsPad">
        {children}
      </div>
    );
  }
}

CalcBtnsPad.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcBtnsPad;
