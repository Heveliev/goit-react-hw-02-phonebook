import PropTypes from 'prop-types';

export const ContactItem = ({id,name,number}) => {
    
    return (<>
    <li id={id}><p>{name}: <span>{number}</span></p></li>
        </>
    )
}
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
}