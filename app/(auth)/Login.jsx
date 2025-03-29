import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white p-5 items-center justify-center">
      <View className="absolute top-10 left-5">
        <TouchableOpacity onPress={() => router.push("/(auth)/Register")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="items-center mb-10">
        <Text className="text-3xl font-bold">Login to Your Account</Text>
      </View>

      <View className="w-full space-y-4 mb-2">
        <View className="flex-row items-center p-3 rounded-xl bg-gray-50">
          <Ionicons name="mail" size={22} color="gray" />
          <TextInput
            className="flex-1 text-base ml-3"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="flex-row items-center p-3 rounded-xl bg-gray-50">
          <Ionicons name="lock-closed" size={22} color="gray" />
          <TextInput
            className="flex-1 text-base ml-3"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>

      <View className="flex-row items-center w-full mb-6 mt-4">
        <Checkbox
          value={rememberMe}
          onValueChange={setRememberMe}
          color={rememberMe ? "#4285F4" : undefined}
          className="h-5 w-5 rounded-sm"
        />
        <Text className="text-base ml-2">Remember me</Text>
      </View>

      <TouchableOpacity
        className="w-full bg-[#4285F4] py-3 rounded-full items-center mb-4"
        onPress={() => console.log("Sign In")}
      >
        <Text className="text-white text-lg font-semibold">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="mb-6"
        onPress={() => console.log("Forgot Password")}
      >
        <Text className="text-[#4285F4] font-medium">Forgot Password?</Text>
      </TouchableOpacity>

      <Text className="text-lg mb-6">or continue with</Text>

      <View className="flex-row w-full justify-evenly mb-10">
        <TouchableOpacity className="w-24 h-14 border border-gray-200 rounded-xl items-center justify-center">
          <Ionicons name="logo-apple" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity className="w-24 h-14 border border-gray-200 rounded-xl items-center justify-center">
          <Ionicons name="logo-facebook" size={30} color="#4267B2" />
        </TouchableOpacity>

        <TouchableOpacity className="w-24 h-14 border border-gray-200 rounded-xl items-center justify-center">
          <Image
            source={{
              uri: "https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png",
            }}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View className="flex-row">
        <Text className="text-base text-gray-700">Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/Signup")}>
          <Text className="text-base text-[#4285F4] font-medium">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
