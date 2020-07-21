import {StyleSheet} from 'react-native';

import {common, fonts, colors} from '../../../styles';

export default StyleSheet.create({
  ...common,

  legend: {
    ...common.legend,
    color: '#000',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
  },

  button: {
    ...common.button,
    width: '40%',
  },
});
