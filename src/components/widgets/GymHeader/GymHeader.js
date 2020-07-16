import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { func } from 'prop-types';

import {plus, search} from "../../../assets";

function GymHeader ({searchPress, addSession}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={searchPress}>
                <Image source={search} style={{height: 40, width: 40}} />
            </TouchableOpacity>
            <TouchableOpacity onPres={addSession}>
                <Image source={plus} style={{height: 45, width: 45}} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 18,
        marginBottom: 17
    },
});

GymHeader.propTypes = {
    searchPress: func.isRequired,
    addSession: func.isRequired,
}

export default GymHeader;
