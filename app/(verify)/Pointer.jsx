import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Pointer = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#1A1A25] p-4 items-center pt-10">
      <TouchableOpacity
        className="absolute top-6 left-4 z-10 p-2"
        onPress={() => router.back()}
      >
        <Text className="text-white text-3xl">←</Text>
      </TouchableOpacity>

      <Text className="text-white text-2xl font-bold mt-20 text-center">
        Pointer Verification
      </Text>
      <Text className="text-white text-base mt-2.5 mb-10 text-center">
        Please place your finger on the fingerprint scanner
      </Text>

      <View className="w-full h-[300px] rounded-3xl border-2 border-[#4285F4] bg-white justify-center items-center overflow-hidden">
        <View className="w-[90%] h-[80%] items-center justify-center">
          {/* ID Card Display */}
          <View className="w-full bg-[#4285F4] rounded-xl p-3 flex-row mb-4">
            <View className="w-[30%] items-center justify-between">
              <Image
                source={require("../../assets/images/IDCARD.jpg")}
                className="w-16 h-16 rounded-full bg-[#e0e0e0] mb-2"
              />
              <Text className="text-white italic font-['cursive'] text-xs">
                Signature
              </Text>
            </View>

            <View className="w-[70%] pl-2">
              <View className="flex-row mb-0.5">
                <Text className="text-white w-16 text-[8px]">ID</Text>
                <Text className="text-white text-[8px] font-bold">
                  3637 4738 4899
                </Text>
              </View>
              <View className="flex-row mb-0.5">
                <Text className="text-white w-16 text-[8px]">Name</Text>
                <Text className="text-white text-[8px] font-bold">
                  Andrew Ainsley
                </Text>
              </View>
              <View className="flex-row mb-0.5">
                <Text className="text-white w-16 text-[8px]">DoB</Text>
                <Text className="text-white text-[8px] font-bold">
                  12/27/1995
                </Text>
              </View>
              <View className="flex-row mb-0.5">
                <Text className="text-white w-16 text-[8px]">Gender</Text>
                <Text className="text-white text-[8px] font-bold">Male</Text>
              </View>
              <View className="flex-row mb-0.5">
                <Text className="text-white w-16 text-[8px]">Address</Text>
                <Text className="text-white text-[8px] font-bold">
                  3517 W. Gray
                </Text>
              </View>
            </View>
          </View>

          <View className="bg-[#4285F4] rounded-xl p-3 w-full">
            <Text className="text-white text-center font-bold">
              Place your finger on the scanner
            </Text>
          </View>

          <View className="mt-4 w-full bg-gray-200 h-2 rounded-full">
            <View className="bg-[#4285F4] h-2 rounded-full w-[60%]" />
          </View>
        </View>
      </View>

      <View className="mt-8 w-full px-4">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <View className="w-10 h-10 rounded-full bg-[#4285F4] items-center justify-center">
              <Text className="text-white font-bold">1</Text>
            </View>
            <Text className="text-white ml-2">Place finger</Text>
          </View>
          <Text className="text-green-500">✓</Text>
        </View>

        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <View className="w-10 h-10 rounded-full bg-[#4285F4] items-center justify-center">
              <Text className="text-white font-bold">2</Text>
            </View>
            <Text className="text-white ml-2">Scanning</Text>
          </View>
          <Text className="text-white">In progress...</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="w-10 h-10 rounded-full bg-gray-500 items-center justify-center">
              <Text className="text-white font-bold">3</Text>
            </View>
            <Text className="text-gray-400 ml-2">Verification</Text>
          </View>
          <Text className="text-gray-400">Waiting</Text>
        </View>
      </View>

      <TouchableOpacity
        className="bg-[#4285F4] px-8 py-3 rounded-xl mt-8"
        onPress={() => router.push("/Loading")}
      >
        <Text className="text-white font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pointer;
