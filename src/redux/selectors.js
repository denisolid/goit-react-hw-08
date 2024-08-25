import { createSelector } from "@reduxjs/toolkit";

export const filteredContact = (state) => state.filter.filter;

export const selectContacts = (state) => state.contact.contacts.items;

export const selectIsLoading = (state) => state.contact.contacts.loading;

export const selectError = (state) => state.contact.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, filteredContact],
  (contacts, filtered) => {
    const searchContact = contacts.filter((cont) =>
      cont.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return searchContact;
  }
);
