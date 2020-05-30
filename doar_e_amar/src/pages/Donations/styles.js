import {StyleSheet} from 'react-native';

import {common} from '../../styles';

export default StyleSheet.create({
  ...common,

  legend: {
    ...common.legend,
    color: '#000',
    marginTop: 30,
    marginBottom: 10,
  },

  label: {
    color: '#999',
    marginBottom: 10,
  },

  content: {
    alignSelf: 'stretch',
  },

  item: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: 180,
    backgroundColor: '#FFF',
    borderRadius: 12,
    elevation: 2,
    marginVertical: 10,
    marginHorizontal: 4,
  },

  image: {
    height: 140,
    width: 140,
    borderRadius: 12,
    backgroundColor: '#999',
  },

  info: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '45%',
    paddingVertical: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },

  category: {
    textTransform: 'uppercase',
    color: '#999',
  },
});
