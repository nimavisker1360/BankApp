import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../../constants";

const OnboardingOne = () => {
  return (
    <View className="bg-primary w-full h-full justify-center">
      <View className="justify-center items-center">
        <Image
          resizeMode="contain"
          source={images.onboarding1}
          className="w-[319px] h-[305px]"
        />
      </View>
      <View className="">
        <Text className="text-center text-black-100 text-2xl font-bold mt-14">
          Secure Payment Solution
        </Text>
        <Text className="text-gray-300 text-center text-[16px] font-medium leading-6 ">
          Experience a seamless and secure payment solution with our integrated
          payment platform.
        </Text>
      </View>
    </View>
  );
};

export default OnboardingOne;
