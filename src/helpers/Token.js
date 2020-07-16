import AsyncStorage from '@react-native-community/async-storage';

export const TokenManager = {
    startUp: async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            //Save token in header
        } catch (error) { throw error }
    },

    get: async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                return token;
            }
        } catch (error) { throw error }
    },

    set: async (token) => {
        try {
            await AsyncStorage.setItem('token', token);
            //Save token in header
        } catch (error) { throw error }
    },

    remove: async () => {
        try {
            await AsyncStorage.removeItem('token');
            //Remove token from header
        } catch (error) { throw error }
    }
}