import React, { createContext, useContext, useReducer } from 'react';

const initialState = {count: 0, message: ""};
const dispatch :any = () => {};
const StoreContext = createContext({state: initialState, dispatch });

type Action = {
    type: string;
    message: string;
}

type State = {
    count: number;
    message: string;
}

type Dispatch = (action: Action) => void;

const reducer = (state: State, action :Action) => {
  switch(action.type) {
    case "increment":
      return {
        count: state.count + 1,
        message: action.message
      }
    case "decrement":
      return {
        count: state.count - 1,
        message: action.message
      }
      case "reset":
        return {
          count: 0,
          message: action.message
        }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreProvider :React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);