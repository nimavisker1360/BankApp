import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const ForgotPassword = () => {
  const [selectedMethod, setSelectedMethod] = useState("sms");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-5">
          <View className="absolute top-10 left-5 z-10">
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View className="flex-1 items-center justify-center">
            <Text className="text-3xl font-bold mt-16 mb-6">
              Forgot Password
            </Text>

            <Image
              source={require("../../assets/images/ForgotPass.jpg")}
              className="w-72 h-72"
              resizeMode="contain"
            />

            <Text className="text-lg text-gray-700 mb-5 text-center">
              Select which contact details should we use to reset your password
            </Text>

            <TouchableOpacity
              className={`w-full border border-gray-200 rounded-2xl p-4 mb-4 flex-row items-center ${
                selectedMethod === "sms" ? "bg-blue-50" : "bg-white"
              }`}
              onPress={() => setSelectedMethod("sms")}
            >
              <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center mr-4">
                <Ionicons name="chatbubble" size={24} color="#4285F4" />
              </View>
              <View>
                <Text className="text-gray-500">via SMS:</Text>
                <Text className="text-black text-lg font-medium">
                  +1 111 ******99
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className={`w-full border border-gray-200 rounded-2xl p-4 mb-8 flex-row items-center ${
                selectedMethod === "email" ? "bg-blue-50" : "bg-white"
              }`}
              onPress={() => setSelectedMethod("email")}
            >
              <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center mr-4">
                <Ionicons name="mail" size={24} color="#4285F4" />
              </View>
              <View>
                <Text className="text-gray-500">via Email:</Text>
                <Text className="text-black text-lg font-medium">
                  and***ley@yourdomain.com
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-full bg-[#4285F4] py-4 rounded-full items-center"
              onPress={() => router.push("/(auth)/ResetPassword")}
            >
              <Text className="text-white text-lg font-semibold">Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
