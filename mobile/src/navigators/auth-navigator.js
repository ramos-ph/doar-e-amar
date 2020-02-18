import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import StartScreen from '../pages/Start';
import LoginScreen from '../pages/Login';
import SignupScreen from '../pages/Signup';
import FirstAccessScreen from '../pages/FirstAccess';

const options = {
  initialRouteName: 'Start',
};

const AuthNavigator = createSwitchNavigator({
  Start: StartScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
  FirstAccess: FirstAccessScreen,
});

export default createAppContainer(AuthNavigator, options);
