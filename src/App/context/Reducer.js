const initailstate = {
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET__USER__WITH__EMAILPASSWORD":
      return {
        ...state,
        user: action.user,
      };
    case "LOGIN__THE__USER__WITH__GOOGLE":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export { initailstate, reducer };
