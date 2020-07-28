
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';

import itemAction from '../redux/action/item-action';
import { ItemCard, Header, SortingView } from '../components';

const ItemList = ({ navigation }) => {
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemList.itemList);

    useEffect(() => {
        dispatch(itemAction.itemListAction())
    }, []);

    const handleDeleteItem = (itemId) => {
        dispatch(itemAction.itemTrashAction(itemId));
    }

    const renderItem = ({ item }) => {
        return (
            <View key={item.id} style={styles.cardView}>
                <ItemCard item={item} onDeletePress={() => handleDeleteItem(item.id)}
                    onProductPress={() => viewProduct(item)} />
            </View>
        );
    };

    const handleAddItem = () => {
        navigation.navigate('ItemAdd');
    }

    const viewProduct = (item) => {
        navigation.navigate('ItemView', { item: item });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#1f667e" barStyle='light-content' />
            <Header availableStock={itemList.length} onItemAddPress={handleAddItem} />
            <SortingView />
            <FlatList
                data={itemList}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f4f4f4' },
    cardView: { marginHorizontal: 10, marginVertical: 8 },
    sortView: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: 10
    },
    sortIcon: { color: '#000', fontSize: 16, paddingRight: 10 }
});

export default ItemList;