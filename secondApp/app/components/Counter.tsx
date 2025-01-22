import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react' 

const Counter: React.FC = () => {
    /*
    my state variables are declared inside the {} but before the return
    create a state variable calle count. the initial value for this number is 0.
    the setCuont function is used to update the value of count,


    */

    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            alert("Cant have negative time");
        }
        
    }
  return (
    <View>
      <Text>Time: {count}</Text>
      <Button title="increment" onPress={increment} />
      <Button title="decrement" onPress={decrement} />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})