import {createSwitchNavigator ,createAppContainer} from 'react-navigation';

import AppNavigator from './navigators/app-navigator';
import AuthNavigator from './navigators/auth-navigator';
import MapNavigator from './navigators/map-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator,
    Map: MapNavigator
  },
  {
    initialRouteName: 'Auth'
  }
)

export default createAppContainer(RootNavigator);
