import {StyleSheet} from 'react-native';

import {common, fonts, colors} from '../../styles';

export default StyleSheet.create({
  ...common,

  container: {
    ...common.container,
    paddingVertical: 65,
    paddingHorizontal: 30,
  },

  picture: {
    height: 86,
    width: 86,
    borderRadius: 43,
  },

  title: {
    fontSize: 24,
    fontWeight: fonts.bold,
    color: colors.dark,
    marginTop: 15,
  },

  info: {
    fontSize: fonts.regular,
    color: colors.light,
  },
});
