import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  label,
  onclick
}) => (
  <button onClick={onclick}>{label}</button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
}

export default Button;
