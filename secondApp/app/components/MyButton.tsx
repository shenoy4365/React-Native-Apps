// rnfes to get the boilerplate template
// use "npm start" when the ngrok terminal comand "npx expo start --tunnel" doesn't work

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyButton = () => {
    // javascript goes code here
  return (
    // react native goes code here
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>MyButton</Text>
    </View>
  )
}

export default MyButton

const styles = StyleSheet.create({
    buttonContainer: {
        height: 30,
        width: 100,
        backgroundColor: '#27a567',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    }
})