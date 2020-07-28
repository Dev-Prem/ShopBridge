import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const COLORARRAY = ['#51bbb5', '#f2c036', '#3363b9', '#89bb4b', '#8e51c8']

const ItemCard = (props) => {
    const { item, onDeletePress, onProductPress } = props;
    const imageUri = item.image ?
        { uri: 'data:image/jpeg;base64,' + item.image } :
        require('../../assets/inventory.jpg');
    return (
        <View style={[styles.container, { borderLeftColor: COLORARRAY[item.id % 5] }]}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={imageUri} />
            </View>
            <View style={styles.detailsView}>
                <View style={styles.descView}>
                    <TouchableOpacity style={styles.descV} onPress={onProductPress}>
                        <Text style={styles.nameTxt}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.priceV} onPress={onDeletePress}>
                        <Text style={styles.deleteTxt}>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.descView}>
                    <View style={styles.descV}>
                        <Text style={styles.descTxt} numberOfLines={2}>
                            {item.description}
                        </Text>
                    </View>
                    <View style={styles.priceV}>
                        <Icon name="rupee" style={styles.rupee} />
                        <Text style={styles.priceTxt}>
                            {item.price}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 2,
        borderLeftWidth: 4,
        borderRadius: 8
    },
    imageView: {
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    detailsView: {
        marginLeft: 10,
        flex: 1
    },
    nameTxt: {
        fontSize: 20,
        fontWeight: '800',
        color: '#283454'
    },
    descTxt: {
        fontSize: 14,
        color: 'gray'
    },
    priceTxt: {
        fontSize: 14,
        color: 'green'
    },
    descView: {
        flex: 1,
        flexDirection: 'row'
    },
    descV: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    priceV: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    rupee: {
        fontSize: 20,
        color: 'green'
    },
    deleteTxt: {
        fontSize: 12,
        color: 'red'
    }
});

export default ItemCard;