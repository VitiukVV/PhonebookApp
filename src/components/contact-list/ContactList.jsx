import { ContactElem } from 'components/contact-elem/ContactElem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactListStyle } from './ContactList.style';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filtredContact = useSelector(getFilter);

  const normalizeFilter = filtredContact.toLowerCase();
  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <ContactListStyle>
      {filtredContacts.map(({ id, name, number }) => (
        <ContactElem key={id} id={id} name={name} number={number}></ContactElem>
      ))}
    </ContactListStyle>
  );
};
