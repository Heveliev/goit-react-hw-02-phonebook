import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'components/Input/Input';
import { Box,Btn } from './InputBox.styled';


const data = [{
    titleBox: "Name",
    type:"text",
    name: "name",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan", },
    {
    titleBox: "Number",
    type:"tel",
    name:"number",
    // pattern:"\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{2}",
    title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",}];

   const INITIAL_STATE = {
        name: '',
        number: '',
      }


class InputBox extends React.Component{ 
    
    state = {...INITIAL_STATE}

      handleInputChange = evt => {
        let target = evt.currentTarget;
        this.setState({[target.name]:target.value})
        
      };



      
      handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit({...this.state});
        this.reset();
      };
    reset = () => {
        this.setState({ ...INITIAL_STATE });
      };
    
    render(){
        return(
            <Box  onSubmit={this.handleSubmit}>
            {data.map(d=>(<Input 
            key={d.name}
            onChange={this.handleInputChange}
            value={this.state[d.name]}   
            type={d.type}
            name={d.name}
            pattern={d.pattern}
            title={d.title}
            titleBox={d.titleBox} 
            />))}
            <Btn type="submit">Add contact</Btn>
            </Box>
        )
    }
    
}
export {InputBox}

InputBox.propType ={
value:PropTypes.string.isRequired ,
onChange: PropTypes.func.isRequired
}