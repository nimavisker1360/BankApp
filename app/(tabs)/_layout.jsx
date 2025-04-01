import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

const TabsLayout = () => {
  return (
    <Stack
      screenOptions={{ headerShadowVisible: false, headerBackVisible: false }}
    >
      <Stack.Screen
        name="Home"
        options={{
          headerShown: true,
          headerTitle: () => (
            <View style={{ width: 200 }} className="items-center">
              <Text className="text-gray-500 text-center">
                Nima Bagheri Tonkaboni
              </Text>
              <View className="flex-row items-center justify-center">
                <Text className="text-gray-500">Papara No: </Text>
                <Text className="font-semibold">1658638191</Text>
              </View>
            </View>
          ),
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity style={{ width: 40 }} className="items-center">
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ width: 40 }} className="items-center">
              <Ionicons name="person-circle-outline" size={28} color="black" />
            </TouchableOpacity>
          ),
          headerStyle: {
            height: 80,
            backgroundColor: "#f9fafb",
          },
        }}
      />
    </Stack>
  );
};

export default TabsLayout;
