import {StyleSheet} from 'react-native';

import {common} from '../../../styles';

export default StyleSheet.create({
  ...common,

  legend: {
    ...common.legend,
    color: '#000',
    marginBottom: 5,
  },

  preview: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 140,
    borderWidth: 1,
    borderColor: '#999',
    borderStyle: 'dashed',
    borderRadius: 8,
  },

  imagePreview: {
    flex: 1,
    height: 140,
    alignSelf: 'stretch',
    borderRadius: 8,
  },

  label: {
    ...common.label,
    marginTop: 15,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
  },

  button: {
    ...common.button,
    width: '40%',
  },
});
