import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

const ItemView = ({ route, navigation }) => {
    const { item } = route.params;
    const imageUri = item.image ?
        { uri: 'data:image/jpeg;base64,' + item.image } :
        require('../../assets/inventory.jpg');

    const handleBackPress = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <View style={styles.headingView}>
                <FeatherIcon name="chevron-left" style={styles.closeIcon} onPress={handleBackPress} />
                <Text style={styles.title}>View Item</Text>
            </View>

            <View style={styles.imageView}>
                <Image source={imageUri} style={styles.image} />

                <View style={styles.view}>
                    <View style={styles.view1}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.descTxt}>{item.description}</Text>
                    </View>
                    <View style={styles.view2}>
                        <Icon name="rupee" style={styles.rupee} />
                        <Text style={styles.priceTxt}>
                            {item.price}
                        </Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
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
        flexDirection: 'row',
        marginVertical: 5
    },
    closeIcon: {
        fontSize: 26,
        color: '#283454',
        paddingRight: 10
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 10,
        backgroundColor: '#e7eaed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row'
    },
    view1: {
        flex: 4,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    view2: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    priceTxt: { fontSize: 14, color: 'green' },
    rupee: { fontSize: 20, color: 'green' },
    descTxt: { fontSize: 14, color: 'gray' }
});

export default ItemView;