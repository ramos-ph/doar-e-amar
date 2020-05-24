import {createContext} from 'react';

export default createContext({
  isLoading: true,
  isSignout: false,
  userToken: null,
});
