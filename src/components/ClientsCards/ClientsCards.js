import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {array, bool} from "prop-types";

import {ClientCard} from "../widgets";

const ClientsCards = ({clients , isLoading}) => {
    return (
        <FlatList
            style={styles.container}
            initialNumToRender={10}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={clients}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => <ClientCard client={item} />}
            ListFooterComponent={() => <View style={{width: 30}} />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        marginBottom: 10,
        paddingHorizontal: 18,
    },
});

ClientsCards.propTypes = {
    clients: array.isRequired,
    isLoading: bool.isRequired,
}

export {ClientsCards};
