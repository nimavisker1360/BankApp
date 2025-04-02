import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const DepositWithdraw = () => {
  const [activeTab, setActiveTab] = useState("withdraw");
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const renderDepositOptions = () => {
    const options = [
      {
        title: "Deposit with Your Own IBAN",
        description:
          "Deposit money to your account from any bank account using your Papara IBAN or Easy Address 24/7, instantly.",
        icon: "right",
      },
      {
        title: "Deposit with Bank/Credit Card",
        description:
          "Deposit money using your registered bank/credit cards on Papara or by adding a new card.",
        icon: "right",
      },
      {
        title: "Deposit with Wire Transfer/EFT",
        description:
          "Deposit money to Papara s pool account at your chosen bank using your Papara number.",
        icon: "right",
      },
      {
        title: "Deposit cash via cardless transaction",
        description:
          "Find the nearest ATM and deposit money into your account using a cardless transaction at the ATM.",
        icon: "right",
      },
      {
        title: "Deposit cash via Papara Card",
        description:
          "Find the nearest ATM and deposit money into your account using your Papara Card.",
        icon: "right",
      },
      {
        title: "Carrefour",
        description:
          "Pay cash into your account by giving the CarrefourSA cashier your phone number and the amount you want to deposit.",
        icon: "right",
        hasLogo: true,
        logoName: "carrefour",
      },
      {
        title: "TEKNOSA",
        description: "",
        icon: "right",
        hasLogo: true,
        logoName: "teknosa",
      },
    ];

    return (
      <ScrollView className="flex-1">
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            className={`border-b border-gray-100 py-5 px-4 flex-row justify-between ${
              index === 0 ? "border-t" : ""
            }`}
          >
            <View className="flex-1 pr-4">
              <View className="flex-row items-center mb-1">
                {option.hasLogo && (
                  <View className="mr-2">
                    {option.logoName === "carrefour" && (
                      <View className="flex-row items-center">
                        <Text className="text-blue-700 font-bold text-lg">
                          Carrefour
                        </Text>
                        <View className="bg-blue-700 w-6 h-6 ml-1 rounded-full items-center justify-center">
                          <Text className="text-white font-bold">SA</Text>
                        </View>
                      </View>
                    )}
                    {option.logoName === "teknosa" && (
                      <View className="flex-row items-center">
                        <Text className="text-orange-500 font-bold text-lg">
                          TEKNO
                        </Text>
                        <View className="bg-blue-700 w-5 h-5 rounded-full items-center justify-center">
                          <Text className="text-white font-bold text-xs">
                            SA
                          </Text>
                        </View>
                      </View>
                    )}
                  </View>
                )}
                {!option.hasLogo && (
                  <Text className="font-semibold text-lg">{option.title}</Text>
                )}
              </View>
              {option.description && (
                <Text className="text-gray-500 text-sm">
                  {option.description}
                </Text>
              )}
            </View>
            <View className="justify-center">
              <AntDesign name={option.icon} size={20} color="#000" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const renderWithdrawOptions = () => {
    const options = [
      {
        title: "Withdraw with IBAN",
        description:
          "Withdraw money easily from your Papara account to your own bank account using your IBAN.",
        icon: "right",
      },
      {
        title: "Withdraw with QR",
        description:
          "Scan the QR code on the ATM screen where you want to withdraw money and easily withdraw cash without using your card.",
        icon: "right",
      },
      {
        title: "Withdraw with Papara Card",
        description:
          "Withdraw cash using your Papara Card at the ATM where you want to withdraw money.",
        icon: "right",
      },
    ];

    return (
      <ScrollView className="flex-1">
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            className={`border-b border-gray-100 py-5 px-4 flex-row justify-between ${
              index === 0 ? "border-t" : ""
            }`}
          >
            <View className="flex-1 pr-4">
              <Text className="font-semibold text-lg mb-1">{option.title}</Text>
              <Text className="text-gray-500 text-sm">
                {option.description}
              </Text>
            </View>
            <View className="justify-center">
              <AntDesign name={option.icon} size={20} color="#000" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <View className="flex-1 bg-white pt-10">
      {/* Header with close button */}
      <View className="flex-row items-center justify-center relative px-5 pb-4">
        <Text className="text-xl font-semibold">Withdraw/Deposit</Text>
        <TouchableOpacity
          onPress={handleClose}
          className="p-1 absolute right-5"
        >
          <AntDesign name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View className="flex-row">
        <TouchableOpacity
          className={`flex-1 py-4 ${
            activeTab === "withdraw" ? "border-b-2 border-black" : ""
          }`}
          onPress={() => setActiveTab("withdraw")}
        >
          <Text
            className={`text-center text-lg font-semibold ${
              activeTab === "withdraw" ? "text-black" : "text-gray-400"
            }`}
          >
            Withdraw
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-4 ${
            activeTab === "deposit" ? "border-b-2 border-black" : ""
          }`}
          onPress={() => setActiveTab("deposit")}
        >
          <Text
            className={`text-center text-lg font-semibold ${
              activeTab === "deposit" ? "text-black" : "text-gray-400"
            }`}
          >
            Deposit
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content based on active tab */}
      {activeTab === "withdraw"
        ? renderWithdrawOptions()
        : renderDepositOptions()}
    </View>
  );
};

export default DepositWithdraw;
