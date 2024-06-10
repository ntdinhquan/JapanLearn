import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button30 = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom:10,
    alignItems: 'center',
    backgroundColor: '#FCFCFD',
    borderRadius: 4,
    shadowColor: 'rgba(45, 35, 66, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    textAlign: 'left',
    fontSize: 18,
    transition: 'box-shadow 0.15s, transform 0.15s',
    userSelect: 'none',
    touchAction: 'manipulation',
    overflow: 'hidden',
  },
  buttonText: {
    color: '#36395A',
    fontFamily: 'monospace',
  },
  buttonFocus: {
    shadowColor: '#D6D6E7',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1.5,
    borderColor: '#D6D6E7',
    borderWidth: 1.5,
  },
 
  buttonActive: {
    shadowColor: '#D6D6E7',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 5,
    transform: [{ translateY: 2 }],
  },
});

export default Button30;
