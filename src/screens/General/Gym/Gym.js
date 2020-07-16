import React, {useEffect, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from '../../../components';
import {connect, useDispatch} from 'react-redux';
import {Title} from 'react-native-paper';

import * as actions from '../../../store/actions';
import {ClientsCards, SessionsCards, NextSessionDetails, GymHeader} from "../../../components"

function Gym ({ clients, sessions, user, navigation }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.loadingClients([]));
        dispatch(actions.loadingSessions([]));
    }, [])

    const search = () => {}

    const addSession = () => {}

    const selectSession = session => navigation.navigate("Sessions", {session: session});

    return (
        <Container style={styles.container}>
            <View style={styles.header}>
                <GymHeader searchPress={search} addSession={addSession} />
                <NextSessionDetails session={user.session} name={user.name} />
            </View>
            <View style={styles.body}>
                <Title style={styles.body_title}>Your training</Title>
                <Title style={styles.body_title}> sessions</Title>
                {useMemo(() => <SessionsCards sessions={sessions.sessions} isLoading={sessions.isLoading} selectSession={selectSession} />, [sessions])}
            </View>
            <View style={styles.bottom}>
                <Title style={styles.bottom_title}>Latest Clients</Title>
                {useMemo(() => <ClientsCards clients={clients.clients} isLoading={clients.isLoading} />, [clients])}
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: .33,
        justifyContent: "flex-end"
    },
    body: {
        flex: .46,
    },
    bottom: {
        flex: .25,
    },
    body_title: {
        fontSize:  26,
        letterSpacing: .36,
        fontWeight: 'bold',
        marginHorizontal: 18,
    },
    bottom_title: {
        fontSize:  18,
        letterSpacing: .27,
        fontWeight: 'bold',
        marginHorizontal: 18,
        marginBottom: 0
    }
});

const mapStateToProps = state => {
    return {
        clients: state.clients,
        sessions: state.sessions,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Gym);