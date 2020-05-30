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
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 84,
    left: 15,
    right: 15,
  },

  button: {
    ...common.button,
    width: '40%',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    height: 64,
  },

  footerText: {
    color: '#19191a',
    fontSize: 16,
    fontWeight: '700',
  },

  action: {
    color: '#ff0055',
    marginLeft: 6,
  },
});
