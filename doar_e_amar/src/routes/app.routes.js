import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Start from '../pages/Start';
import Signin from '../pages/Signin';

import {
  Credentials,
  PersonalData,
  Address,
  Contact,
} from '../pages/CommonUserSignup';

const Stack = createStackNavigator();

function AppRoutes() {
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
        name="Credentials"
        component={Credentials}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalData"
        component={PersonalData}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
