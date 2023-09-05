import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [age, setAge] = useState('');
  const [hrLow, setHrLow] = useState (0);
  const [hrHigh, setHrHigh] = useState (0);

  function change(age){
    setAge(age);
    const lower = (220 - age)*0.65;
    const higher = (220 - age)*0.85;
    setHrLow(lower);
    setHrHigh(higher);
  }
  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput onChangeText={age => change(age)}></TextInput>
      <Text>Hr limits</Text>
      <Text>{hrLow.toFixed(0)} - {hrHigh.toFixed(0)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
