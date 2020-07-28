import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ItemList, ItemAdd, ItemView } from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="ItemList" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ItemList" component={ItemList} />
            <Stack.Screen name="ItemAdd" component={ItemAdd} />
            <Stack.Screen name="ItemView" component={ItemView} />
        </Stack.Navigator>
    )
}

export default StackNavigator;