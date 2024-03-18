import { useState } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import css from './PhonebookForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './../../redux/selectors';
import { ButtonForm, Form, Input, Label } from './PhonebookForm.styled';


export function PhonebookForm() {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
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
    dispatch(addContact({ id: nanoid(6), name, number }));
    setName('');
    setPhone('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        return;
    }
  };

 return (
      <Form onSubmit={handleSubmit}>
      <Label >
        Name
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label >
        Phone
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <ButtonForm variant="contained" type='submit' style={{ backgroundColor: 'rgb(124, 54, 54)', display: 'block', padding: '5px 25px', margin: '20px auto'}}>Add contact</ButtonForm>
    </Form>
  );

  // return (
  //   <form className={css.formContact} onSubmit={handleSubmit}>
  //     <label className={css.labelContact}>Name </label>
  //     <input
  //       onChange={handleChange}
  //       className={css.inputContact}
  //       type="text"
  //       name="name"
  //       value={name}
  //       pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
  //       required
  //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //       placeholder="Type contact name..."
  //     />
  //     <label className={css.labelContact}>Phone </label>
  //     <input
  //       className={css.inputContact}
  //       onChange={handleChange}
  //       type="tel"
  //       name="phone"
  //       value={phone}
  //       pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  //       required
  //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //       placeholder="Type contact phone..."
  //     />
  //     <button className={css.button}>Add contact</button>
  //   </form>
  // );
}
