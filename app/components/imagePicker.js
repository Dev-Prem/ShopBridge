import React from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RNImagePicker = (props) => {
    const { onPress, image } = props;
    const imageUri = image ? { uri: 'data:image/jpeg;base64,' + image } : null;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
            <ImageBackground source={imageUri} style={styles.container}>
                <Icon name="camera" style={styles.camera} />
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        borderRadius: 10,
        backgroundColor: '#e7eaed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    camera: {
        color: '#000',
        fontSize: 20
    },
})

export default RNImagePicker;