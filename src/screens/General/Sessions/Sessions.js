import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, SessionHeader, SessionDetails, SessionExercises} from '../../../components';

function Sessions ({route}) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const { session } = route.params;
        setSession(session);
    }, []);

    if(!session) return <Container style={styles.container}  />;

    return (
        <Container style={styles.container}>
            <SessionHeader
                backgroundSource={session.backImg}
                lastClientName={session.lastClientName}
                sessionName={session.name}
                level={session.level}
            />
            <View style={{marginTop: -50, zIndex: 4, borderTopLeftRadius: 31, borderTopRightRadius: 31}}>
                <SessionDetails />
            </View>
            <View style={{marginTop: -80, zIndex: 7, borderTopLeftRadius: 31, borderTopRightRadius: 31}}>
                <SessionExercises exercises={session.exercises} selectExercise={() => {}} />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {paddingTop: 40},
});

export default Sessions;