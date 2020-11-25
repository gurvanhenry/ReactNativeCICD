import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';

export default function HomeScreen({ name, onSignOut }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {name}!</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://source.unsplash.com/random/200×200/?party' }}
      />
      <Button title="Leave" onPress={onSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
});
