import React, {useContext, useMemo, useEffect, useReducer} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import AuthContext from '../auth/context';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Stack = createStackNavigator();

function Routes() {
  const authContext = useContext(AuthContext);

  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
    }
  }, authContext);

  useEffect(() => {
    async function restoreToken() {
      let token;

      try {
        const storagedUser = await AsyncStorage.getItem('user');

        const {id} = JSON.parse(storagedUser);

        token = id;
      } catch (err) {
        token = null;
      }

      return dispatch({type: 'RESTORE_TOKEN', token});
    }

    restoreToken();
  }, []);

  const contextValue = useMemo(
    () => ({
      signIn: (token) => dispatch({type: 'SIGN_IN', token}),

      signOut: () => dispatch({type: 'SIGN_OUT'}),
    }),
    [],
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <Stack.Navigator>
        {state.isLoading ? (
          <Stack.Screen name="Loading" options={{headerShown: false}}>
            {() => <></>}
          </Stack.Screen>
        ) : state.userToken === null ? (
          <Stack.Screen
            name="App"
            component={AppRoutes}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthRoutes}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

export default Routes;
