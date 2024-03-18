import css from './App.module.css';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <div className={css.wrappercover}>
      <div className={css.wrapper}>
        <h1 className={css.titleForm}>Phonebook</h1>
        <PhonebookForm />
      </div>
      <div className={css.wrapperbook}>
        <h2 className={css.titleContacts}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
}
