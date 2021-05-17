import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 245,
        color: '#737380'
    },

    taskList: {
        marginTop: 32,
    },

    task: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    taskProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    taskValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#FF8D00',
        fontSize: 15,
        fontWeight: 'bold',
    },

    form: {
        padding: 0,
        height: 60,
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingTop: 13,
        borderTopWidth: 1,
        borderColor: '#eee',
    },

    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#eee',
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#eee',
    },

    button: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF8D00',
        borderRadius: 4,
        marginLeft: 10,
    },

      removeButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});