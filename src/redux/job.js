export const selectJob = (job) => {
  return {
    type: "SELECT_JOB",
    payload: job,
  };
};
