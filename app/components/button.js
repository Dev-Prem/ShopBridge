import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const RNButton = (props) => {
    const { title, onPress, backgroundColor } = props;
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}
            style={[styles.btn, { backgroundColor: backgroundColor }]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    title: {
        fontSize: 16,
        color: '#fff'
    }
})

export default RNButton;