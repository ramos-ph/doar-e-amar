import {StyleSheet} from 'react-native';

import {common} from '../../../styles';

export default StyleSheet.create({
  ...common,

  legend: {
    ...common.legend,
    color: '#000',
    marginTop: 10,
  },

  cardsContainer: {
    alignSelf: 'stretch',
    flex: 1,
  },

  card: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#999',
    height: '20%',
    marginVertical: 15,
  },

  cardIcon: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '35%',
  },

  categoryName: {
    fontWeight: 'bold',
  },

  cardInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 15,
    paddingLeft: 8,
  },

  description: {
    color: '#888',
  },
});
