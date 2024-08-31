/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     contacts: {
//       items: [],
//       loading: false,
//       error: null,
//     },
//   },
//   // Додаємо обробку зовнішніх екшенів
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state, action) => {
//         state.contacts.loading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.loading = false;
//         state.contacts.error = null;
//         state.contacts.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       })
//       .addCase(addContact.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.contacts.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(deleteContact.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.contacts.items.findIndex(
//           (contact) => contact.id === action.payload.id
//         );
//         state.contacts.items.splice(index, 1);
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.contacts.items = [];
//         state.contacts.loading = false;
//         state.contacts.error = null;
//       });
//   },
// });

// export const contactReducer = contactsSlice.reducer;
const initialContacts = {
  items: [],
  loading: false,
  error: null,
  modalIsOpen: false,
  contactForModal: null,
  deleteModalIsOpen: false,
  selectedContactId: null,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      });
  },
});

export const contactReducer = contactsSlice.reducer;
