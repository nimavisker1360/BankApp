import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { images, icons } from "../../constants";
import { router } from "expo-router";

const OnboardingThree = () => {
  return (
    <View className="flex-1 bg-primary justify-center items-center px-6">
      <Image
        className="w-[319px] h-[305px]"
        resizeMode="contain"
        source={images.onboarding3}
      />

      <View className="mt-5 items-center">
        <Text className="text-black text-2xl font-bold text-center">
          Budgeting Made Simple
        </Text>
        <Text className="text-gray-500 text-sm text-center leading-5 mt-2">
          Take control of your finances with our intuitive budgeting tool.
        </Text>
      </View>

      <View className="mt-14 mx-3 w-full">
        <TouchableOpacity 
        onPress={()=>router.replace('/Register')}
        className="bg-secondary flex-row items-center justify-center p-3 rounded-full">
          <Text className="text-lg text-white">Get Started</Text>
          <Image
            className="w-[15px] h-[15px] ml-3"
            resizeMode="contain"
            source={icons.vectorUpArrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingThree;
