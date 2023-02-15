import React from 'react';
import { Section } from './Section/Section';
import {InputBox} from './InputBox/InputBox';
import {ContactList} from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import {SearchContact} from './SearchContact/SearchContact';



class App extends React.Component{
  state = {
    contacts: [    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  formSubmitHandler = data =>{
    data.id = nanoid();
    this.setState(({contacts})=>{
      return {contacts: [data,...contacts]}
    })
  }

searchHandle = evt =>{
  const evtTarget = evt.currentTarget.value;
 this.setState({filter: evtTarget})
 
}

  render(){
    const list = this.state.contacts.length;
    return (<>
    <Section title='Phonebook' >
      <InputBox onSubmit={this.formSubmitHandler}/>
    </Section>
      <Section title='Contacts' >
      <SearchContact value={this.state.filter} onChange={this.searchHandle}/>
        {list ? <ContactList values={this.state.contacts}/> : ''}
      </Section>
      </>
        );
  }

};


export {App}