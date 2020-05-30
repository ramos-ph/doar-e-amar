import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ProgressComponent({step, maxSteps, currentStep, nextStep}) {
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text style={styles.step}>
          {step} de {maxSteps}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.current}>{currentStep}</Text>
        {nextStep !== undefined && (
          <Text style={styles.next}>Próximo: {nextStep}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    paddingHorizontal: 10,
  },

  counter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 86,
    height: 86,
    borderRadius: 64,
    borderColor: '#ddd',
    borderWidth: 4,
  },

  step: {
    fontSize: 14,
    color: '#111',
  },

  info: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  current: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1c',
  },

  next: {
    fontSize: 14,
    color: '#999',
  },
});

export default ProgressComponent;
