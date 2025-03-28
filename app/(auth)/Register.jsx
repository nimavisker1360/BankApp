import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Register = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5 items-center justify-center">
      <View className="mb-5"></View>

      <Text className="text-[28px] font-bold mb-4 text-center">
        Welcome Back!
      </Text>
      <Text className="text-base text-gray-700 text-center mb-10 px-5">
        Hello there, personalize your financial journey for maximum returns and
        peace of mind on AllPay.
      </Text>

      <View className="w-full mb-8">
        <TouchableOpacity
          className="flex-row items-center justify-center p-4 rounded-xl mb-4 border border-gray-200 bg-white"
          onPress={() => router.push("/(auth)/Login")}
        >
          <Ionicons name="logo-apple" size={24} color="black" />
          <Text className="text-base ml-3 font-medium">
            Continue with Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center justify-center p-4 rounded-xl mb-4 border border-gray-200 bg-white"
          onPress={() => router.push("/(auth)/Login")}
        >
          <Image
            source={{
              uri: "https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png",
            }}
            className="w-6 h-6"
            resizeMode="contain"
          />
          <Text className="text-base ml-3 font-medium">
            Continue with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center justify-center p-4 rounded-xl mb-4 border border-gray-200 bg-white"
          onPress={() => router.push("/(auth)/Login")}
        >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
            }}
            className="w-6 h-6"
            resizeMode="contain"
          />
          <Text className="text-base ml-3 font-medium">
            Continue with Email
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row mb-8">
        <Text className="text-base text-gray-700">Already have account? </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/Login")}>
          <Text className="text-base text-[#4285F4] font-medium">Log In</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-sm text-gray-500 text-center">
        By continuing, you accept the Terms Of Use and{"\n"}
        <Text className="text-gray-700 font-medium">Privacy Policy</Text>.
      </Text>
    </SafeAreaView>
  );
};

export default Register;
