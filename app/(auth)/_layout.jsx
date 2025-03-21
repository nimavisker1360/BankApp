import { Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="Register" options={{headerShown:false}}/>
        <Stack.Screen name="Login" options={{headerShown:false}}/>
        <Stack.Screen name="EmailOTP" options={{headerShown:false}}/>
  
    </Stack>
  )
}

export default AuthLayout