const initialState = {
  selectedJob: {
    id: 1,
    companyName: "FPT",
    companyDes:
      "Rocket your career at Gameloft, a world leading mobile game developer and publisher!",
    companyAreas: "Product",
    workTime: "Monday-Friday",
    otTime: "No OT",
    companyCountry: "Vietnam",
    numberOfEmployees: "150",
    imageLink:
      "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXduREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cbd3cde99194724073465f2d7fe4368ccea6db4c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e48ed52d99e56a5ff9747052d860ea1b318b2d76/gameloft-logo.jpg",
    jobName: "Full-Stack Developer (NodeJS/Python)",
    salary: "You'll love it",
    place: "Da Nang",
    skill: ["NodeJS", "English"],
    descrip: ["Competitive salary & benefits", "13th month salary"],
  },
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_JOB": {
      return { ...state, selectedJob: action.payload };
    }
    default:
      return state;
  }
};

export default jobReducer;
