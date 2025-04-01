import React from "react";
import { Stack } from "expo-router";

const TabsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Home" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TabsLayout;
