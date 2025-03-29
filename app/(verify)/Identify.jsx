import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { images } from "../../constants";

const Page = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-5 pt-5">
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <TouchableOpacity className="p-2.5 -ml-2.5" onPress={() => router.back()}>
        <Text className="text-3xl font-bold text-black">←</Text>
      </TouchableOpacity>

      <View className="flex-1 items-center justify-center pb-24">
        <Text className="text-2xl font-bold text-center mb-4 text-[#222]">
          Let's Verify Your Identity
        </Text>

        <Text className="text-base text-center mb-10 text-[#555] px-8">
          We want to confirm your identity before you can use our service.
        </Text>

        <View className="w-full h-[400px] justify-center items-center mb-16">
          <Image
            source={images.identify}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          className="bg-[#2D7BF6] py-4 rounded-full w-full items-center"
          onPress={() => router.push("/(verify)/ProofResidence")}
        >
          <Text className="text-white text-lg font-semibold">
            Verify Identity
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;
