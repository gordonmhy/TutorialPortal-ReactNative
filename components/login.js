import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    SafeAreaView,
    Linking, Alert,
    AsyncStorage,
    ActivityIndicator,
} from 'react-native';
import {loginStyles} from "../styles/loginStyles";
import "react-native-gesture-handler";

export default function Login({navigation}) {

    // Stores input credentials ready to be submitted
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    const [loadingState, setLoadingState] = useState(false);

    const obtainCredentials = async () => {
        try {
            const username = await AsyncStorage.getItem('username');
            const password = await AsyncStorage.getItem('password');
            setCredentials({
                username: username !== null ? username : '',
                password: password !== null ? password : ''
            })
        } catch (error) {
            Alert.alert('There is an error obtaining your previously entered login credentials.');
        }
    }

    useEffect(() => {
        obtainCredentials();
    }, [])

    // Prompts alert when user presses 'Register'
    const confirmExternalRegistration = () => {
        Alert.alert(
            'Registration',
            'This will open your browser and you will be navigated to the online registration page.',
            [
                {text: 'Back'},
                {
                    text: 'Proceed', onPress: () => {
                        Linking.openURL('https://www.gordonmhy.com/tutorial/register/')
                    }
                }
            ])
    }

    const authenticate = () => {
        setLoadingState(true);
        const base64 = require('base-64');
        const headers = new Headers();
        headers.append("Authorization", "Basic " + base64.encode(`${credentials.username}:${credentials.password}`));
        fetch("https://www.gordonmhy.com/tutorial-api/students/", {
            headers: headers
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                let wrongCredentials = "Invalid username/password.";
                if (json.detail !== undefined) {
                    if (json.detail === wrongCredentials)
                        Alert.alert(wrongCredentials);
                    else
                        Alert.alert('An error occurred during authentication.');
                } else {
                    const saveCredentials = async () => {
                        try {
                            await AsyncStorage.setItem('username', credentials.username);
                            await AsyncStorage.setItem('password', credentials.password);
                        } catch (error) {
                            console.log("There is an error saving user's credentials.");
                        }
                    }
                    saveCredentials();
                    navigation.navigate("Dashboard");
                }
            })
            .catch((error) => {
                Alert.alert("An error occurred.");
                console.log(error);
            })
            .finally(() => {
                setLoadingState(false);
            })
    }

    return (
        <View style={loginStyles.container}>
            <Text style={loginStyles.titleText}>Tutorial Portal</Text>
            <KeyboardAvoidingView style={loginStyles.loginContainer}>
                {
                    loadingState ? (
                        <ActivityIndicator size="large" color="#000000"/>
                    ) : (
                        <View>
                            <Text style={loginStyles.loginTitle}>Getting Started</Text>
                            {/* User Input Fields */}
                            <SafeAreaView style={loginStyles.inputFieldContainer}>
                                <TextInput style={[loginStyles.inputField, loginStyles.usernameInput]}
                                           placeholder={'Enter your username'}
                                           value={credentials.username}
                                           onChangeText={(username) => setCredentials({
                                               ...credentials,
                                               username: username
                                           })}/>
                            </SafeAreaView>
                            <SafeAreaView style={loginStyles.inputFieldContainer}>
                                <TextInput style={[loginStyles.inputField, loginStyles.passwordInput]}
                                           placeholder={'Enter your password'}
                                           secureTextEntry={true}
                                           value={credentials.password}
                                           onChangeText={(password) => setCredentials({
                                               ...credentials,
                                               password: password
                                           })}/>
                            </SafeAreaView>
                            {/* Buttons */}
                            <View style={loginStyles.loginButtonsContainer}>
                                <TouchableOpacity style={loginStyles.buttons}
                                                  onPress={confirmExternalRegistration}>
                                    <Text style={loginStyles.buttonText}>Register</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={loginStyles.buttons}>
                                    <Text style={loginStyles.buttonText}
                                          onPress={() => {
                                              authenticate();
                                          }}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
            </KeyboardAvoidingView>
        </View>
    );
}