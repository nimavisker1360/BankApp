import React, { useState } from "react";
import { Stack, useRouter, usePathname } from "expo-router";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import HamburgerMenu from "./HamburgerMenu";
import ProfileMenu from "./ProfileMenu";
import QRTransactionsModal from "./QRTransactionsModal";
import MoneyTransferModal from "./MoneyTransferModal";

const TabsLayout = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const [qrModalVisible, setQrModalVisible] = useState(false);
  const [moneyTransferModalVisible, setMoneyTransferModalVisible] =
    useState(false);

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
              <TouchableOpacity
                style={{ width: 40 }}
                className="items-center"
                onPress={() => setProfileMenuVisible(true)}
              >
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
        <Stack.Screen
          name="Payments"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SendMoney"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      {/* Hamburger Menu Modal */}
      <HamburgerMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />

      {/* Profile Menu Modal */}
      <ProfileMenu
        visible={profileMenuVisible}
        onClose={() => setProfileMenuVisible(false)}
      />

      {/* QR Transactions Modal */}
      <QRTransactionsModal
        visible={qrModalVisible}
        onClose={() => setQrModalVisible(false)}
      />

      {/* Money Transfer Modal */}
      <MoneyTransferModal
        visible={moneyTransferModalVisible}
        onClose={() => setMoneyTransferModalVisible(false)}
      />

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 flex-row justify-evenly items-center py-2 px-2 bg-white ">
        <TouchableOpacity
          className="items-center w-1/5"
          onPress={() => router.push("/Home")}
        >
          <Ionicons
            name="home"
            size={22}
            color={pathname === "/Home" ? "#000000" : "gray"}
          />
          <Text
            style={{
              fontSize: 9,
              fontWeight: pathname === "/Home" ? "bold" : "normal",
            }}
            className={`mt-1 ${
              pathname === "/Home" ? "text-black" : "text-gray-500"
            }`}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center w-1/5"
          onPress={() => setQrModalVisible(true)}
        >
          <MaterialIcons name="qr-code-scanner" size={22} color="gray" />
          <Text
            style={{ fontSize: 7 }}
            className="mt-1 text-gray-500 text-center"
          >
            QR Transactions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center w-1/5"
          onPress={() => setMoneyTransferModalVisible(true)}
        >
          <Ionicons name="paper-plane-outline" size={22} color="gray" />
          <Text
            style={{ fontSize: 9 }}
            className="mt-1 text-gray-500 text-center"
          >
            Money Transfer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center w-1/5"
          onPress={() => router.push("/Payments")}
        >
          <AntDesign
            name="creditcard"
            size={22}
            color={pathname === "/Payments" ? "#000000" : "gray"}
          />
          <Text
            style={{
              fontSize: 9,
              fontWeight: pathname === "/Payments" ? "bold" : "normal",
            }}
            className={`mt-1 ${
              pathname === "/Payments" ? "text-black" : "text-gray-500"
            }`}
          >
            Payments
          </Text>
        </TouchableOpacity>

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
