import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {theme} from '../constants';
import AppNavigation from '../navigation/Navigation';
import Authentication from "../navigation/Authentication";

function App ({ user }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'RESTORE_TOKEN', token: null});
    }, []);

    return (
        <PaperProvider theme={theme}>
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }} forceInset={{ bottom: "always", top: "never" }}>
                <NavigationContainer>
                    {user?.userToken === null ? <Authentication /> : <AppNavigation />}
                </NavigationContainer>
            </SafeAreaView>
        </PaperProvider>
    );
};

const mapStateToProps = state => {
    return {
        user: state?.user,
    }
}

export default connect(mapStateToProps)(App);
