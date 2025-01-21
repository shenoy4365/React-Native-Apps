// rnfes to get the boilerplate template
// use "npm start" when the ngrok terminal comand "npx expo start --tunnel" doesn't work

import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

type propsType = {
  title: string;
  color?: string; // -+optional with default value
  textColor?: string; // optional with default value
  onPress: () => void;
};

// FC = Functional Component 
const MyButton: React.FC<propsType> = ({
  title,
  color = 'green',
  textColor = 'black',
  onPress,
}) => {
    // javascript goes code here
  return (
    // react native goes code here
    <TouchableHighlight style={[styles.buttonContainer, {backgroundColor: color}]} onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableHighlight>
  )
}

export default MyButton

const styles = StyleSheet.create({
    buttonContainer: {
        height: 30,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
    }
})