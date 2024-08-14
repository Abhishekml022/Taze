import { View, Text, TextInput, Dimensions } from 'react-native'
import React from 'react'

const CustomTextInput = props => {
    const {height,width}=Dimensions.get('screen')
    
  return (
    <View>
      <TextInput style={{borderBottomWidth:.5,height:height*0.030,width:width*.75,fontSize:17}} placeholder={props?.Placeholder} onChangeText={props.handletext} secureTextEntry={props?.Placeholder=="Password"?true:false} keyboardType={props?.Placeholder=='Phone number'?'number-pad':props?.Placeholder=='Email'?'email-address':'default'}/>
    </View>
  )
}

export default CustomTextInput