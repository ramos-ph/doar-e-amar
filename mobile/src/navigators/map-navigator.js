import {createStackNavigator} from 'react-navigation-stack';

import MapScreen from '../pages/Map';

const StackNavigator = createStackNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Encontrar ONGs',
    },
  },
});

export default StackNavigator;
