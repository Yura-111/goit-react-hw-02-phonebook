import PropTypes from 'prop-types';
import { ItemContact } from 'components/itemContacts/ItemContacts';
import {List} from 'components/contacts/Contacts.styled'

export const Contacts = ({ contacts, onDelite }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ItemContact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelite={onDelite}
          />
        );
      })}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelite: PropTypes.func.isRequired,
};
