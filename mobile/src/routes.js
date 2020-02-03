import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import DrawerFooter from './components/DrawerFooter';
import DrawerItem from './components/DrawerItem';

import StartScreen from './pages/Start';
import LoginScreen from './pages/Login';
import SignupScreen from './pages/Signup';
import FirstAccessScreen from './pages/FirstAccess';

// Itens do Drawer
import DashboardScreen from './pages/Dashboard';
import DonateScreen from './pages/Donate';
import UserDonationsScreen from './pages/UserDonations';
import NotificationsScreen from './pages/Notifications';
import ProfileScreen from './pages/Profile';
import SettingsScreen from './pages/Settings';
import HelpScreen from './pages/Help';

// Outros
import MapScreen from './pages/Map';
import NewScreen from './pages/New';

const DrawerNavigator = createDrawerNavigator(
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
      <View style={styles.drawer}>
        <DrawerItems {...props} />
        <DrawerFooter />
      </View>
    ),
  },
);

const StackNavigator = createStackNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Encontrar ONGs'
    }
  }
});

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default createAppContainer(
  createSwitchNavigator({
    Start: {
      screen: StartScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    FirstAccess: {
      screen: FirstAccessScreen,
    },
    Dashboard: DrawerNavigator,
    Maps: StackNavigator,
    New: {
      screen: NewScreen
    }
  }),
);
