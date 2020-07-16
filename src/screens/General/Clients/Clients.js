import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container} from '../../../components';

function Clients () {
    return (
        <Container style={styles.container}>
            <Text style={{fontSize: 70, color: "#fff"}}> Clients </Text>
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

export default Clients;