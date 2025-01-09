import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Header</Text>
      <Text style={styles.text}>Text</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    margin: 20,
    backgroundColor: "lightblue",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'blue',
  }
});
