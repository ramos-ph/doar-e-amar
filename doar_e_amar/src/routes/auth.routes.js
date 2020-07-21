import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Donations from '../pages/Donations';
import Profile from '../pages/Profile';
import Receive from '../pages/Receive';
import Details from '../pages/Details';
import * as New from '../pages/New';
import * as Monetary from '../pages/Monetary';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NewOfferRoutes() {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={New.Categories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Donation"
        component={New.Donation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MonetaryDonationsRoutes() {
  return (
    <Stack.Navigator initialRouteName="Ngos">
      <Stack.Screen
        name="Ngos"
        component={Monetary.Ngos}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transfer"
        component={Monetary.Transfer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function DonationsRoutes() {
  return (
    <Stack.Navigator initialRouteName="Donations">
      <Stack.Screen
        name="Donations"
        component={Donations}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'Detalhes da doação'}}
      />
    </Stack.Navigator>
  );
}

function AuthRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Donations"
      tabBarOptions={{activeTintColor: '#3498db'}}>
      <Tab.Screen
        name="Donations"
        component={DonationsRoutes}
        options={{
          title: 'Doações',
          tabBarIcon: ({color, size}) => (
            <Icon name="th-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Donate"
        component={NewOfferRoutes}
        options={{
          title: 'Doar',
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={MonetaryDonationsRoutes}
        options={{
          title: 'Transferir',
          tabBarIcon: ({color, size}) => (
            <Icon name="money" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Receive"
        component={Receive}
        options={{
          title: 'Receber',
          tabBarIcon: ({color, size}) => (
            <Icon name="qrcode" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({color, size}) => (
            <Icon name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AuthRoutes;
