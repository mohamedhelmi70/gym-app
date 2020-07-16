import React  from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useTheme, Title} from 'react-native-paper';
import {object} from 'prop-types';

import {check, dash} from "../../../assets";

function ExerciseCard ({ exercise }) {
    const {colors} = useTheme();

    return (
        <View style={[styles.exercise_card, {borderBottomColor: colors.darkGreen}]}>
            <View style={styles.content}>
                <Title style={styles.content_title}> { exercise.name } </Title>
                <View style={styles.content_details}>
                    <Text style={[styles.text, {color: colors.gray}]}> Set {exercise.set} </Text>
                    <Text style={[styles.text, {color: colors.gray}]}> Reps {exercise.reps} </Text>
                    <Text style={[styles.text, {color: colors.gray}]}> Rest {exercise.rest}sec </Text>
                </View>
            </View>
            <View style={styles.status}>
                <Image source={exercise.status? check : dash} style={styles.status_image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    exercise_card: {
        flexDirection: "row",
        borderBottomWidth: 1,
        marginBottom: 21,
        paddingBottom: 5
    },
    content: {
        flex: .8,
    },
    content_title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    content_details: {
        flexDirection: 'row',
        marginTop: 7,
    },
    text: {
        letterSpacing: .18,
        fontSize: 12,
    },
    status: {
        flex: .2,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    status_image: {
        width: 60,
        height: 60
    }
});

ExerciseCard.propTypes = {
    exercise: object.isRequired,
}

export default ExerciseCard;
