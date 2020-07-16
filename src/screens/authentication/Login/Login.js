import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import * as actions from '../../../store/actions';
import {Container} from '../../../components';

const Login = () => {
    const dispatch = useDispatch();

    return (
        <Container style={styles.container}>
            <Button
                mode="contained"
                onPress={() => dispatch(actions.login("sxnksjnxsd"))}
            >
                login
            </Button>
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

export default Login;
