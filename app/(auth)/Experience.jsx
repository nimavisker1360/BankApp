import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { useRouter } from "expo-router";

const Experience = () => {
  const [selected, setSelected] = useState([]);
  const router = useRouter();

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  const options = [
    "Make Online Payments",
    "Spend or save daily",
    "Gain exposure to financial assets",
    "Send and manage money",
    "Spend while travelling",
    "Others reason",
  ];

  const handleBack = () => {
    router.push("/Signup");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="pt-5 px-4">
        <TouchableOpacity
          className="w-12 h-12 justify-center"
          onPress={handleBack}
        >
          <Text className="text-4xl font-bold text-gray-800">←</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <View className="p-6 items-center">
          <Text className="text-3xl font-bold text-center my-3 text-gray-800">
            Reason for Using BankApp
          </Text>
          <Text className="text-base text-center mb-6 text-gray-600">
            We want to provide the best experience according to your needs.
          </Text>

          <View className="w-full mb-6">
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center my-1.5 py-3 px-4 bg-gray-50 rounded-2xl border border-gray-200"
                onPress={() => toggleOption(option)}
              >
                <Checkbox
                  status={selected.includes(option) ? "checked" : "unchecked"}
                  onPress={() => toggleOption(option)}
                  color="#3b82f6"
                />
                <Text className="text-base ml-2 text-gray-800">{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View className="px-6 py-4 bg-white border-t border-gray-100">
        <TouchableOpacity className="bg-blue-500 py-4 px-6 rounded-full w-full items-center">
          <Text className="text-white text-lg font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Experience;
