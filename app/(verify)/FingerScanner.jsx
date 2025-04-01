import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const FingerScanner = () => {
  const router = useRouter();
  const [showCongratulation, setShowCongratulation] = useState(false);
  const slideAnim = new Animated.Value(400);

  useEffect(() => {
    if (showCongratulation) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [showCongratulation]);

  const handleContinue = () => {
    setShowCongratulation(true);
  };

  const handleFinalContinue = () => {
    router.push("/(tabs)");
  };

  return (
    <View className="flex-1 bg-gray-50 p-6">
      <StatusBar style="dark" />

      {/* Back Icon */}
      <View className="w-full mb-6 mt-5">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Header */}
      <View className="w-full mb-8">
        <Text className="text-3xl font-bold text-center text-blue-900">
          Fingerprint Verification
        </Text>
        <Text className="text-gray-600 text-center mt-2">
          Place your finger on the scanner to verify your identity
        </Text>
      </View>

      {/* Fingerprint Scanner Area */}
      <View className="flex-1 w-full items-center justify-center">
        <View className="bg-white rounded-full p-4 shadow-lg mb-6">
          <View>
            <Image
              source={require("../../assets/images/fingerprint.png")}
              className="w-60 h-60"
              style={{ width: 240, height: 240 }}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Scanning Indicator */}
        <View className="items-center mt-4">
          <View className="flex-row items-center">
            <View className="h-3 w-3 rounded-full bg-blue-500 mr-2 animate-pulse" />
            <Text className="text-blue-800 font-medium">Scanning...</Text>
          </View>
          <Text className="text-gray-500 text-center mt-2">
            Please keep your finger steady on the scanner
          </Text>
        </View>
      </View>

      {/* Buttons */}
      <View className="w-full mt-10">
        <TouchableOpacity
          className="bg-blue-600 py-4 px-6 rounded-xl w-full items-center"
          onPress={handleContinue}
        >
          <Text className="text-white font-semibold text-lg">Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-4 py-2">
          <Text className="text-blue-700 text-center font-medium">
            Use Alternative Method
          </Text>
        </TouchableOpacity>
      </View>

      {/* Congratulation Modal */}
      <Modal
        visible={showCongratulation}
        transparent={true}
        animationType="fade"
        statusBarTranslucent
      >
        <View className="flex-1 bg-black/70 justify-center items-center p-6">
          <Animated.View
            className="bg-white rounded-3xl p-8 w-full items-center shadow-lg"
            style={{
              transform: [{ translateY: slideAnim }],
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            {/* Congratulation Image */}
            <View className="mb-6">
              <Image
                source={require("../../assets/images/congragulation.png")}
                style={{ width: 160, height: 160 }}
                resizeMode="contain"
              />
            </View>

            {/* Congratulation Text */}
            <Text className="text-3xl font-bold text-center text-blue-600 mb-4">
              Congratulations!
            </Text>

            <Text className="text-gray-700 text-center mb-8 text-base">
              Your account is ready to use. You will be redirected to the Home
              page in a few seconds.
            </Text>

            {/* Continue Button */}
            <TouchableOpacity
              className="bg-blue-600 py-4 px-6 rounded-full w-full items-center"
              onPress={handleFinalContinue}
            >
              <Text className="text-white font-semibold text-lg">Continue</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default FingerScanner;
