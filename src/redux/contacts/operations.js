import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectIsLoggedIn } from "../auth/selectors";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const isLogin = selectIsLoggedIn(state);

      if (!isLogin) {
        return thunkAPI.rejectWithValue("You are not logged in");
      }

      const response = await axios.get("/contacts");

      return response.data;
    } catch (e) {
      console.log("err");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", body);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
