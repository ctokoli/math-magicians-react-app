import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classN, onclick, text }) => (
  <button type="button" className={classN} onClick={onclick}>
    {text}
  </button>
);

Button.propTypes = {
  classN: PropTypes.string.isRequired,
  onclick: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
