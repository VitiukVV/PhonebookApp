import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactElement, DeleteBtn } from './ContactElem.style';

export const ContactElem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactElement>
      <p>
        {name}: {number}
      </p>
      <DeleteBtn onClick={() => dispatch(deleteContact(id))}>Delete</DeleteBtn>
    </ContactElement>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
