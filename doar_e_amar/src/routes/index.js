import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Start from '../pages/Start';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import {Credentials, PersonalData, Address} from '../pages/CommonUserSignup';

function Routes() {
  return (
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
        name="CommonCredentials"
        component={Credentials}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CommonPersonalData"
        component={PersonalData}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CommonAddress"
        component={Address}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Routes;
