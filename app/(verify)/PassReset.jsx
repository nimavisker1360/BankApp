import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

const PassReset = () => {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleResetPassword = () => {
    router.replace("/login");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView className="flex-grow px-5 pb-10 pt-12">
        <View className="flex-row items-center mt-10 mb-10">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold ml-4">Forgot Password</Text>
        </View>

        <View className="items-center px-5 mt-6">
          <View className="w-30 h-30 rounded-full bg-[#f0f7ff] justify-center items-center mb-8">
            <Ionicons name="lock-open-outline" size={60} color="#2979FF" />
          </View>

          <Text className="text-2xl font-bold mb-8">Enter to Your Email</Text>

          <View className="flex-row items-center w-full h-[60px] rounded-lg bg-[#f5f5f5] mb-5 px-4">
            <Ionicons
              name="mail-outline"
              size={24}
              color="#888"
              className="mr-2"
            />
            <TextInput
              className="flex-1 h-full text-base"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View className="flex-row items-center self-start mb-8">
            <TouchableOpacity
              className={`w-6 h-6 border border-gray-300 rounded justify-center items-center ${
                rememberMe ? "bg-[#f0f0f0]" : ""
              }`}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe && (
                <Ionicons name="checkmark" size={18} color="#000" />
              )}
            </TouchableOpacity>
            <Text className="text-base text-gray-700 ml-2">Remember me</Text>
          </View>

          <TouchableOpacity
            className="w-full h-14 bg-[#2979FF] rounded-full justify-center items-center mb-5"
            onPress={() => router.replace("/Login")}
          >
            <Text className="text-white text-lg font-bold">Reset Password</Text>
          </TouchableOpacity>

          <TouchableOpacity className="mb-8">
            <Text className="text-[#2979FF] text-base">
              Remember the password?
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center items-center mt-16 py-2">
          <Text className="text-base text-gray-700">
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/Signup")}>
            <Text className="text-base text-[#2979FF] font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PassReset;
