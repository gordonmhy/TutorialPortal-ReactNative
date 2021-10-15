import {StyleSheet} from "react-native";

export const loginStyles = StyleSheet.create({
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
        paddingVertical: 15,
        borderRadius: 30,
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