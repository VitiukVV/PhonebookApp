import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactElement, DeleteBtn } from './ContactElem.style';
import { deleteContact } from 'redux/operations';

export const ContactElem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <ContactElement>
      <p>
        {name}: {phone}
      </p>
      <DeleteBtn onClick={() => dispatch(deleteContact(id))}>Delete</DeleteBtn>
    </ContactElement>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
