import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddButton from './components/AddButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AddButton content={"Ajouter une liste"}/>
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
