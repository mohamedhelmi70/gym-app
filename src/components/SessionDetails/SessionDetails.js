import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';

function SessionDetails ({  }) {
    const { width } = useWindowDimensions();
    const { colors } = useTheme();

    return (
        <View style={[styles.container, {backgroundColor: colors.darkGreen, width,}]}>
            <View style={styles.item}>
                <Text style={[styles.itemContent , {color: colors.text}]}>4 Feb </Text>
                <Text style={[styles.title , {color: colors.text}]}>Date </Text>
            </View>
            <View style={styles.item}>
                <Text style={[styles.itemContent , {color: colors.text}]}>h 14:00</Text>
                <Text style={[styles.title , {color: colors.text}]}>Schedule</Text>
            </View>
            <View style={styles.item}>
                <Text style={[styles.itemContent , {color: colors.text}]}>1 hr</Text>
                <Text style={[styles.title , {color: colors.text}]}>Time</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 31,
        borderTopRightRadius: 31,
        height: 169,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 18
    },
    item: {
        marginVertical: 14,
    },
    itemContent: {
        letterSpacing: .27,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 18
    },
    title: {
        letterSpacing: .21,
        textAlign: 'center',
        fontSize: 14,
    }
});

export { SessionDetails };
