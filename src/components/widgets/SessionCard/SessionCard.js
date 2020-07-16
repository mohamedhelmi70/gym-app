import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {withTheme, Surface} from "react-native-paper";
import {object, func} from 'prop-types';

function SessionCard ({ session, theme, selectSession }) {
    return (
        <TouchableOpacity onPress={() => selectSession(session)}>
            <Surface style={[styles.container, {backgroundColor: theme.colors.primary}]}>
                <Image source={session?.img} />
                <View style={styles.session_content}>
                    <View style={[styles.level_view, {backgroundColor: theme.colors.accent}]}>
                        <Text style={[styles.session_level, {color: theme.colors.secondary}]}> { session.level } </Text>
                    </View>
                    <View style={styles.session_content_bottom}>
                        <Text style={[styles.session_content_bottom__title, {color: theme.colors.secondary}]}>
                            { session.name }
                        </Text>
                        <Text style={[styles.session_content_bottom__caption, {color: theme.colors.secondary}]}>
                            { session.no_people } people this week
                        </Text>
                    </View>
                </View>
            </Surface>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 265,
        height: 225,
        borderRadius: 9,
        marginLeft: 2,
        marginRight: 14,

        elevation: 5,
    },
    session_content: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "space-between",
    },
    level_view: {
        borderRadius: 9,
        width: 100,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    session_level_text: {
        letterSpacing: .21,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold",
    },
    session_content_bottom: {
        marginHorizontal: 12,
        marginBottom: 12,
    },
    session_content_bottom__title: {
        marginBottom: 7,
        letterSpacing: 0.24,
        fontSize: 18,
        fontWeight: "bold",
    },
    session_content_bottom__caption: {
        letterSpacing: 0.24,
        fontSize: 16,
        fontWeight: "normal",
    }
});

SessionCard.propTypes = {
    session: object.isRequired,
    selectSession: func.isRequired,
}

export default withTheme(SessionCard);
