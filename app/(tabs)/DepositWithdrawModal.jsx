import React from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import DepositWithdraw from "../components/DepositWithdraw";

const DepositWithdrawModal = () => {
  return (
    <View className="flex-1">
      <Stack.Screen options={{ headerShown: false, presentation: "modal" }} />
      <DepositWithdraw />
    </View>
  );
};

export default DepositWithdrawModal;
