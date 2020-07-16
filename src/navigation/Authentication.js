import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signout, ForgetPassword, VerificationCode, Splash} from '../screens';
import {bool} from 'prop-types';

const Stack = createStackNavigator();

function Authentication ({ isLoading }) {
    return (
        <Stack.Navigator>
            {isLoading ?
                <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                :
                <>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
                    <Stack.Screen name="Signout" component={Signout} options={{headerShown: false}}  />
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}}  />
                    <Stack.Screen name="VerfificationCode" component={VerificationCode} options={{headerShown: false}}  />
                </>
            }
        </Stack.Navigator>
    )
}

Authentication.propTypes = {
    isLoading: bool.isRequired,
}

const mapStateToProps = state => {
    return {
        isLoading: state?.user?.isLoading,
    }
}

export default connect(mapStateToProps)(Authentication);