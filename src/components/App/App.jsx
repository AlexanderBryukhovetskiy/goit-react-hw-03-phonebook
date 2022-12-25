import React, { Component }  from "react";
import css from "./App.module.css";
import { ContactForm } from "../ContactForm/ContactForm";
import Container from "../Container/Container";
import { ContactList } from "../ContactList/ContactList";
import {Filter} from "../Filter/Filter";

const LS_KEY = "saved_contacts";

export class App extends Component {
  state = {
    contacts: '',
    // [
    //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    // ],
    filter: '',
  }

  componentDidMount () {
      console.log("this.state before checking localStorage:", this.state);

    const savedContacts = localStorage.getItem(LS_KEY);

      console.log("Checking: savedContacts in localStorage: ", savedContacts);

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
        console.log("App.state.contacts is loaded  from  localStorage")
        console.log(this.state.contacts);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length){
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => { 
    const contacts = this.state.contacts;
    const isUnique = contacts.filter( contactInBook => 
      contactInBook.name.toLowerCase() === newContact.name.toLowerCase());
    
    if (isUnique.length > 0) {
      return alert (`${newContact.name} is already in contacts.`);
    }
    else {
      this.setState(  (prevState) => {
        return ({contacts: [...prevState.contacts, newContact] })
      })
      //console.log('newContact added to phonebook');
    }
  }

  deleteContact = id => { 
    this.setState(  prevState => ({
      contacts: prevState.contacts.filter( contact => contact.id !== id)
    }))
  }

  render () {
    const {contacts, filter} = this.state;
    return (  
    <Container>
      <div className={css.phoneBookContainer}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm 
        onSubmit={this.addContact}/>
      </div>

      <h2 className={css.title}>Contacts</h2> 

      <Filter 
      valueFilter={filter} 
      onChangeFilter={this.onHandleFilter}/>  
        
      { contacts.length > 0 && 
      (<ContactList contacts={this.searchName()} onBtnClick={this.deleteContact}/>)}  

    </Container>
  
    )
  }
};

export default App;