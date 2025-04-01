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
import Checkbox from "expo-checkbox";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
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
          }}
          keyboardShouldPersistTaps="handled"
          className="p-5"
        >
          <View className="absolute top-10 left-5 z-10">
            <TouchableOpacity onPress={() => router.push("/(auth)/Register")}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View
            className={`flex-1 items-center ${
              keyboardVisible ? "justify-start pt-20" : "justify-center"
            }`}
          >
            <View
              className={`items-center ${keyboardVisible ? "mb-5" : "mb-10"} ${
                keyboardVisible ? "mt-5" : "mt-16"
              }`}
            >
              <Text className="text-3xl font-bold">Login to your account</Text>
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

            <View className="flex-row items-center w-full mb-4 mt-2">
              <Checkbox
                value={rememberMe}
                onValueChange={setRememberMe}
                color={rememberMe ? "#4285F4" : undefined}
                className="h-5 w-5 rounded-sm"
              />
              <Text className=" ml-2 text-[12px]">Remember me</Text>
            </View>

            <TouchableOpacity
              className="w-full bg-[#4285F4] py-3 rounded-full items-center mb-3"
              onPress={() => router.push("/(tabs)/Home")}
            >
              <Text className="text-white text-lg font-semibold">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="mb-4 items-center"
              onPress={() => router.push("/(auth)/ForgotPassword")}
            >
              <Text className="text-[#4285F4] font-medium">
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <Text className={`text-lg ${keyboardVisible ? "mb-3" : "mb-6"}`}>
              or continue with
            </Text>

            <View
              className={`flex-row w-full justify-evenly ${
                keyboardVisible ? "mb-5" : "mb-10"
              }`}
            >
              <TouchableOpacity className="w-24 h-14 border border-gray-100 rounded-xl items-center justify-center">
                <Ionicons
                  name="logo-apple"
                  size={30}
                  color="black"
                  onPress={() => router.push("/(auth)/Experience")}
                />
              </TouchableOpacity>

              <TouchableOpacity className="w-24 h-14 border border-gray-100 rounded-xl items-center justify-center">
                <Ionicons name="logo-facebook" size={30} color="#4267B2" />
              </TouchableOpacity>

              <TouchableOpacity className="w-24 h-14 border border-gray-100 rounded-xl items-center justify-center">
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
              <Text className="text-base text-gray-700">
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/Signup")}>
                <Text className="text-base text-[#4285F4] font-medium">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
