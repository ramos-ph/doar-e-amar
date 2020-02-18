import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import AppNavigator from './navigators/app-navigator';
import AuthNavigator from './navigators/auth-navigator';
import OfferNavigator from './navigators/offer-navigator';
import MapNavigator from './navigators/map-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator,
    Map: MapNavigator,
    New: OfferNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNavigator);
