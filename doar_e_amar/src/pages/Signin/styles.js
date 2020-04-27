import {StyleSheet} from 'react-native';
import {common, fonts, colors} from '../../styles';

export default StyleSheet.create({
  ...common,

  input: {
    ...common.input,
    marginBottom: 16,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopColor: colors.lighter,
    borderTopWidth: 1,
    height: 64,
  },

  footerText: {
    color: colors.darker,
    fontSize: fonts.regular,
    fontWeight: '700',
  },

  action: {
    color: colors.primary,
    marginLeft: 6,
  },
});
