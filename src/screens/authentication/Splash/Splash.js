import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Splash () {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> GYM </Text>
        </View>
    );
}

Splash.propTypes = {};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202332',
    },
    label: {
        color: '#FFFFFF',
        fontSize: 100,
        fontWeight: '700',
    }
})