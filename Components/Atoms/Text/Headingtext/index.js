import { View, Text } from 'react-native'
import React from 'react'

const HeadingText = props => {
  return (
    <View>
      <Text style={{fontSize:30,fontWeight:"bold"}}>{props?.Text}</Text>
    </View>
  )
}

export default HeadingText