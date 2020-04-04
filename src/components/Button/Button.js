import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title, disabled }) => {
  const btnClass = disabled ? styles.disabled : styles.active;

  return (
    <button type="submit" className={btnClass}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export default Button;
