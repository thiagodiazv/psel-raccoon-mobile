import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    task: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        marginTop: 48,
       
    },

    taskProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    taskValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
        marginBottom: 8,
    },

    titleDetail: {
        fontWeight: 'bold',
        fontSize: 18, 
    },


    detailsButtonText: {
        color: '#FF8D00',
        fontSize: 15,
        fontWeight: 'bold',
    },
});