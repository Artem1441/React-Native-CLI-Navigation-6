import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Screen1 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Screen1</Text>
            <Button onPress={() => navigation.navigate('Screen2')} title="Go to Screen2" />
        </View>
    );
}

const Screen2 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Screen2</Text>
            <Button onPress={() => navigation.goBack()} title="Go back Screen1" />
        </View>
    );
}

const Screen3 = () => {
    return (
        <Stack.Navigator initialRouteName="Screen1" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
    );
}

const Screen4 = () => {
    return (
        <View>
            <Text style={{ textAlign: 'center', marginTop: 300 }}>Screen4</Text>
        </View>
    );
}

const Screen5 = () => {
    return (
        <Tab.Navigator initialRouteName="Screen3" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Screen3" component={Screen3} />
            <Tab.Screen name="Screen4" component={Screen4} />
        </Tab.Navigator>
    );
}

const Screen6 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen6</Text>
            <Button onPress={() => navigation.goBack()} title="Go back Screen5" />
        </View>
    );
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Screen5" screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Screen5" component={Screen5} />
                <Drawer.Screen name="Screen6" component={Screen6} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigator