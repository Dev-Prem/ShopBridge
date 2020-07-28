import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';

import { RNButton, RNTextInput, RNImagePicker } from '../components';
import itemAction from '../redux/action/item-action';

const ItemAdd = ({ navigation }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = () => {
        Keyboard.dismiss();
        if (name && price && description) {
            let item = {
                name: name,
                price: price,
                description: description,
                image: image ? image : ""
            }
            dispatch(itemAction.itemAddAction(item));
            handleBackPress();
        }
    }

    const handleBackPress = () => {
        navigation.goBack();
    }

    const captureImage = () => {
        ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            setImage(image.data);
        }).catch((err) => {
            //handle error
            //console.log(err);
        });
    }

    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.container}>

                <View style={styles.headingView}>
                    <Icon name="chevron-left" style={styles.closeIcon} onPress={handleBackPress} />
                    <Text style={styles.title}>Add New Item</Text>
                </View>

                <View style={styles.imageView}>
                    <RNImagePicker onPress={captureImage} image={image} />
                </View>

                <View style={styles.subContainer}>
                    <View style={styles.spaceView}>
                        <RNTextInput placeholder="Name"
                            value={name}
                            onChangeText={(name) => setName(name)}
                            keyboardType='default'
                        />
                    </View>

                    <View style={[styles.spaceView, { width: '50%' }]}>
                        <RNTextInput placeholder="Price"
                            value={price}
                            onChangeText={(price) => setPrice(price)}
                            keyboardType='numeric'
                        />
                    </View>

                    <View style={styles.spaceView}>
                        <RNTextInput placeholder="Description"
                            value={description}
                            onChangeText={(desc) => setDescription(desc)}
                            keyboardType='default' />
                    </View>

                    <View style={styles.spaceView}>
                        <RNButton title="Add" backgroundColor={'#1f667e'} onPress={handleSubmit} />
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scroll: { backgroundColor: '#fff', flexGrow: 1 },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    subContainer: { width: '90%' },
    spaceView: { marginVertical: 10 },
    headingView: {
        height: 60,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: '#283454',
        fontWeight: 'bold'
    },
    imageView: {
        width: '90%',
        justifyContent: 'center',
        marginVertical: 5
    },
    closeIcon: {
        fontSize: 26,
        color: '#283454',
        paddingRight: 10
    }
})

export default ItemAdd;