import { createContext, useContext, useReducer } from 'react';
import {attributeReducer, attributeInitialState} from './attributes/attribute.reducer';
import {userReducer, userInitialState} from './users/user.reducer';

const StoreContext = createContext();

export const StoreProvider = ({children}) => {
  const [attributeState, attributeDispatcher] = useReducer(attributeReducer, attributeInitialState);
  const [userState, userDispatcher] = useReducer(userReducer, userInitialState);
  return (
    <StoreContext.Provider value={{
      attributeState, attributeDispatcher,
      userState, userDispatcher
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export function useStore() {
  return useContext(StoreContext);
}