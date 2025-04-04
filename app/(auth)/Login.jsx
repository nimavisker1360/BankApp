import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <View className="flex-1 px-5">
          <View className="absolute top-10 left-5 z-10">
            <TouchableOpacity onPress={() => router.push("/Register")}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View className="items-center mt-24 mb-12">
            <Text className="text-3xl font-bold text-center text-[#1E1E1E]">
              Log in
            </Text>
            <Text className="text-center text-[#7D7D7D] mt-4">
              Login with your  email address or Google account
            </Text>
           
          </View>

          <View className="w-full mb-28">
            <TextInput
              className="w-full p-4 text-base border border-gray-100 rounded-md bg-white"
              placeholder="Email address or phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>

          <TouchableOpacity
            className={`self-center ${keyboardVisible ? "mb-8" : "mb-20"}`}
          >
            <Text className="text-base text-[#1E1E1E]">Having trouble?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-full bg-[#E5E9EC] py-4 rounded-md items-center mb-12"
            onPress={() => router.push("/(tabs)/Home")}
          >
            <Text className="text-[#1E1E1E] text-lg font-medium">Continue</Text>
          </TouchableOpacity>

          <View className="flex-row items-center justify-center mb-12">
            <View className="h-[1px] bg-gray-200 flex-1" />
            <Text className="text-[#7D7D7D] mx-4">or</Text>
            <View className="h-[1px] bg-gray-200 flex-1" />
          </View>

          <TouchableOpacity className="w-full bg-[#F0483E] py-4 rounded-md items-center flex-row justify-center">
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/000000/google-logo.png",
              }}
              style={{ width: 24, height: 24 }}
              className="mr-3"
            />
            <Text className="text-white text-lg font-medium">
              Register with Google
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
