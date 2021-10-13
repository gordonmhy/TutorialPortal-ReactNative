import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    SafeAreaView,
    Linking, Alert
} from 'react-native';

export default function App() {

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
        <View style={styles.container}>
            <Text style={styles.titleText}>Tutorial Portal</Text>
            <KeyboardAvoidingView style={styles.loginContainer}>
                <Text style={styles.loginTitle}>Getting Started</Text>
                {/* User Input Fields */}
                <SafeAreaView style={styles.inputFieldContainer}>
                    <TextInput style={[styles.inputField, styles.usernameInput]}
                               placeholder={'Enter your username'}
                               value={credentials.username}
                               onChangeText={(username) => setCredentials({
                                   ...credentials,
                                   username: username
                               })}/>
                </SafeAreaView>
                <SafeAreaView style={styles.inputFieldContainer}>
                    <TextInput style={[styles.inputField, styles.passwordInput]}
                               placeholder={'Enter your password'}
                               secureTextEntry={true}
                               value={credentials.password}
                               onChangeText={(password) => setCredentials({
                                   ...credentials,
                                   password: password
                               })}/>
                </SafeAreaView>
                {/* Buttons */}
                <View style={styles.loginButtonsContainer}>
                    <TouchableOpacity style={styles.buttons}
                                      onPress={confirmExternalRegistration}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    // Main Container
    container: {
        flex: 1,
        backgroundColor: '#fbefeb',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Title
    titleText: {
        marginBottom: 20,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    // Login Panel
    loginTitle: {
        marginBottom: 10,
        fontSize: 25,
        textAlign: 'center',
    },
    loginContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        width: 300,
    },
    inputFieldContainer: {
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: 'lightgray',
        borderWidth: 1,
        padding: 100,
        marginVertical: 5,
    },
    inputField: {
        fontSize: 20,
        textAlign: "center",
    },
    usernameInput: {},
    passwordInput: {},
    loginButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttons: {
        borderRadius: 5,
        backgroundColor: 'black',
        padding: 7,
        marginTop: 10,
        marginHorizontal: 5,
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17,
    }

});
