import { Text, View, StyleSheet, Button, TouchableHighlight, Alert, TouchableOpacity, Image } from "react-native";

import arizonaDesert from "../assets/images/deserts/arizona-desert.png";
import MyButton from "./components/MyButton";
import IconButton from "./components/IconButton";

// importing access to any icon in the FontAwesome5 Family
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function Index() {

    const myAlertFn = () => {
      Alert.alert("title", "message", [
        { text: "Yes", onPress: () => console.log("Pressed yes") },
        { text: "No", onPress: () => console.log("Pressed no") },
      ]);
    };


  return (
    <View style={styles.container}>
      <IconButton iconName="snowboarding" />
      <IconButton iconName="snowflake" color="green" iconSize={30} />


      {/* <FontAwesome5 name="snowman" size={24} color="red" />
      <FontAwesome5 name="adn" size={24} color="blue" />
      <FontAwesome5 name="amazon" size={24} color="green" /> */}

      <Text style={styles.text}>Hi 4th Hour</Text>
      {/* use the /> syntax when you have children that you need to have */}
      <MyButton title='button 1' color="purple" onPress={() => console.log('1')} />
      <MyButton title='button 2' color="white" onPress={() => console.log('2')} />
      <MyButton title='button 3' color="green"onPress={() => console.log('3')} />
      <MyButton title='button 4' color="orange" onPress={() => console.log('4')} />
      <Image
        style={styles.imageStyles}
        source={require("../assets/images/deserts/stock-desert.png")}
      />
      
      {/*could also do the below if you want to put an online image */}
      <Image
          style={styles.imageStyles}
          source={{ uri: "https://images.unsplash.com/photo-1735767976699-6096acda642d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}   
      />
      <Image
          style={styles.imageStyles}
          source={arizonaDesert}   
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'lightblue',
    padding: 10,
    gap: 20,
  },
  text: {
    fontSize: 50,
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
  },
  imageStyles: {
    height: 200,
    width: 300,
    borderColor: "black",
    borderWidth: 3 
  }
});
