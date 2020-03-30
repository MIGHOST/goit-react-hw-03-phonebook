import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';


const Contacts = ({name, number, onDeleteContact}) => (
    <div className={styles.container}>  
<p className={styles.text}>{name}: {number}</p>
<button type="button" onClick={onDeleteContact} className={styles.btn}>Delete</button>
</div>
)

Contacts.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default Contacts;