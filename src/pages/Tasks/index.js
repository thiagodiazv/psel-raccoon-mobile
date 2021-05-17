import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, Alert, AsyncStorage } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

    export default function Tasks() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    async function addTask() {
        if(newTask === "") {
            return;
        }

        const search = task.filter(task => task === newTask);

        if(search.length !== 0) {
            Alert.alert("Atenção", "Tarefa repetida!");
            return;
        }

        setTask([ ...task, newTask]);
        setNewTask('');

        Keyboard.dismiss();
    }


    async function removeTask(item) {
        Alert.alert(
            "Deletar Tarefa?",
            "Tem certeza de que gostaria de deletar esta tarefa?",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        return;
                    },
                    style: 'cancel'
                },
                {
                    text: "OK",
                    onPress: () => setTask(task.filter(tasks => tasks !== item))
                }
            ],
            {cancelable: false}
        );
    }

    async function removeTask2(item) {
         Alert.alert(
            "Concluir Tarefa?",
            "Tem certeza de que gostaria de concluir esta tarefa?",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        return;
                    },
                    style: 'cancel'
                },
                {
                    text: "OK",
                    onPress: () => setTask(task.filter(tasks => tasks !== item))
                }
            ],
            {cancelable: false}
        );
    }

    useEffect(() => {
        async function carregaDados() {
            const task = await AsyncStorage.getItem("task");

            if(task) {
                setTask(JSON.parse(task))
            }
        }
        carregaDados();
    }, [])

    useEffect(() => {
        async function salvaDados() {
            AsyncStorage.setItem("task", JSON.stringify(task) )
        }
        salvaDados();
    }, [task])

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={0}
            behavior="padding"
            style={{ flex: 1 }}
            enabled={ Platform.OS === "ios" }
        >
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 tarefas</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bom dia!</Text>
            <Text Style={styles.description}>Escolha uma das tarefas da lista e dê às boas-vindas à produtividade!</Text>

            <FlatList
                data={task}
                style={styles.taskList}
                keyExtractor={item => String(item)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={styles.task}>
                    <Text style={styles.taskProperty}>Tarefa:</Text>
                    <Text style={styles.taskValue}>{item}</Text>


                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={() => removeTask2(item)}
                    >
                        <Text style={styles.detailsButtonText}>Completar Tarefa</Text>
                        <Feather name="check-square" size={25} color="#FF8F00" />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={() => removeTask(item)}
                    >
                        <Text style={styles.detailsButtonText}>Excluir tarefa</Text>
                        <Feather name="trash-2" size={25} color="#FF8F00" />
                    </TouchableOpacity>
                    

                    <TouchableOpacity 
                        style={styles.detailsButton}  
                        onPress={navigateToDetail}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#FF8D00" />
                    </TouchableOpacity>
                </View>
                )}
            />
            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholderTextColor="#999"
                autoCorrect={true}
                placeholder="Adicione uma tarefa!"
                maxLength={25}
                onChangeText={text => setNewTask(text)}
                value={newTask}
                />
                <TouchableOpacity style={styles.button} onPress={() => addTask()}>
                    <Feather name="plus-circle" size={25} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
    );
}