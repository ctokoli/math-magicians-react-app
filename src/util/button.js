import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classN, onclick, input }) => (
  <button type="button" className={classN} onClick={onclick}>
    {input}
  </button>
);

Button.propTypes = {
  classN: PropTypes.string.isRequired,
  onclick: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
};

export default Button;
