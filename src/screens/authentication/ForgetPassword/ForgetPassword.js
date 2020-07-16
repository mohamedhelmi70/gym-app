import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {} from 'prop-types';

import {Container} from "../../../components";

function ForgetPassword () {
    return (
        <Container style={styles.Container}>
            <Text>Forget Password</Text>
        </Container>
    )
}

ForgetPassword.propTypes = {

}

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ForgetPassword;

