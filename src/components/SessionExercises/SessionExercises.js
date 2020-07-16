import React, {useMemo} from 'react';
import {View, StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import {array} from 'prop-types';
import {Title, useTheme} from 'react-native-paper';
import {ExerciseCard} from "../widgets";

function SessionExercises ({ exercises = [], selectExercise }) {
    const {colors} = useTheme();
    const {width} = useWindowDimensions();

    return (
        <View style={[styles.container, {backgroundColor: colors.onBackground}]}>
            <Title style={[styles.exercises_title,  {color: colors.text}]}> Exercises </Title>
            {useMemo(() => (
                <FlatList
                    style={[styles.flatList_container, {width}]}
                    initialNumToRender={10}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={exercises}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => <ExerciseCard  exercise={item} selectExercise={selectExercise} />}
                    ListFooterComponent={() => <View style={{width: 30}} />}
                />
            ), [exercises])}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 31,
        borderTopRightRadius: 31
    },
    exercises_title: {
        letterSpacing: .3,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 39,
        marginBottom: 30,
        marginHorizontal: 19
    },
    flatList_container: {
        paddingHorizontal: 19,
    }
});

SessionExercises.propTypes = {
    exercises: array.isRequired,
}

export {SessionExercises};
