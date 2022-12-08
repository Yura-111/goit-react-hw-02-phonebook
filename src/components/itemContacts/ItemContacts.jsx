import PropTypes from 'prop-types';

import { Buttons } from 'components/itemContacts/ItemContact.styled';

export const ItemContact = ({ id, name, number, onDelite }) => {
  return (
    <>
      <li>
        {name} : {number}
        <Buttons type="button" onClick={() => onDelite(id)}>
          Delite
        </Buttons>
      </li>
    </>
  );
};

ItemContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelite: PropTypes.func.isRequired,
};
