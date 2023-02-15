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
    console.log(target.name)
    this.setState(prevState=>{console.log([target.name]) 
    return {[target.name]: prevState[target.value] }}

    )
    
    // this.setState({})
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