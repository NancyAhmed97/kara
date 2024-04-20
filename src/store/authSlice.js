import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../services/axios";

const initialState = {
  isLoading: false,
  user: null,
  error: null
}

export const register = createAsyncThunk(
  "auth/registe",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.post(
        "/auth/register",
        args,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);



const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.error = null
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.error = "something went wrong"
      })
  }
});

export default authSlice.reducer;