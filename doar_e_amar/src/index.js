import 'react-native-gesture-handler';
import React from 'react';
import {YellowBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket', 'Failed child context']);

function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
