import React from "react";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";

export const ContactList = ({contacts, onBtnClick}) => {
    
  return <ul className={css.list}>
    {contacts.map( ({ id, name, number})  => (  
      
      <li key={id} className={css.listItem}>
        <p className={css.contactName}>{name} : </p>
        <p className={css.contactNumber}>{number}</p>
      
        <button type="button" onClick={() => onBtnClick(id)} className={css.deleteBtn}>Delete</button>
      </li>
      )
    )}
    </ul>
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf (
    PropTypes.shape ({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onBtnClick: PropTypes.func.isRequired
};
