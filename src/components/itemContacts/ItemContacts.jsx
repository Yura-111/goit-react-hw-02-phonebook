import PropTypes from 'prop-types';

import { Items, Description, Buttons } from 'components/itemContacts/ItemContact.styled';

export const ItemContact = ({ id, name, number, onDelite }) => {
  return (
    <>
      <Items key={id}>
        <Description>
          {name} : {number}
        </Description>        
        <Buttons type="button" onClick={() => onDelite(id)}>
          Delite
        </Buttons>
      </Items>
    </>
  );
};

ItemContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelite: PropTypes.func.isRequired,
};
