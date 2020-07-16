import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {withTheme, Surface} from "react-native-paper";
import {object} from "prop-types";

function ClientCard ({client, theme}) {
    return (
        <Surface style={[styles.container, {backgroundColor: theme.colors.primary}]}>
            <Image source={client?.img} />
            <View style={styles.client_content}>
                <Text style={[styles.title, {color: theme.colors.secondary}]}>{client.name}</Text>
            </View>
        </Surface>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 142,
        height: 125,
        borderRadius: 7,
        marginRight: 8,

        elevation: 4,
    },
    client_content: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        maxWidth: 80,
    }
});

ClientCard.propTypes = {
    client: object.isRequired,
}

export default withTheme(ClientCard);
