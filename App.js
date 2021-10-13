import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>

            {/* Top title bar */}
            <View style={styles.titleContainer}>
                <SafeAreaView>
                    <Text style={styles.titleText}>Tutorial Portal</Text>
                </SafeAreaView>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    // Main Container
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white',
    },

    // Title
    titleContainer: {
        backgroundColor: '#fbefeb',
        alignItems: 'center',
    },
    titleText: {
        paddingVertical: 10,
        fontSize: 25,
    }


});
