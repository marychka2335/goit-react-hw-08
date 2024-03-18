import css from './ContactsList.module.css';
import { deleteContact, fetchAllContacts } from './../../redux/fetchContacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from './../../redux/selectors';
import { useEffect } from 'react';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function ContactsList() {
  const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAllContacts())
    }, [dispatch])

  return (
    <>
      <ul className={css.contacts}>
        {filteredContacts.map(contact => {
          // contactItem.split(/\s+/).map(word[0].toUpperCase() + word.substring(1).join(' '));
          return (
            <li className={css.contactItem} key={contact.id} id={contact.id}>
              <div>
                <span className={css.contactName}>{contact.name}:</span>
                <span className={css.contactNumber}>{contact.phone}</span>
              </div>

              <button
                className={css.buttonDelete}
                onClick={() => {
                  Confirm.show(
                    'Delete contact',
                    'Are you sure you want to delete this contact?',
                    'Yes',
                    'No',
                    () => {
                      dispatch(deleteContact(contact.id));
                      Notify.failure(`Contact deleted`);
                    },
                    () => {
                      return;
                    },
                    {
                      titleColor: '#4f46e5',
                      okButtonBackground: '#4f46e5',
                    }
                  );
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <p className={css.totalContacts} key={ContactsList.length}>
        Total contacts {filteredContacts.length}
      </p>
    </>
  );
}
