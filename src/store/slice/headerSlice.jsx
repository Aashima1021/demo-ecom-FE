import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    // setIndividualKhataTab: (state, action) => {
   
    // },
  },
});

export const {
 
} = headerSlice.actions;

export default headerSlice.reducer;
