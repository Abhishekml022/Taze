import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Components/Screens/Login';
import Signup from './Components/Screens/Signup';
const stack=createStackNavigator()
const App=()=> {

  return (
    <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown:false}}>
      <stack.Screen name='Login' component={Login}/>
      <stack.Screen name='Signup' component={Signup}/>
    </stack.Navigator>
    </NavigationContainer>
)}


export default App
