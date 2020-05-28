import {StyleSheet} from 'react-native';

import {common, fonts, colors} from '../../styles';

export default StyleSheet.create({
  ...common,

  title: {
    fontSize: 28,
    fontWeight: fonts.bold,
    color: colors.dark,
    marginTop: 15,
  },

  search: {
    alignSelf: 'stretch',
    height: 54,
    paddingHorizontal: 25,
    backgroundColor: colors.white,
    borderRadius: 27,
    fontSize: fonts.regular,
    elevation: 3,
    marginTop: 15,
  },
});
