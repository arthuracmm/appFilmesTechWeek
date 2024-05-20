import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.TextInput}
            placeholder='E-mail'
            value={email}
            onChangeText={setEmail}
            />

            <TextInput
            style={styles.TextInput}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry = {true}
            />

            <TouchableOpacity
            style = {styles.button}
            onPress={handleLogin} 
            >
                <Text style = {styles.buttonText}>
                    Entrar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button}
            onPress={handleCadastro} 
            >
                <Text style = {styles.buttonText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </View>
    )


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#393939',
    }
})