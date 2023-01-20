import React from 'react';
import PropTypes from 'prop-types';

const CalcBtnsPad = ({ children }) => (
  <div className="btnsPad">
    {children}
  </div>
);

CalcBtnsPad.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcBtnsPad;
