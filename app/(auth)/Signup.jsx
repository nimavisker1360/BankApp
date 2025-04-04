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

const Signup = () => {
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
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: keyboardVisible ? "flex-start" : "center",
            paddingHorizontal: 20,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="absolute top-10 left-5 z-10">
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View className="items-center mt-16 mb-8">
            <Text className="text-3xl font-bold text-center text-[#1E1E1E]">
              Create an Account
            </Text>
            <Text className="text-center text-[#7D7D7D] mt-2">
              Register with your phone number, Google, or Facebook
            </Text>
          </View>

          <View className="w-full mb-8">
            <TextInput
              className="w-full p-3 text-base border border-gray-200 rounded-xl bg-white"
              placeholder="Phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>

          <TouchableOpacity className="self-center mb-8">
            <Text className="text-base text-[#1E1E1E]">Having trouble?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-full bg-[#E5E9EC] py-3 rounded-xl items-center mb-6"
            onPress={() => router.push("/(auth)/Experience")}
          >
            <Text className="text-[#1E1E1E] text-lg font-medium">Continue</Text>
          </TouchableOpacity>

          <View className="flex-row items-center justify-center mb-6">
            <View className="h-[1px] bg-gray-200 flex-1" />
            <Text className="text-[#7D7D7D] mx-4">or</Text>
            <View className="h-[1px] bg-gray-200 flex-1" />
          </View>

          <TouchableOpacity className="w-full bg-[#F0483E] py-3 rounded-xl items-center flex-row justify-center">
            
              <Text className="text-xl font-bold mr-12 text-[#Ffff]">G</Text>
        
            <Text className="text-white text-lg font-medium">
              Register with Google
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;
