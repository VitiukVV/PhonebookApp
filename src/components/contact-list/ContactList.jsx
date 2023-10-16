import { ContactElem } from 'components/contact-elem/ContactElem';
import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/selectors';
import { ContactListStyle } from './ContactList.style';

export const ContactList = () => {
  const contacts = useSelector(selectFiltredContacts);

  return (
    <ContactListStyle>
      {contacts.map(({ id, name, phone }) => (
        <ContactElem key={id} id={id} name={name} phone={phone}></ContactElem>
      ))}
    </ContactListStyle>
  );
};
