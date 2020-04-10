import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';

export default class ContactForm extends Component {
  static propTypes = {
    onHandleSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onHandleSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    let disabled;
    name.length >= 1 && number.length >= 1
      ? (disabled = false)
      : (disabled = true);

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.id} className={styles.label}>
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleNameChange}
            id={this.id}
            className={styles.input}
          />
        </label>
        <label htmlFor={this.id} className={styles.label}>
          Number
          <input
            type="text"
            value={number}
            name="number"
            onChange={this.handleNameChange}
            id={this.id}
            className={styles.input}
          />
        </label>
        <Button title="Add contact" disabled={disabled} />
      </form>
    );
  }
}
