import { View, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { router } from "expo-router";

const PageLoading = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/(verify)/Congratulation");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Animatable.View animation="fadeIn" iterationCount={1} duration={1000}>
        <ActivityIndicator size={80} color="#0000ff" />
      </Animatable.View>
    </View>
  );
};

export default PageLoading;