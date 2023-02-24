import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

const ContactList = ({contacts, onDeleteContact}) => {
    const elements = contacts.map(({id, name, number}) => {
        return <ContactListItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact}/>;
    })
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default ContactList;

ContactListItem.defaultProps = {
    contacts: [],
}

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}