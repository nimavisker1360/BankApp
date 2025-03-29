import React from "react";
import { Stack } from "expo-router";

const IdentifyLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Identify" options={{ headerShown: false }} />
   
    </Stack>
  );
};
export default IdentifyLayout;