import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  legend: {
    color: '#ff0055',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 40,
    marginBottom: 20,
  },

  label: {
    color: '#1a1a1c',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  input: {
    height: 52,
    width: '100%',
    paddingHorizontal: 25,
    backgroundColor: '#ddd',
    color: '#21212a',
    borderRadius: 4,
    marginBottom: 16,
  },

  button: {
    height: 52,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0055',
    borderRadius: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    height: 64,
  },

  footerText: {
    color: '#19191a',
    fontSize: 16,
    fontWeight: '700',
  },

  action: {
    color: '#ff0055',
    marginLeft: 6,
  },
});
