import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';

const Stack = createStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
