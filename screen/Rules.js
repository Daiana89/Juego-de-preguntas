import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rules() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reglas del Juego</Text>
      <Text style={styles.text}>
        1. Cada jugador juega por turno.
        {"\n"}2. Sigue las instrucciones para cada ronda.
        {"\n"}3. El jugador que llegue primero a la meta gana.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
