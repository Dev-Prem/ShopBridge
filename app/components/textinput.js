import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const RNTextInput = (props) => {
    const { onChangeText, value, placeholder, keyboardType } = props;
    return (
        <TextInput onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            style={styles.input}
            keyboardType={keyboardType}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '100%',
        backgroundColor: '#e7eaed',
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 14,
        color: '#000'
    },
});

export default RNTextInput;