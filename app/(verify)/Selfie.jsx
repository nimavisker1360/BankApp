import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Selfie = () => {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(1000)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      className="flex-1 bg-white p-5"
      style={{ transform: [{ translateY: slideAnim }] }}
    >
      <TouchableOpacity className="mt-5 p-1" onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text className="text-3xl font-bold text-center mt-5 mb-2">
        Selfie with ID Card
      </Text>
      <Text className="text-base text-center mb-8 text-gray-500">
        Please face the camera holding your ID card.
      </Text>

      <View className="flex-1 justify-start items-center w-full mt-[-40] mb-5">
        <Image
          source={require("../../assets/images/IdProof.png")}
          className="w-full h-[85%] mt-2"
          style={{ transform: [{ scale: 1.2 }] }}
          resizeMode="contain"
        />
      </View>

      <View className="flex-row justify-between mb-10">
        <TouchableOpacity className="bg-[#f0f0f0] py-4 rounded-full w-[45%] items-center">
          <Text className="text-base font-bold text-[#4285F4]">Retake</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#4285F4] py-4 rounded-full w-[45%] items-center">
          <Text className="text-base font-bold text-white" onPress={() => router.push("/Profile")}>Continue</Text>
          
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Selfie;
