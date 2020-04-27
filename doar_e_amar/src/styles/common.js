import colors from './colors';
import fonts from './fonts';

const common = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  legend: {
    color: colors.primary,
    fontSize: fonts.legend,
    fontWeight: fonts.bold,
    marginTop: 40,
    marginBottom: 20,
  },

  label: {
    color: colors.darker,
    fontSize: fonts.medium,
    fontWeight: fonts.bold,
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  input: {
    height: 52,
    width: '100%',
    paddingHorizontal: 25,
    backgroundColor: '#ddd',
    color: colors.dark,
    borderRadius: 4,
  },

  button: {
    height: 52,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: fonts.regular,
    fontWeight: '700',
  },
};

export default common;
