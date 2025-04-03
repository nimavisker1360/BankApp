import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Stack } from "expo-router";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";

const ABankCard = () => {
  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          title: "ABank Card",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity className="mr-2">
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView className="flex-1 pt-12">
        {/* ABank Title */}
        <View className="items-center mb-5">
          <Text className="text-3xl font-bold text-gray-800">ABank</Text>
        </View>

        {/* Gift Card */}
        <TouchableOpacity className="flex-row items-center justify-between mx-3 my-1.5 p-3 rounded-lg border border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-pink-100 rounded-lg items-center justify-center mr-3">
              <Ionicons name="gift-outline" size={18} color="#F472B6" />
            </View>
            <View>
              <Text className="text-base font-semibold">Gift Card</Text>
              <Text className="text-gray-400 text-sm">
                ABank User sent you a Gift Card!
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Virtual Card */}
        <TouchableOpacity className="flex-row items-center justify-between mx-3 my-1.5 p-3 rounded-lg border border-gray-200">
          <View className="flex-row items-center">
            <View className="w-10 h-7 bg-purple-200 rounded-md items-center justify-center mr-3">
              <MaterialIcons name="credit-card" size={16} color="purple" />
            </View>
            <View>
              <Text className="text-base font-semibold">Virtual Card</Text>
              <Text className="text-gray-400 text-sm">5487 93** **** 3260</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Black Card */}
        <TouchableOpacity className="flex-row items-center justify-between mx-3 my-1.5 p-3 rounded-lg border border-gray-200">
          <View className="flex-row items-center">
            <View className="w-10 h-7 bg-black rounded-md items-center justify-center mr-3">
              <MaterialIcons name="credit-card" size={16} color="white" />
            </View>
            <View>
              <Text className="text-base font-semibold">Black Card</Text>
              <Text className="text-gray-400 text-sm">5313 89** **** 6579</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Digital Receipt */}
        <TouchableOpacity className="flex-row items-center justify-between mx-3 my-1.5 p-3 rounded-lg border border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-gray-100 rounded-lg items-center justify-center mr-3">
              <Feather name="file-text" size={18} color="green" />
            </View>
            <View>
              <Text className="text-base font-semibold">Digital Receipt</Text>
              <Text className="text-gray-400 text-sm">
                Protect nature with digital receipt
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Spending Summary */}
        <TouchableOpacity className="flex-row items-center justify-between mx-3 my-1.5 p-3 rounded-lg border border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-gray-100 rounded-lg items-center justify-center mr-3">
              <FontAwesome name="pie-chart" size={16} color="#F97316" />
            </View>
            <View>
              <Text className="text-base font-semibold">Spending Summary</Text>
              <Text className="text-gray-400 text-sm">
                Track your card spendings easily
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Subscriptions */}
        <TouchableOpacity className="flex-row items-center justify-between mx-3 my-1.5 p-3 rounded-lg border border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-gray-100 rounded-lg items-center justify-center mr-3">
              <MaterialIcons name="subscriptions" size={18} color="black" />
            </View>
            <View>
              <Text className="text-base font-semibold">Subscriptions</Text>
              <Text className="text-gray-400 text-sm">
                Manage subscriptions in one place
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Round-Ups */}
        <TouchableOpacity className="flex-row items-center justify-between mx-3 my-1.5 p-3 rounded-lg border border-gray-200">
          <View className="flex-row items-center">
            <View className="w-8 h-8 bg-gray-100 rounded-lg items-center justify-center mr-3">
              <Ionicons name="wallet-outline" size={18} color="teal" />
            </View>
            <View>
              <Text className="text-base font-semibold">Round-Ups</Text>
              <Text className="text-gray-400 text-sm">
                Save or donate spare change
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
      </ScrollView>

      {/* New Card Button */}
      <View className="px-3 pb-16 pt-2 ">
        <View className="py-3 border border-gray-300 rounded-lg relative">
          <View className="items-center">
            <Text className="text-base font-semibold">New Card</Text>
          </View>
          <View className="absolute right-4 top-0 bottom-0 justify-center">
            <Ionicons name="add-circle-outline" size={20} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ABankCard;
