import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66ba7440fa763ff550fbd213.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contact/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contact");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContacts",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post("/contact", body);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contact/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
