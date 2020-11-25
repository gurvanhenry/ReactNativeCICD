import React from 'react';

import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import Config from 'react-native-config';

import Button from '../components/Button';
import isValidName from '../services/names';

export default function LoginScreen({ onSignIn }) {
  const [name, setName] = React.useState('');

  function handleSignInPressed() {
    if (isValidName(name)) {
      onSignIn(name);
    } else {
      Alert.alert('Your name is not accepted 🙃');
    }
  }

  function getWelcomeText() {
    if (Config.ENV === 'adults') {
      return 'Get in the party 🎂';
    } else if (Config.ENV === 'kids') {
      return 'Kids party 🧸';
    } else {
      return '';
    }
  }

  const welcomeText = getWelcomeText();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{welcomeText}</Text>
      <Text style={styles.subtitle}>Who are you?</Text>
      <TextInput
        testID="TextInput_name"
        style={styles.textInput}
        value={name}
        onChangeText={setName}
      />
      <Button title="Get in" onPress={handleSignInPressed} />
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
  subtitle: {
    fontSize: 15,
    marginBottom: 10,
    color: 'grey',
  },
  textInput: {
    width: 200,
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
});
