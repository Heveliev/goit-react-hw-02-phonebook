
import React from 'react';
export const InputBox = ({value,onChange}) =>{
    return(
        <div>
            <h3>Name</h3>
            <input
            value={value.name}
            onChange={onChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian,
             Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" 
             required></input>
             <h3>Number</h3>
            <input
            value={value.number}
            onChange={onChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required></input>
        <button type="submit">Add contact</button>
        </div>
    )
}