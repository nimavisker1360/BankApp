import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import HamburgerMenu from "./HamburgerMenu";

const TabsLayout = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View className="flex-1">
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
                  <Text className="text-gray-500">BankApp No: </Text>
                  <Text className="font-semibold">1658638191</Text>
                </View>
              </View>
            ),
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                className="ml-2"
                onPress={() => setMenuVisible(true)}
              >
                <View className="h-10 w-10 bg-gray-100 rounded-xl items-center justify-center">
                  <Ionicons name="menu" size={24} color="black" />
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={{ width: 40 }} className="items-center">
                <Ionicons
                  name="person-circle-outline"
                  size={28}
                  color="black"
                />
              </TouchableOpacity>
            ),
            headerStyle: {
              height: 80,
              backgroundColor: "#f9fafb",
            },
          }}
        />
      </Stack>

      {/* Hamburger Menu Modal */}
      <HamburgerMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 flex-row justify-evenly items-center py-2 px-2 bg-white ">
        <View className="items-center w-1/5">
          <Ionicons name="home" size={22} color="black" />
          <Text style={{ fontSize: 9 }} className="mt-1">
            Home
          </Text>
        </View>

        <View className="items-center w-1/5">
          <MaterialIcons name="qr-code-scanner" size={22} color="gray" />
          <Text
            style={{ fontSize: 7 }}
            className="mt-1 text-gray-500 text-center"
          >
            QR Transactions
          </Text>
        </View>

        <View className="items-center w-1/5">
          <Ionicons name="paper-plane-outline" size={22} color="gray" />
          <Text
            style={{ fontSize: 9 }}
            className="mt-1 text-gray-500 text-center"
          >
            Money Transfer
          </Text>
        </View>

        <View className="items-center w-1/5">
          <AntDesign name="creditcard" size={22} color="gray" />
          <Text style={{ fontSize: 9 }} className="mt-1 text-gray-500">
            Payments
          </Text>
        </View>

        <View className="items-center w-1/5">
          <MaterialIcons name="credit-card" size={22} color="gray" />
          <Text
            style={{ fontSize: 9 }}
            className="mt-1 text-gray-500 text-center"
          >
            ABank Card
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TabsLayout;
