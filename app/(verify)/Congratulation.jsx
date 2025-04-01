import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";

const Page = () => {
  useEffect(() => {
    // Auto redirect after a few seconds (optional)
    const timer = setTimeout(() => {
      router.replace("/NewPin");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    router.replace("/NewPin");
  };

  return (
    <View className="flex-1 bg-white justify-center items-center p-6">
      {/* Blue circle with checkmark shield */}
      <View className="bg-blue-500 w-24 h-24 rounded-full items-center justify-center mb-6 relative">
        <View className="bg-white p-2 rounded-md">
          <Image
            source={require("../../assets/icons/correct.png")}
            className="w-8 h-8"
          />
        </View>

        {/* Small decorative circles */}
        <View className="absolute -top-4 -left-4 bg-blue-400 w-4 h-4 rounded-full" />
        <View className="absolute top-0 right-10 bg-blue-300 w-2 h-2 rounded-full" />
        <View className="absolute bottom-2 -right-5 bg-blue-400 w-3 h-3 rounded-full" />
        <View className="absolute -bottom-2 left-6 bg-blue-300 w-2 h-2 rounded-full" />
        <View className="absolute top-10 -left-6 bg-blue-300 w-2 h-2 rounded-full" />
      </View>

      {/* Congratulations text */}
      <Text className="text-blue-500 text-3xl font-bold mb-4">
        Congratulations!
      </Text>

      {/* Description text */}
      <Text className="text-gray-700 text-center text-lg mb-8">
        Your account is ready to use. You will be redirected to the Home page in
        a few seconds.
      </Text>

      {/* Continue button */}
      <TouchableOpacity
        onPress={handleContinue}
        className="bg-blue-500 w-full py-4 rounded-full items-center"
      >
        <Text className="text-white text-lg font-medium">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
