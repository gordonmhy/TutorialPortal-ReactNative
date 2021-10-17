import React, {useState} from 'react';
import Login from "./components/login";
import Dashboard from "./components/dashboard"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{
                    title: "Getting Started"
                }}/>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{
                    title: "Dashboard"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
