import {StyleSheet} from 'react-native';

import {common, colors} from '../../styles';

export default StyleSheet.create({
  ...common,

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
    height: 260,
  },

  cards: {
    flexGrow: 0.3,
    position: 'absolute',
    top: 180,
    left: 0,
    right: 0,
  },

  card: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 4,
    backgroundColor: '#FFF',
    height: 180,
    width: 160,
    marginHorizontal: 10,
    marginVertical: 4,
    borderRadius: 8,
  },

  cardText: {
    fontSize: 18,
    color: colors.dark,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
