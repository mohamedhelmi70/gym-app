import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container} from '../../../components';

function Schedule () {
    return (
        <Container style={styles.container}>
            <Text style={{fontSize: 70, color:"#fff"}}> Schedule </Text>
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

export default Schedule;