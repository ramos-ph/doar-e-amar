import React, {useContext, useMemo, useEffect, useReducer} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import AuthContext from '../auth/context';

import Start from '../pages/Start';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import CommonUserSignupRoutes from './commonUserSignup.routes';
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
        console.log(err);
      }

      return dispatch({action: 'RESTORE_TOKEN', token});
    }

    restoreToken();
  }, []);

  const contextValue = useMemo(
    () => ({
      signIn: (token) => dispatch({action: 'SIGN_IN', token}),

      signOut: () => dispatch({action: 'SIGN_OUT'}),
    }),
    [],
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CommonUserSignup"
          component={CommonUserSignupRoutes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

export default Routes;
