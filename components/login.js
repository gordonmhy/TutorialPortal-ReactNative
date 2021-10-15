import React, {useState} from 'react';
import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    SafeAreaView,
    Linking, Alert
} from 'react-native';
import {loginStyles} from "../styles/loginStyles";

export default function Login() {

    // Stores input credentials ready to be submitted
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

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

    return (
        <View style={loginStyles.container}>
            <Text style={loginStyles.titleText}>Tutorial Portal</Text>
            <KeyboardAvoidingView style={loginStyles.loginContainer}>
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
                        <Text style={loginStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}