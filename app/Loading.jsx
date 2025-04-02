import { View, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { router, useLocalSearchParams } from "expo-router";

const PageLoading = () => {
  const { from } = useLocalSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate based on which screen we came from
      if (from === "pointer") {
        router.push("/(verify)/Congratulation");
      } else {
        router.push("/(tabs)/Home");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [from]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Animatable.View animation="fadeIn" iterationCount={1} duration={1000}>
        <ActivityIndicator size={80} color="#0000ff" />
      </Animatable.View>
    </View>
  );
};

export default PageLoading;
