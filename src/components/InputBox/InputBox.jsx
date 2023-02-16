import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'components/Input/Input';
import { Box,Btn } from './InputBox.styled';
import data from '../../data/data.json';

    // pattern:"\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"

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



InputBox.popTypes ={
  onSubmit:PropTypes.func.isRequired
}