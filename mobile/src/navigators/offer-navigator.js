import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import NewScreen from '../pages/New';

const options = {
  initialRouteName: 'New'
}

const AuthNavigator = createSwitchNavigator(
  {
    New: NewScreen
  }
)

export default createAppContainer(AuthNavigator, options);
