import { View, Text, TouchableOpacity, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'

const CustomButton = props => {
    //props are Name,Bgcolor,Txtcolor,action
    const {height,width}=Dimensions.get('screen')
  return (
    <View >
        <TouchableOpacity style={{height:height*.075,width:width*.80,backgroundColor:props?.Bgcolor?props.Bgcolor:'#8059eb',borderRadius:12,padding:8,alignItems:'center',justifyContent:'center'}} onPress={props.action}>
        <Text style={{fontSize:25,color:props?.Txtcolor?props.Txtcolor:'#fff',fontWeight:'bold'}}> {props.Name} </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton