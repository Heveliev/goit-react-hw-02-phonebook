import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'components/Input/Input';
import { Box,Btn } from './InputBox.styled';


const data = [{
    titleBox: "Name",
    type:"text",
    name: "name",
    pattern: "pattern=^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan", },
    {
    titleBox: "Number",
    type:"tel",
    name:"number",
    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}",
    title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",}];





export const InputBox = ({value,onChange}) =>{
    
    return(
        <Box>
        {data.map(d=>(<Input 
        key={d.name}
        onChange={onChange}
        value={value[d.name]}   
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

InputBox.propType ={
value:PropTypes.string.isRequired ,
onChange: PropTypes.func.isRequired
}