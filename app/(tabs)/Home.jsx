import React from 'react'
import {View, Text} from "react-native";
import{useGlobalStore} from '../../context/globalStore'
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = () => {
    const{user,userData}=useGlobalStore()
    return (
        <SafeAreaView>
            <Text>Home</Text>
            <Text>{user.email}</Text>
            <Text>{userData?.firstName}</Text>
        </SafeAreaView>
    )
}
export default Home
