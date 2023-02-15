import { ContactItem } from "components/ContactItem/ContactItem";


export const ContactList = ({values}) => {
return(
    <>
    <ul>
        {values.map(value=><ContactItem 
        key={value.id} 
        id={value.id} 
        name={value.name} 
        number={value.number}/>)}
        
    </ul>
    </>
)
}