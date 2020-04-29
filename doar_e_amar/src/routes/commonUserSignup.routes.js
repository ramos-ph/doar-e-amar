import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Credentials, PersonalData, Address} from '../pages/CommonUserSignup';

function CommonUserSignupRoutes() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}

export default CommonUserSignupRoutes;
