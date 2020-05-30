import {StyleSheet} from 'react-native';

import {common} from '../../../styles';

export default StyleSheet.create({
  ...common,

  container: {
    ...common.container,
    paddingVertical: 0,
  },

  input: {
    ...common.input,
    marginBottom: 16,
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
