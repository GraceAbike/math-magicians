import React from 'react';
import PropTypes from 'prop-types';

class CalcLogic extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="calcLogic">
        {children}
      </div>
    );
  }
}

CalcLogic.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalcLogic;
