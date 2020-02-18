import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';

import DashboardScreen from '../pages/Dashboard';
import DonateScreen from '../pages/Donate';
import UserDonationsScreen from '../pages/UserDonations';
import NotificationsScreen from '../pages/Notifications';
import ProfileScreen from '../pages/Profile';
import SettingsScreen from '../pages/Settings';
import HelpScreen from '../pages/Help';

import DrawerFooter from '../components/DrawerFooter';
import DrawerItem from '../components/DrawerItem';

const AppNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        drawerLabel: <DrawerItem icon="dashboard" label="Início" />,
      },
    },
    Donate: {
      screen: DonateScreen,
      navigationOptions: {
        drawerLabel: <DrawerItem icon="favorite" label="Nova Doação" />,
      },
    },
    Donations: {
      screen: UserDonationsScreen,
      navigationOptions: {
        drawerLabel: <DrawerItem icon="view-list" label="Minhas Doações" />,
      },
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        drawerLabel: <DrawerItem icon="notifications" label="Notificações" />,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        drawerLabel: <DrawerItem icon="account-circle" label="Perfil" />,
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        drawerLabel: (
          <DrawerItem icon="phonelink-setup" label="Configurações" />
        ),
      },
    },
    Help: {
      screen: HelpScreen,
      navigationOptions: {
        drawerLabel: <DrawerItem icon="help" label="Ajuda" />,
      },
    },
  },
  {
    initialRouteName: 'Dashboard',

    contentComponent: props => (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <DrawerItems {...props} />
        <DrawerFooter />
      </View>
    ),
  },
);

export default AppNavigator;
