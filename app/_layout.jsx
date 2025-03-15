import { Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "SF-Bold": require("../assets/fonts/SfBold.otf"),
    "SF-Semi-Bold": require("../assets/fonts/SfSemiBold.otf"),
    "SF-Medium": require("../assets/fonts/SfMedium.otf"),
    "SF-Regular": require("../assets/fonts/SfRegular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(Onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
