import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {} from 'prop-types';

import {Container} from "../../../components";

function VerificationCode () {
    return (
        <Container style={styles.Container}>
            <Text> function VerificationCode </Text>
        </Container>
    )
}

VerificationCode.propTypes = {};

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default VerificationCode;