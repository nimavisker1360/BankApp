import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingView from "../components/OnboardingView";
import { icons } from "../constants";
import { router } from "expo-router";

const Index = () => {
  const [activeItem, setActiveItem] = useState(0);
  const timerRef = useRef(null);

  // Set up auto timer for screen changes
  useEffect(() => {
    // Clear previous timer if exists
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Only set timer if not on last screen
    if (activeItem < 2) {
      timerRef.current = setTimeout(() => {
        setActiveItem((prevState) => prevState + 1);
      }, 3000); // 5 seconds delay
    }

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeItem]);

  function handleNext() {
    // Clear the current timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (activeItem < 2) {
      setActiveItem(activeItem + 1);
    } else {
      router.push("/(auth)/Signup");
    }
  }

  // Function to navigate to specific screen
  function goToScreen(index) {
    // Clear the current timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActiveItem(index);
  }

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <OnboardingView activeItem={activeItem} />

      <View className="flex-row justify-between items-center mx-4 mb-12">
        {activeItem !== 2 ? (
          <TouchableOpacity onPress={() => router.replace("/(auth)/Register")}>
            <Text className="text-gray-200 text-center text-lg">Skip</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} /> // Empty view for spacing
        )}

        <View className="flex-row items-center justify-center">
          <TouchableOpacity onPress={() => goToScreen(0)}>
            <View
              className={`w-[12px] h-[12px] rounded-full ${
                activeItem === 0 ? "bg-secondary" : "bg-gray-100"
              }`}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => goToScreen(1)}>
            <View
              className={`w-[12px] mx-2 h-[12px] rounded-full ${
                activeItem === 1 ? "bg-secondary" : "bg-gray-100"
              }`}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => goToScreen(2)}>
            <View
              className={`w-[12px] h-[12px] rounded-full ${
                activeItem === 2 ? "bg-secondary" : "bg-gray-100"
              }`}
            />
          </TouchableOpacity>
        </View>

        {activeItem !== 2 ? (
          <TouchableOpacity
            onPress={handleNext}
            className="bg-secondary p-5 rounded-full items-center justify-center"
          >
            <Image resizeMode="contain" source={icons.arrowRM} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} /> // Empty view for spacing
        )}
      </View>
    </SafeAreaView>
  );
};

export default Index;
