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

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: '#0abde333',
    borderRadius: 8,
    width: '100%',
    height: '30%',
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0abde3',
    marginBottom: 16,
  },

  item: {
    fontSize: 14,
    color: '#999',
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
