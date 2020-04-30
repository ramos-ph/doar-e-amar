import {StyleSheet} from 'react-native';

import {common} from '../../../styles';

export default StyleSheet.create({
  ...common,

  container: {
    ...common.container,
    paddingVertical: 0,
  },

  content: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16,
  },

  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 128,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#999',
    borderRadius: 8,
  },

  picture: {
    flex: 1,
    height: 150,
    width: 128,
    borderRadius: 8,
  },

  inputGroup: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '60%',
    height: 150,
    marginLeft: '5%',
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
