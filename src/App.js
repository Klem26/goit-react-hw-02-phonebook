import React, { Component } from "react";
import ContactForm from "./componets/ContactF";
import ContactList from "./componets/ContactList";
import Filter from "./componets/Filter";

import { v4 as uid } from "uuid";
import contacts from "./componets/ContactList/contacts.json";

class App extends Component {
  state = {
    contacts: contacts,
    filter: "",
  };

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;

    if (contacts.some((contact) => contact.name === name)) {
      alert(
        `${name} is already in contacts. Want to replace an existing contact ?`
      );
      return;
    }
    const id = uid();
    this.setState({
      contacts: [{ name, number, id }, ...contacts],
      filter: "",
    });

    console.log({ name, number });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  onChangeFilter = (event) => {
    // const filterValue = event.currentTarget.value;
    // this.setState({ filter: filterValue });
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const filterUser = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={filterUser}
          onDeleteContacts={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
