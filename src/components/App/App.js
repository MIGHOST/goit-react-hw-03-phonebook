import React, { Component, Fragment } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import shortid from 'shortid';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import filterContact from '../helpers/filterContact';
import findContact from '../helpers/findContact';


export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts) {
      this.setState({ contacts: JSON.parse(saveContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = contact => {
    const { contacts } = this.state;
    const id = shortid.generate();
    const savingContact = {
      id,
      ...contact,
    };
    const oldContacts = this.state.contacts;
    const foundContact = findContact(contacts, contact);

    if (foundContact) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    if (contact.name.length > 1 && contact.number.length > 1) {
      this.setState(state => ({ contacts: [...oldContacts, savingContact] }));
    } else if (contact.name.length <= 1) {
      alert('Contact name is too small!');
    } else if (contact.number.length <= 1) {
      alert('Contact number is too small!');
    }
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContact(contacts, filter);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onHandleSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChangeFilter={this.changeFilter} />
        {contacts.length >= 2 && (
          <ContactList
            items={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </>
    );
  }
}
