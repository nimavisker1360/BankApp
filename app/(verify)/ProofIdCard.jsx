import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ProofIdCard = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#1A1A25] p-4 items-center pt-10">
      <TouchableOpacity
        className="absolute top-9 left-4 z-10 p-2"
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text className="text-white text-2xl font-bold mt-20 text-center">
        Photo ID Card
      </Text>
      <Text className="text-white text-base mt-2.5 mb-10 text-center">
        Please point the camera at the ID card
      </Text>

      <View className="w-full h-[300px] rounded-3xl border-2 border-[#4285F4] bg-white justify-center items-center overflow-hidden">
        <View className="w-[90%] h-[80%] justify-center items-center">
          <Image
            source={require("../../assets/images/IDCARD.jpg")}
            className="w-full h-full"
          />
        </View>
      </View>

      <View className="flex-row items-center justify-center mt-15 w-full">
        <TouchableOpacity className="w-[90px] h-[90px] rounded-full bg-[#4285F4] justify-center items-center mx-6 mt-12">
          <View className="w-[80px] h-[80px] rounded-full border-2 border-white justify-center items-center">
            <Ionicons name="camera" size={40} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProofIdCard;
