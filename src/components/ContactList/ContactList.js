import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contacts/Contacts';


const ContactList = ({items, onDeleteContact}) =>
items.length > 0 && (
    <ul>
 {items.map(item=><li key={item.id}> 
 <Contact {...item} onDeleteContact={
     ()=> onDeleteContact(item.id)}
  />     
   </li>)}
    </ul>
);


ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired        
        }).isRequired,
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}       


export default ContactList;