import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Container } from './app.style';
import { ContactList } from './contact-list/ContactList';
import Filter from './filter/Filter';
import ContactForm from './form/ContactForm';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};
