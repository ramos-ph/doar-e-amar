import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from '../pages/Main';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

function AuthRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{activeTintColor: '#3498db'}}>
      <Tab.Screen
        name="Donations"
        component={Main}
        options={{
          title: 'Doações',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Donate"
        component={Main}
        options={{
          title: 'Nova doação',
          tabBarIcon: ({color, size}) => (
            <Icon name="favorite" size={size} color={color} />
          ),
        }}
      />
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
      <Tab.Screen
        name="Search"
        component={Main}
        options={{
          title: 'Buscar',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AuthRoutes;
