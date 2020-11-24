import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const [screen, setScreen] = React.useState('login');
  const [name, setName] = React.useState('');

  function handleSignIn(nameEntered) {
    setScreen('home');
    setName(nameEntered);
  }

  function handleSignOut() {
    setScreen('login');
  }

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'login' && <LoginScreen onSignIn={handleSignIn} />}
      {screen === 'home' && (
        <HomeScreen name={name} onSignOut={handleSignOut} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
