import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>Header</Text>
      <Text style={styles.text}>Text</Text> */}
      <View style={styles.innerBox}><Text>A</Text></View>
      <View style={styles.innerBox}><Text>B</Text></View>
      <View style={styles.innerBox}><Text>C</Text></View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // fills the space
    flexDirection: 'row', // arranging the children in the container 
    padding: 15,
    margin: 20,
    backgroundColor: 'lightblue',
    //alignItems: 'center', // think like global scope impact,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'blue',
  },
  innerBox: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
    margin: 10, // space around each of the elements
    // you can also assign specific margins like marginBottom
    justifyContent: 'center', // horizontally centered
    alignItems: 'center', // vertically centered,
    // padding: 10,
    borderRadius: 25,
  }
});

// notes during lecture

// justify content is for major axis
// alignItem is for minor axis

// padding is inside the object
// example is wearing a jacket -- the padding is inside the jacket,
// so inside the object