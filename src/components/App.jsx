import React from 'react';
import { Section } from './Section/Section';
import {InputBox} from './InputBox/InputBox'



class App extends React.Component{
  state = {
    contacts: [],
    name: '',
    number: ''
  }


  handleInputChange = evt => {
    let target = evt.currentTarget;
    this.setState({[target.name]:target.value.trim()})
  }


  render(){
    return (<>
    <Section title='Phonebook' >
      <InputBox       
            value={this.state}
            onChange={this.handleInputChange}/>
    </Section>
      <Section title='Contacts' >
        
      </Section>
      </>
        );
  }

};


export {App}