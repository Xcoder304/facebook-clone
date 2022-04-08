import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

const Context = ({ reducer, initailstate, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initailstate)}>
      {children}
    </StateContext.Provider>
  );
};

export const ContextVal = () => useContext(StateContext);

export default Context;
