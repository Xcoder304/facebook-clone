const initailstate = {
  user: null,
  FileType: null,
  OpenSideBar: false,
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
    case "CHANGE__FILE__TYPE":
      return {
        ...state,
        FileType: action.FileType,
      };
    case "OPEN__THE__SIDEBAR":
      return {
        ...state,
        OpenSideBar: action.OpenSideBar,
      };
    default:
      return state;
  }
};

export { initailstate, reducer };
