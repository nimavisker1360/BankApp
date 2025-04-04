import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const Register = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-5 items-center justify-between">
      {/* Logo */}
      <View className="mt-10 mb-5">
        <Text className="text-4xl font-bold">ABank</Text>
      </View>

      {/* Main Content */}
      <View className="items-center">
        <Text className="text-3xl font-bold text-center mb-4">
          Send money for free,{"\n"}at lightning speed.
        </Text>

        {/* Paper airplane image */}
        <Image
          source={require("../../assets/images/Stock.png")}
          className="w-56 h-56"
          resizeMode="contain"
        />

        <Text className="text-base text-gray-500 text-center mt-4">
          Send money 24/7 without fees to any{"\n"}
          Papara account or IBAN. Request money{"\n"}
          from anyone. Set up recurring transfers for
        </Text>

        {/* Pagination dots */}
  
      </View>

      {/* Buttons */}
      <View className="w-full mb-10">
        <TouchableOpacity
          className="w-full p-4 rounded-md mb-4 border border-gray-200 bg-white"
          onPress={() => router.push("/(auth)/Login")}
        >
          <Text className="text-center text-lg font-medium">Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full p-4 rounded-md mb-6 bg-black"
          onPress={() => router.push("/(auth)/Signup")}
        >
          <Text className="text-center text-lg font-medium text-white">
            Create an Account
          </Text>
        </TouchableOpacity>

        {/* Security Declaration */}
        <TouchableOpacity>
          <Text className="text-center text-base">Security Declaration</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
