import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from '../pages/Main';

const Tab = createBottomTabNavigator();

function AuthRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{activeTintColor: '#3498db'}}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Início',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AuthRoutes;
