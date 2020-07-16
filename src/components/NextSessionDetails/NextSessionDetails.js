import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import { withTheme, Title } from "react-native-paper";

function _NextSessionDetails ({session, name, theme}) {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width } ]}>
            <View style={styles.header}>
                <Title style={[styles.title, {color: theme.colors.text}]}>
                    Welcome back, { name }!
                </Title>
            </View>
            <View style={styles.details}>
                <View style={styles.left_details}>
                    <Text style={[styles.left__text, {color: theme.colors.text, marginBottom: 7}]}>
                        { session?.date }
                    </Text>
                    <Text style={[styles.left__text, {color: theme.colors.text}]}>
                        { session?.time }
                    </Text>
                </View>
                <View style={styles.right_details}>
                    <Text style={[styles.left__text, {color: theme.colors.text , marginBottom: 7}]}>
                        { session.period } training session with
                    </Text>
                    <Text
                        style={[styles.left__text, {color: theme.colors.text}]}
                    >
                        Satya Clarke
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        paddingHorizontal: 18,
    },
    header: {
        marginBottom: 20,
    },
    details: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'flex-start',
    },
    left_details: {
        paddingRight: 16,
        borderRightWidth: 1,
        borderRightColor: '#5C746A',
    },
    right_details:{
        marginLeft: 16,
    },
    title: {
        fontSize: 24,
    },
    left__text: {
        fontSize: 18,
        textAlign: "left",
    }
});

_NextSessionDetails.propTypes = {

}

export const NextSessionDetails = withTheme(_NextSessionDetails);

