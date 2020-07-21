import {StyleSheet} from 'react-native';

import {common, fonts, colors} from '../../../styles';

export default StyleSheet.create({
  ...common,

  legend: {
    ...common.legend,
    color: '#000',
    marginBottom: 2,
  },

  label: {
    color: '#999',
    marginBottom: 20,
  },

  listContainer: {
    width: '100%',
  },

  card: {
    flexDirection: 'row',
    elevation: 4,
    backgroundColor: '#FFF',
    borderRadius: 4,
    padding: 12,
    margin: 4,
  },

  avatar: {
    height: 108,
    width: 108,
    resizeMode: 'cover',
    borderRadius: 4,
    marginRight: 8,
  },

  name: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
  },

  email: {
    color: '#999',
    fontSize: 16,
  },
});
