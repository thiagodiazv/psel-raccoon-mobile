import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack()
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#FF8D00" />
                </TouchableOpacity>
            </View>

            <View style={styles.task}>
                <Text style={styles.titleDetail}>Detalhes da tarefa</Text>
                <Text style={styles.taskProperty}>Tarefa:</Text>
                <Text style={styles.taskValue}>Lavar Louça</Text>

                <Text style={styles.taskProperty}>DATA:</Text>
                <Text style={styles.taskValue}>17/05/2021</Text>

                <Text style={styles.taskProperty}>DESCRIÇÃo:</Text>
                <Text style={styles.taskValue}>descrição estática</Text>

                
            </View>
        </View>
    );
}