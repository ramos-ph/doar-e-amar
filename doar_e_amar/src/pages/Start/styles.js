import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 35,
    paddingHorizontal: 20,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  logo: {
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  label: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop: 15,
  },

  altButton: {
    backgroundColor: '#0000',
    borderWidth: 2,
    borderColor: '#fff',
  },

  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  altButtonText: {
    color: '#fff',
  },
});
