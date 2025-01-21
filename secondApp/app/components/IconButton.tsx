// rnfes
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

// importing access to any icon in the FontAwesome5 Family
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type propsType = {
    iconName: string;
    iconSize?: Number;
    color?: string;
    onPress: () => void;
};

// passing in like parameters
const IconButton: React.FC<propsType> = ({
    iconName,
    iconSize = 20,
    color = 'black',
    onPress
}) => {
  return (
    <TouchableHighlight onPress={onPress} style={[styles.iconContainer, {borderColor: color }]}>
      <FontAwesome5 name={iconName} size={iconSize} color={color} />
    </TouchableHighlight>
  )
}

export default IconButton;

const styles = StyleSheet.create({
  iconContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})