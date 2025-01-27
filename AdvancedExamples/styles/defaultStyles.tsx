import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 16,
    color: colors.text.dark,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.darkerGreen,
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    color: colors.text.light,
  },
  card: {
    backgroundColor: colors.secondary,
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default defaultStyles;
