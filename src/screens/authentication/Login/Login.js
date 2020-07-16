import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import * as actions from '../../../store/actions';
import {Container} from '../../../components';

const Login = () => {
    const dispatch = useDispatch();
    const { colors } = useTheme();

    return (
        <Container style={styles.container}>
            <Button
                mode="contained"
                uppercase={false}
                theme={{colors: {primary: colors.accent}}}
                labelStyle={{color: colors.text}}
                onPress={() => dispatch(actions.login("sxnksjnxsd"))}
            >
                Login
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
