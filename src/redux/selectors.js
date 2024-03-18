import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

export const selectLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectRefreshing = state => state.auth.isRefreshing;

// export const getFilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilterValue(state);

//   if (contacts && filter) {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase().trim())
//     );
//   }
//   return contacts;
// };
