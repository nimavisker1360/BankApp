import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ProofResidence = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const verificationMethods = [
    {
      id: "national_id",
      title: "National Identity Card",
      icon: "card-outline",
    },
    { id: "passport", title: "Passport", icon: "document-text-outline" },
    { id: "driver_license", title: "Driver License", icon: "car-outline" },
  ];

  return (
    <View className="flex-1 bg-white">
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Header with back button */}
      <View className="pt-5 px-5">
        <TouchableOpacity
          className="p-2.5 -ml-2.5"
          onPress={() => router.back()}
        >
          <Text className="text-3xl font-bold text-black">←</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5 pt-4">
        {/* Page Title */}
        <Text className="text-3xl font-bold text-[#222] mb-2">
          Proof of Residency
        </Text>

        {/* Subtitle */}
        <Text className="text-base text-[#555] mb-8">
          Prove you live in United States
        </Text>

        {/* Nationality Section */}
        <View className="mb-8">
          <Text className="text-xl font-semibold mb-4">Nationality</Text>

          <TouchableOpacity className="flex-row items-center justify-between p-4 bg-white border-[0.5px] border-gray-100 rounded-2xl">
            <View className="flex-row items-center">
              <Image
                source={{ uri: "https://flagcdn.com/w320/us.png" }}
                className="w-8 h-5 mr-3"
                resizeMode="contain"
              />
              <Text className="text-base">United States of America</Text>
            </View>
            <Text className="text-[#2D7BF6] font-medium">Change</Text>
          </TouchableOpacity>
        </View>

        {/* Verification Method Section */}
        <View>
          <Text className="text-xl font-semibold mb-4">
            Choose Verification Method
          </Text>

          {verificationMethods.map((method) => (
            <TouchableOpacity
              key={method.id}
              className={`flex-row items-center justify-between p-4 bg-white border-[0.5px] border-gray-100 rounded-2xl mb-4 ${
                selectedMethod === method.id
                  ? "border-[0.5px] border-[#2D7BF6]"
                  : ""
              }`}
              onPress={() => setSelectedMethod(method.id)}
            >
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-[#ECF3FF] rounded-full items-center justify-center mr-3">
                  <Ionicons name={method.icon} size={22} color="#2D7BF6" />
                </View>
                <Text className="text-lg">{method.title}</Text>
              </View>
              <View className="w-6 h-6 rounded-full border-[1px] border-gray-200 items-center justify-center">
                {selectedMethod === method.id && (
                  <View className="w-4 h-4 bg-[#2D7BF6] rounded-full" />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Verify Button */}
      <View className="p-5">
        <TouchableOpacity
          className="bg-[#2D7BF6] py-4 rounded-full w-full items-center"
          onPress={() => console.log("Verify Identity")}
        >
          <Text className="text-white text-lg font-semibold">
            Verify Identity
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProofResidence;
