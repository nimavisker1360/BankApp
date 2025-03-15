import React from "react";
import { View, Text, Image } from "react-native";
import { images } from "../../constants";

const OnboardingTwo = () => {
  return (
    <View className="flex-1 bg-primary justify-center items-center px-6">
      <Image
        className="w-[319px] h-[305px]"
        resizeMode="contain"
        source={images.onboarding2}
      />

      <View className="mt-5 items-center">
        <Text className="text-black text-2xl font-bold text-center">
          Smart Investing Opportunities
        </Text>
        <Text className="text-gray-500 text-sm text-center leading-5 mt-2">
          Explore a world of investment possibilities with our smart investing
          feature
        </Text>
      </View>
    </View>
  );
};
export default OnboardingTwo;
