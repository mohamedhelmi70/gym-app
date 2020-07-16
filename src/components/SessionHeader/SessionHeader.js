import React from 'react';
import {View, StyleSheet, Image, useWindowDimensions, Text} from 'react-native';
import {any, string} from 'prop-types';
import {useTheme} from 'react-native-paper';

function SessionHeader ({backgroundSource, lastClientName, sessionName, level}) {
    const {width} = useWindowDimensions();
    const {colors} = useTheme();

    return (
        <View style={[styles.container, {width}]}>
            {backgroundSource && <Image source={backgroundSource} style={{width}} />}
            <View style={styles.overlay}>
                <Text style={[styles.caption, {color: colors.text}]}> { lastClientName } </Text>
                <Text style={[styles.title, {color: colors.text}]}> { sessionName || "Back and Abs" } </Text>
                <Text style={[styles.text, {color: colors.text}]}> { level || "Advanced" } </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 250,
        maxHeight: 250,
        zIndex: 1,
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        backgroundColor: "transparent",
        paddingHorizontal: 18,
        justifyContent: "flex-start",
        paddingTop: 60,
    },
    caption: {
        fontSize: 16,
        letterSpacing: .24,
        marginBottom: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: .36,
        marginBottom: 13,
    },
    text: {
        fontSize: 14,
        letterSpacing: .21
    }
});

SessionHeader.propTypes = {
    backgroundSource: any.isRequired,
    level: string.isRequired,
    sessionName: string.isRequired,
    lastClientName: string.isRequired,
}

export {SessionHeader};
