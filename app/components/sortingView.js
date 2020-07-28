import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SortingView = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.sortIcon}>Name</Text>
            </View>
            <View style={styles.sortView}>
                <Text style={styles.sortIcon}>Sort By</Text>
                <Icon name="sort" style={[styles.sortIcon, { paddingLeft: 10 }]} />
            </View>
        </View>
    );
}

export default SortingView;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        marginHorizontal: 15
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sortView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    sortIcon: {
        color: '#000', fontSize: 16
    }
});