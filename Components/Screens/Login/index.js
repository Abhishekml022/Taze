import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../Atoms/Button";
import CustomTextInput from "../../Atoms/TextInput";
import HeadingText from "../../Atoms/Text/Headingtext";
import{useFonts}from 'expo-font';
import { emailvalidation, PasswordValidation } from "../../Atoms/Validations/Validations";

const Login = () => {
  const navigation = useNavigation();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
const Loginpress=()=>{
  if(emailvalidation(Username)){
    if(PasswordValidation(Password)){
      Alert.alert('Login Success',"Your Login Was a Success")
    }
    else{
      Alert.alert("Password Does not meet Required Policy","Password length should be more than 5 characters & Start With a Capital letter")
    }
  }
  else{
    Alert.alert("Email is in Invalid Format","The email is incorrect pls try again")
  }
}
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#fff",
          marginVertical: 25,}}
      >
       Welcome to Taze
      </Text>
      <View style={styles.loginpanel}>
        <HeadingText Text='Login' />

        <View
          style={{
            height: "50%",
            width: "90%",
            justifyContent: "space-evenly",
            alignSelf: "center",
          }}
        >
          <CustomTextInput
            Placeholder="Username"
            handletext={(text) => setUsername(text)}
          />
          <CustomTextInput
            Placeholder="Password"
            handletext={(text) => setPassword(text)}
          />

          <CustomButton Name="Login" action={Loginpress}/>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
        <Text style={{alignSelf:'center'}}>Are your a new user?</Text>
 <Text style={{alignSelf:'center',color:'#8059eb'}}>Signup here</Text>
 </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#8059eb",
  },
  loginpanel: {
    backgroundColor: "#fff",
    height: "70%",
    width: "90%",
    borderRadius: 25,
    padding: 8,
    paddingTop: 50,
  },
});

export default Login;
