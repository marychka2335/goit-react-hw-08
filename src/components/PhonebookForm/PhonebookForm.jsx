import { useState } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import css from './PhonebookForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from './../../redux/fetchContacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './../../redux/selectors';

export function PhonebookForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      iziToast.warning({
        title: 'Caution',
        message: `${name} is already in contacts`,
        timeout: 5000,
        position: 'topLeft',
      });
      return;
    }
    dispatch(addContact({ id: nanoid(6), name, phone }));
    setName('');
    setPhone('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={css.formContact} onSubmit={handleSubmit}>
      <label className={css.labelContact}>Name </label>
      <input
        onChange={handleChange}
        className={css.inputContact}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
        required
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Type contact name..."
      />
      <label className={css.labelContact}>Phone </label>
      <input
        className={css.inputContact}
        onChange={handleChange}
        type="tel"
        name="phone"
        value={phone}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Type contact phone..."
      />
      <button className={css.button}>Add contact</button>
    </form>
  );
}
