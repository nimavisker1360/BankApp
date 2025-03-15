import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { useState } from "react";
import { Link } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView className="bg-primary h-full w-full justify-center px-3">
      <View className="w-full justify-center items-center mt-7">
        <Text className="text-2xl font-pbold text-secondary">Welcome</Text>
        <Text className="text-gray-200 text-lg">Login to get Started</Text>
      </View>

      <View className="mt-6 rounded-3xl border-2 border-[#E7E7E7] flex-row items-center w-full h-[56px] px-4">
        <Image className="w-6 h-6" source={icons.phone} resizeMode="contain" />
        <TextInput
          className="flex-1 font-pmedium ml-2"
          placeholder="Phone number"
          keyboardType="number-pad"
        />
      </View>

      <View className="mt-6 rounded-3xl border-2 border-[#E7E7E7] flex-row items-center w-full h-[56px] px-4">
        <Image className="w-6 h-6" source={icons.lock} resizeMode="contain" />
        <TextInput
          className="flex-1 font-pmedium ml-2"
          placeholder="Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            className="w-6 h-6"
            source={!showPassword ? icons.eye : icons.eyeHide}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="bg-secondary mt-5 flex-row p-3 rounded-full items-center justify-center">
        <Text className="ml-3 text-lg text-white items-center justify-center">
          Submit
        </Text>
      </TouchableOpacity>

      <View className="w-full justify-end items-center pt-3 flex-row">
        <Text className="font-pregular text-gray-200">
          Don't have an account?
        </Text>
        <Link href="/Register" className="text-lg text-secondary mx-2">
          Register
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Login;
