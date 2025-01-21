import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

// CircleButton Component
const CircleButton = ({ color = '#ffb703', size = 50 }: { color?: string; size?: number }) => {
  return (
    <View
      style={[
        styles.circleButton,
        {
          backgroundColor: color,
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    />
  );
};

// TextButton Component
const TextButton = ({
  text,
  bgColor = '#2563EB',
  textColor = '#FFFFFF',
}: {
  text: string;
  bgColor?: string;
  textColor?: string;
}) => {
  return (
    <View style={[styles.rectButton, { backgroundColor: bgColor }]}>
      <Text style={[styles.rectButtonText, { color: textColor }]}>{text}</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameConsole}>
        {/* Screen */}
        <View style={styles.screen} />
        
        {/* Gameboy Text Button */}
        <TextButton text="Gameboy" bgColor="#2563EB" textColor="#FFFFFF" />
        
        {/* Circle Buttons */}
        <View style={styles.buttonContainer}>
          <CircleButton color="#FACC15" />
          <CircleButton color="#FACC15" />
          <CircleButton color="#FACC15" />
          <CircleButton color="#FACC15" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E3440', // Dark background
  },
  gameConsole: {
    width: 250,
    height: 450,
    backgroundColor: '#1D4ED8', // Deep blue
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  screen: {
    width: '100%',
    height: 200,
    backgroundColor: '#22D3EE', // Light blue
    borderRadius: 10,
    marginBottom: 20,
  },
  rectButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rectButton: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
