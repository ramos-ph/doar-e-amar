import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Start from './pages/Start';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

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
    </Stack.Navigator>
  );
}

export default Routes;
