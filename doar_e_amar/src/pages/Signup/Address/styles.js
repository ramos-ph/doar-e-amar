import {StyleSheet} from 'react-native';

import {common} from '../../../styles';

export default StyleSheet.create({
  ...common,

  container: {
    ...common.container,
    paddingVertical: 0,
  },

  inputGroup: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },

  input: {
    ...common.input,
    marginBottom: 16,
  },

  actions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
