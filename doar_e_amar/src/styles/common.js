import colors from './colors';
import fonts from './fonts';

const common = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    paddingTop: 40,
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
    color: '#888',
    fontSize: fonts.medium,
    fontWeight: fonts.bold,
  },

  input: {
    height: 52,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    color: '#666',
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    height: 52,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },

  buttonText: {
    color: '#fff',
    fontSize: fonts.regular,
    fontWeight: '700',
  },
};

export default common;
