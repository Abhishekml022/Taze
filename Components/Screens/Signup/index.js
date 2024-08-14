import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../Atoms/Button";
import CustomTextInput from "../../Atoms/TextInput";
import HeadingText from "../../Atoms/Text/Headingtext";
import { emailvalidation, NameValidation, PasswordValidation, PhoneValidation } from "../../Atoms/Validations/Validations";

const Signup = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [Name, setName] = useState("");


  const SignupPress=()=>{
    if(NameValidation(Name)){
        if(PhoneValidation(Phonenumber)){

    if(emailvalidation(Email)){
      if(PasswordValidation(Password)){
        Alert.alert('Signup Success',"Your Account was created Successfully !!!")
      }
      else{
        Alert.alert("Password Does not meet Required Policy","Password length should be more than 5 characters & Start With a Capital letter")
      }
    }
    else{
      Alert.alert("Email is in Invalid Format","The email is incorrect pls try again")
    }
  }
  else{
    Alert.alert("Invalid Mobile Number","The Mobile is in incorrect format")
  }
}
else{
  Alert.alert("Error","Name Must not contain numbers")
}
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#fff",
          marginVertical: 25,
        }}
      >
        Welcome to Taze
      </Text>
      <View style={styles.loginpanel}>
        <HeadingText Text='Signup'/>

        <View
          style={{
            height: "70%",
            width: "90%",
            justifyContent: "space-evenly",
            alignSelf: "center",
          }}
        >
          <CustomTextInput
            Placeholder="Name"
            handletext={(text) => setName(text)}
          />
          <CustomTextInput
            Placeholder="Phone number"
            handletext={(text) => setPhonenumber(text)}
          />
          <CustomTextInput
            Placeholder="Email"
            handletext={(text) => setEmail(text)}
          />
                    <CustomTextInput
            Placeholder="Password"
            handletext={(text) => setPassword(text)}
            Masked="true"
          />
          <CustomButton Name="Create Account"  action={SignupPress}/>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={{alignSelf:'center'}}>Are your an Existing user?</Text>
 <Text style={{alignSelf:'center',color:'#8059eb'}}>Login here</Text>
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

export default Signup;
