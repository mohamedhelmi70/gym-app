import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container} from '../../../components';

function Signout () {
    return (
        <Container style={styles.container}>
            <Text>Signout</Text>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Signout;