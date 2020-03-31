import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const ContactFilter = ({ value, onChangeFilter }) => (
  <label className={styles.label}>   
    Find contact by name
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChangeFilter}
    />
  </label>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
