import React from 'react';
import PropTypes from 'prop-types';

const CalcLogic = ({ children }) => (
  <div className="calcLogic">
    {children}
  </div>
);

CalcLogic.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcLogic;
