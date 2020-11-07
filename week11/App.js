import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title> Maria Marques </Card.Title>
        <Text>Chicken Tenders and Fries</Text>
        <Card.Divider/>
        <Text>Empanadas</Text>
        <Card.Divider/>
        <Button title = "SUBMIT"></Button>
      </Card>
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
