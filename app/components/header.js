import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ onItemAddPress, availableStock }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.iconView}>
                    <View style={styles.view1}>
                        <Icon name="menu" style={styles.titleTxt} />
                    </View>
                    <View style={styles.view2}>
                        <Text style={styles.titleTxt}>Shop Bridge</Text>
                    </View>
                    <View style={styles.view3}>
                        <Icon name="add" style={styles.titleTxt} onPress={onItemAddPress} />
                    </View>
                </View>
            </View>

            <View style={styles.subcontainer}>
                <View style={styles.totalCountView}>
                    <View style={[styles.view4]}>
                        <Text style={styles.countTxt}>{availableStock}</Text>
                        <Text style={styles.label}>Stock</Text>
                    </View>
                    <View style={[styles.view4]}>
                        <Text style={styles.countTxt}>100</Text>
                        <Text style={styles.label}>Total Sold</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 170,
        width: '100%',
        alignItems: 'center'
    },
    container: {
        height: 120,
        width: '100%',
        backgroundColor: '#1f667e'
    },
    iconView: {
        flexDirection: 'row',
        height: 60,
    },
    view1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 18
    },
    view3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 18
    },
    view2: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleTxt: {
        fontSize: 22,
        color: '#fff'
    },
    subcontainer: {
        height: 90,
        width: '95%',
        backgroundColor: '#fff',
        position: 'relative',
        elevation: 1,
        top: -45,
        borderRadius: 10
    },
    totalCountView: { flexDirection: 'row', flex: 1 },
    view4: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    countTxt: {
        color: '#000',
        fontSize: 18,
        fontWeight: '900'
    },
    label: {
        color: 'gray',
        fontSize: 13
    }
})

export default Header;