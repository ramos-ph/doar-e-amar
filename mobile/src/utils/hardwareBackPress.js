import {BackHandler} from 'react-native';

export default function hardwareBackPress(page, navigation) {
  BackHandler.addEventListener('hardwareBackPress', async function() {
    navigation.navigate(page);

    return false;
  });
}
