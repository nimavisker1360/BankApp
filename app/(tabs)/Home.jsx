import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Services Icons */}
      <View className="flex-row justify-between px-5 py-6">
        <View className="items-center">
          <View className="h-16 w-16 rounded-full border border-gray-200 items-center justify-center bg-white">
            <Ionicons name="fast-food-outline" size={28} color="green" />
          </View>
          <Text className="text-xs mt-2 text-center">Ramadan{"\n"}Feast</Text>
        </View>

        <View className="items-center">
          <View className="h-16 w-16 rounded-full border border-gray-200 items-center justify-center bg-white">
            <Ionicons name="document-text-outline" size={28} color="green" />
          </View>
          <Text className="text-xs mt-2 text-center">Announcements</Text>
        </View>

        <View className="items-center">
          <View className="h-16 w-16 rounded-full border border-gray-200 items-center justify-center bg-white">
            <Ionicons name="globe-outline" size={28} color="green" />
          </View>
          <Text className="text-xs mt-2 text-center">
            International{"\n"}Money Transfer
          </Text>
        </View>

        <View className="items-center">
          <View className="h-16 w-16 rounded-full border border-gray-200 items-center justify-center bg-white">
            <AntDesign name="creditcard" size={28} color="green" />
          </View>
          <Text className="text-xs mt-2 text-center">Papara Card</Text>
        </View>

        <View className="items-center">
          <View className="h-16 w-16 rounded-full border border-gray-200 items-center justify-center bg-white">
            <FontAwesome5 name="plane" size={25} color="green" />
          </View>
          <Text className="text-xs mt-2 text-center">
            Travel{"\n"}Privilege
          </Text>
        </View>
      </View>

      {/* Account Card - Main section */}
      <View className="bg-white p-5">
        <View className="flex-row items-center mb-3">
          <Text className="text-red-500 text-2xl mr-2">₺</Text>
          <Text className="text-xl font-semibold">Turkish Lira Account</Text>
        </View>

        <View className="flex-row items-center mb-3">
          <Text className="text-4xl font-bold">₺1.264,97</Text>
          <TouchableOpacity className="ml-2">
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <View className="mb-5">
          <Text className="text-gray-500">Your IBAN:</Text>
          <Text className="font-semibold">
            TR85 0082 9000 0949 1658 6381 91
          </Text>
        </View>

        <View className="flex-row">
          <TouchableOpacity className="flex-1 mr-2 border border-gray-300 rounded-lg py-3 flex-row items-center justify-center">
            <Ionicons name="document-outline" size={20} color="black" />
            <Text className="font-semibold ml-2">Deposit/Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 ml-2 bg-black rounded-lg py-3 flex-row items-center justify-center">
            <Ionicons name="paper-plane" size={20} color="white" />
            <Text className="font-semibold text-white ml-2">Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dots Indicator */}
      <View className="flex-row justify-center py-4">
        <View className="h-2 w-2 rounded-full bg-black mx-1" />
        <View className="h-2 w-2 rounded-full bg-gray-300 mx-1" />
        <View className="h-2 w-2 rounded-full bg-gray-300 mx-1" />
        <View className="h-2 w-2 rounded-full bg-gray-300 mx-1" />
        <View className="h-2 w-2 rounded-full bg-gray-300 mx-1" />
        <View className="h-2 w-2 rounded-full bg-gray-300 mx-1" />
      </View>

      {/* Monthly Summary */}
      <View className="px-4 py-3 bg-white border-t border-gray-100">
        <View className="flex-row items-center">
          <View className="h-12 w-12 bg-orange-100 rounded-md items-center justify-center mr-4">
            <Ionicons name="document-text-outline" size={24} color="#f97316" />
          </View>
          <View className="flex-1">
            <Text className="text-gray-500">Today 06:00</Text>
            <Text className="text-lg font-bold">
              Your monthly summary is ready.
            </Text>
            <Text className="text-gray-500">
              Click to see the summary of March
            </Text>
          </View>
          <View className="h-6 w-6 bg-red-500 rounded-full items-center justify-center">
            <Text className="text-white font-bold">3</Text>
          </View>
        </View>
      </View>

      {/* Account Transactions */}
      <View className="px-4 pt-6 pb-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-500 uppercase font-medium">
            ACCOUNT TRANSACTIONS
          </Text>
          <TouchableOpacity>
            <Ionicons name="arrow-forward" size={18} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Transaction Items */}
      <View className="px-4">
        <View className="flex-row items-center justify-between py-4">
          <View className="flex-row items-center">
            <View className="h-12 w-12 bg-blue-900 rounded-full items-center justify-center mr-4">
              <FontAwesome5 name="dollar-sign" size={24} color="white" />
            </View>
            <View>
              <Text className="text-lg font-bold">Golnaz</Text>
              <Text className="text-gray-500">FAST Money Transfer</Text>
            </View>
          </View>
          <View className="items-end">
            <Text className="text-lg font-bold text-red-500">₺2.500,00</Text>
            <Text className="text-gray-500">Today 17:16</Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between py-4 border-t border-gray-100">
          <View className="flex-row items-center">
            <View className="h-12 w-12 bg-blue-100 rounded-full items-center justify-center mr-4">
              <Text className="text-blue-600 font-bold text-lg">P</Text>
            </View>
            <View>
              <Text className="text-lg font-bold">İspark</Text>
              <Text className="text-gray-500">Papara Card</Text>
            </View>
          </View>
          <View className="items-end">
            <Text className="text-lg font-bold text-red-500">₺200,00</Text>
            <Text className="text-gray-500">Yesterday 18:27</Text>
          </View>
        </View>
      </View>

      {/* Cashback */}
      <View className="px-4 pt-6 pb-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-500 uppercase font-medium">CASHBACK</Text>
          <TouchableOpacity>
            <Ionicons name="arrow-forward" size={18} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View className="flex-row justify-between items-center py-4 px-6 border-t border-gray-200 bg-white mt-6">
        <TouchableOpacity className="items-center">
          <Ionicons name="home" size={24} color="black" />
          <Text className="text-xs mt-1">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <MaterialIcons name="qr-code-scanner" size={24} color="gray" />
          <Text className="text-xs mt-1 text-gray-500">QR Transactions</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <Ionicons name="paper-plane-outline" size={24} color="gray" />
          <Text className="text-xs mt-1 text-gray-500">Money Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <AntDesign name="creditcard" size={24} color="gray" />
          <Text className="text-xs mt-1 text-gray-500">Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <MaterialIcons name="credit-card" size={24} color="gray" />
          <Text className="text-xs mt-1 text-gray-500">Papara Card</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
