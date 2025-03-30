import React from "react";
import { Stack } from "expo-router";

const IdentifyLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Identify" options={{ headerShown: false }} />
      <Stack.Screen name="ProofResidence" options={{ headerShown: false }} />
      <Stack.Screen name="PassReset" options={{ headerShown: false }} />
      <Stack.Screen name="VerifyCode" options={{ headerShown: false }} />
      <Stack.Screen name="ProofIdCard" options={{ headerShown: false }} />
      <Stack.Screen name="Selfie" options={{ headerShown: false }} />
      <Stack.Screen name="Profile" options={{ headerShown: false }} />
    
    </Stack>
  );
};
export default IdentifyLayout;