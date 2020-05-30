import {StyleSheet} from 'react-native';

import {common, colors} from '../../styles';

export default StyleSheet.create({
  ...common,

  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  picture: {
    height: '50%',
    width: '100%',
    resizeMode: 'cover',
  },

  content: {
    flex: 1,
    padding: 20,
  },

  title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 24,
  },

  label: {
    color: '#555',
    fontWeight: 'bold',
    marginTop: 12,
  },

  info: {
    color: '#999',
    alignSelf: 'stretch',
    borderColor: '#DDD',
    borderBottomWidth: 1,
    paddingBottom: 8,
    fontSize: 16,
    textTransform: 'capitalize',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 48,
    backgroundColor: `${colors.success}33`,
    borderRadius: 4,
  },

  buttonText: {
    color: colors.success,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
