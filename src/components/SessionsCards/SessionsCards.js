import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {array, bool, func} from 'prop-types';

import {SessionCard} from "../widgets";

function SessionsCards ({sessions, isLoading, selectSession}) {
    return (
        <FlatList
            style={styles.container}
            initialNumToRender={10}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={sessions}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => <SessionCard  session={item} selectSession={selectSession} />}
            ListFooterComponent={() => <View style={{width: 30}} />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 28,
        marginBottom: 10,
        paddingHorizontal: 18,
    }
});

SessionsCards.propTypes = {
    sessions: array.isRequired,
    isLoading: bool.isRequired,
    selectSession: func.isRequired,
};

export {SessionsCards};
