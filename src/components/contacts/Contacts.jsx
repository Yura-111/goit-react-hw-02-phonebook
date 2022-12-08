import PropTypes from 'prop-types';
import { ItemContact } from 'components/itemContacts/ItemContacts';

export const Contacts = ({ contacts, onDelite }) => {
  return (
    <ul>
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
    </ul>
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
