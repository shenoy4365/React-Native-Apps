import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const TextField = () => {
    // Declaring state variables for each field
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [phoneNum, setPhoneNum] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [error, setError] = useState<string>(''); // For email validation errors

    // Function to validate email
    const validateEmail = (newValue: string) => {
        setEmail(newValue);

        // Check if the email contains "@gmail.com"
        if (newValue.endsWith('@gmail.com') || newValue === '') {
            setError(''); // Clear the error if valid
        } else {
            setError('Email must end with "@gmail.com"');
        }
    };

    return (
        <View>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your name"
                placeholderTextColor="blue"
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />

            <TextInput
                style={[
                    styles.textInput,
                    error ? styles.errorInput : null, // Apply error style if there's an error
                ]}
                placeholder="Enter your email"
                placeholderTextColor="red"
                value={email}
                onChangeText={validateEmail} // Use the validateEmail function here
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TextInput
                style={styles.textInput}
                placeholder="Enter your age"
                placeholderTextColor="green"
                value={age}
                onChangeText={(newValue) => setAge(newValue)}
            />

            <TextInput
                style={styles.textInput}
                placeholder="Enter your phone number"
                placeholderTextColor="blue"
                value={phoneNum}
                onChangeText={(newValue) => setPhoneNum(newValue)}
            />

            <TextInput
                style={styles.textInput}
                placeholder="Enter your complete address"
                placeholderTextColor="red"
                value={address}
                onChangeText={(newValue) => setAddress(newValue)}
            />

            <br></br>

            {/* Displays the data entered by the user */}
            <Text>Name entered: {name}</Text>
            <Text>Email entered: {email}</Text>
            <Text>Age entered: {age}</Text>
            <Text>Phone number entered: {phoneNum}</Text>
            <Text>Address entered: {address}</Text>
        </View>
    );
};

export default TextField;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        height: 50,
        width: 250,
        padding: 5,
        marginBottom: 10, // Adds spacing between inputs
    },
    errorInput: {
        borderColor: 'red', // Red border for invalid email
    },
    errorText: {
        color: 'red', // Red error message text
        marginBottom: 10,
    },
});
