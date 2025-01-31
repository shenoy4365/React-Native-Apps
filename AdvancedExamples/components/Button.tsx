import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { defaultStyles } from "../styles/defaultStyles";

// Define the props for the button component
type ButtonProps = {
  title: string; // Button text
  onPress: () => void; // Click handler
};

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={defaultStyles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3182CE", // Blue color
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;