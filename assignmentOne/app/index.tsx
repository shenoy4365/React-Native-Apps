import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    // consists of all of the views that make up the screen
    <SafeAreaView style={styles.container}>
      <View style={styles.gameConsole}>
        <View style={styles.screen} />
        <View style={styles.rectButton} />
        <View style={styles.buttonContainer}>
          <View style={styles.circleButton} />
          <View style={styles.circleButton} />
          <View style={styles.circleButton} />
          <View style={styles.circleButton} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container that "contains" all of the elements
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E3440',
  },
  // large blue rectangle in the background
  gameConsole: {
    width: 200,
    height: 350,
    backgroundColor: '#1D4ED8', // Deep blue
    borderRadius: 10,
    padding: 10,
  },
  // the light blue screen overlaid on the gameConsole
  screen: {
    flex: 3,
    backgroundColor: '#22D3EE', // Light blue
    borderRadius: 5,
    marginBottom: 10,
  },
  // the medium blue screen overlaid on the gameConsole
  rectButton: {
    flex: 0.5,
    backgroundColor: '#2563EB', // Medium blue
    borderRadius: 5,
    marginBottom: 20,
  },
  // button container in order to horizontally (by row) align the circles
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  // the different circle buttons overlaid on the gameConsole
  circleButton: {
    width: 40,
    height: 40,
    backgroundColor: '#ffb703', // Green
    borderRadius: 20,
  },
});
