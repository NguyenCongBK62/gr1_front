import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedJob: {},
};

const JobSlice = createSlice({
  name: "Job",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.selectedJob = action.payload;
    },
  },
});

export const { setJob } = JobSlice.actions;

const GetSelectedJob = (state) => {
  return state.job.selectedJob;
};

export { GetSelectedJob };

export default JobSlice.reducer;
