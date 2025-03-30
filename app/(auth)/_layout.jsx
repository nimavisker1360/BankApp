import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Register" options={{ headerShown: false }} />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Signup" options={{ headerShown: false }} />
      <Stack.Screen name="Experience" options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" options={{ headerShown: false }} />
    </Stack>
  );
};
export default AuthLayout;
