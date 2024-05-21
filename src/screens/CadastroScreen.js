import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CadastroScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const handleCadastro = async () => {
        const user = {
            email, password
        }
        if(!email || !password){
            alert('Preencha todos os campos')
            return
        }        

        await AsyncStorage.setItem('user', JSON.stringify(user))
        navigation.navigate('Login')
    }


return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder='E-mail'
        value={email}
        onChangeText={setEmail}
        />

        <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry = {true}
        />

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
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#210045",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: "90%",
      backgroundColor: "#fff",
    },
    button: {
      backgroundColor: "#7024ED",
      padding: 10,
      borderRadius: 5,
      width: "90%",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
    },
  });
  
  export default CadastroScreen;