import React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8C986E',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});
