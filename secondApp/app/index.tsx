import { Text, View, StyleSheet, Button, TouchableHighlight, Alert, TouchableOpacity } from "react-native";


export default function Index() {

    const myAlertFn = () => {
      Alert.alert("title", "message", [
        { text: "Yes", onPress: () => console.log("Pressed yes") },
        { text: "No", onPress: () => console.log("Pressed no") },
      ]);
    };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi 4th Hour</Text>
      <Button title='click me' onPress={() => alert('hi')}/>
      <TouchableHighlight 
        style = {styles.highlightButton} 
        onPress = {() => console.log("Pressed TH")} 
        underlayColor = 'hotpink'
      >
        <Text style={styles.buttontext}> Touchable Highlight</Text>
      </TouchableHighlight>

      <TouchableOpacity
        style = {styles.highlightButton} 
        onPress = {myAlertFn}>
        <Text>Click to see an alert</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'lightblue',
    padding: 10,
  },
  text: {
    fontSize: 10,
  },
  highlightButton: {
    height: 50,
    width: '30%',
    backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: 18,
  }
});
