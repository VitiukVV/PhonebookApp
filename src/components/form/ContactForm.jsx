import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { ButtonSubmit, Form, Input } from './ContactForm.style';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    const normalizeName = name.toLowerCase();

    const usedName = contacts.some(
      contact => contact.name.toLowerCase() === normalizeName
    );
    if (usedName) {
      return alert(`${name} is already in contacts!`);
    }
    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
};

export default ContactForm;
