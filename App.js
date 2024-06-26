import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ 
          title: 'Login',
          headerTitleAlign: 'center',
          headerStyle:{ backgroundColor: "#210045" },
          headerTintColor: "#FFF",
          headerTitleStyle: { fontWeight: "bold" },
         }}/>

        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ 
          title: 'Cadastro',
          headerTitleAlign: 'center',
          headerStyle:{ backgroundColor: "#210045" },
          headerTintColor: "#FFF",
          headerTitleStyle: { fontWeight: "bold" },
         }}/>

        <Stack.Screen name="Home" component={HomeScreen} options={{ 
          title: 'Filmes Populares',
          headerTitleAlign: 'center',
          headerStyle:{ backgroundColor: "#210045" },
          headerTintColor: "#FFF",
          headerTitleStyle: { fontWeight: "bold" },
         }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}