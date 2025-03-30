import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Modal,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Animatable from "react-native-animatable";

const ResetPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+90",
    name: "Turkey",
    flag: "🇹🇷",
  });

  const slideAnimation = useRef(new Animated.Value(0)).current;

  const countries = [
    { code: "+90", name: "Turkey", flag: "🇹🇷" },
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+49", name: "Germany", flag: "🇩🇪" },
    { code: "+33", name: "France", flag: "🇫🇷" },
    { code: "+7", name: "Russia", flag: "🇷🇺" },
    { code: "+86", name: "China", flag: "🇨🇳" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+81", name: "Japan", flag: "🇯🇵" },
    { code: "+82", name: "South Korea", flag: "🇰🇷" },
    { code: "+971", name: "UAE", flag: "🇦🇪" },
    { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
  ];

  const openCountryModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeCountryModal = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    closeCountryModal();
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      className="flex-row items-center p-4 border-b border-gray-100"
      onPress={() => selectCountry(item)}
    >
      <Text className="text-xl mr-3">{item.flag}</Text>
      <Text className="text-base">{item.name}</Text>
      <Text className="text-base ml-auto font-medium">{item.code}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-5">
          <View className="absolute top-10 left-5 z-10">
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View className="flex-1 items-center pt-24">
            <Text className="text-3xl font-bold mb-10">Forgot Password</Text>

          

            <Text className="text-2xl font-bold mb-14">
              Enter to Your Phone Number
            </Text>

            <View className="w-full mb-10">
              <View className="flex-row items-center w-full bg-gray-50 rounded-lg p-3 mb-5">
                <TouchableOpacity
                  className="flex-row items-center pr-3 border-r border-gray-300"
                  onPress={openCountryModal}
                >
                  <Text className="text-xl mr-2">{selectedCountry.flag}</Text>
                  <Text className="text-base">{selectedCountry.code}</Text>
                  <Ionicons
                    name="chevron-down"
                    size={16}
                    color="gray"
                    className="ml-1"
                  />
                </TouchableOpacity>
                <TextInput
                  className="flex-1 text-base p-2 ml-2"
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>

              <View className="flex-row items-center mb-6">
                <TouchableOpacity
                  className="w-6 h-6 border border-gray-300 rounded mr-2 items-center justify-center"
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  {rememberMe && (
                    <Ionicons name="checkmark" size={16} color="#4285F4" />
                  )}
                </TouchableOpacity>
                <Text className="text-gray-700">Remember me</Text>
              </View>
            </View>

            <TouchableOpacity
              className="w-full bg-[#4285F4] py-4 rounded-full items-center mb-6"
              onPress={() => router.push("/(verify)/VerifyCode")}
            >
              <Text className="text-white text-lg font-semibold">
                Reset Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/(auth)/Login")}>
              <Text className="text-[#4285F4] text-base">
                Remember the password?
              </Text>
            </TouchableOpacity>

            <View className="mt-auto mb-4 w-full flex-row justify-center">
              <Text className="text-gray-600">Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/Signup")}>
                <Text className="text-[#4285F4] font-medium">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="none"
        onRequestClose={closeCountryModal}
      >
        <TouchableOpacity
          className="flex-1 bg-black/30"
          activeOpacity={1}
          onPress={closeCountryModal}
        >
          <Animatable.View
            animation="slideInUp"
            duration={300}
            className="absolute bottom-0 w-full bg-white rounded-t-3xl"
            style={{
              transform: [
                {
                  translateY: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0],
                  }),
                },
              ],
            }}
          >
            <View className="p-4 border-b border-gray-200">
              <Text className="text-xl font-bold text-center">
                Select Country
              </Text>
            </View>
            <FlatList
              data={countries}
              renderItem={renderCountryItem}
              keyExtractor={(item) => item.code}
              style={{ maxHeight: 400 }}
            />
          </Animatable.View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default ResetPassword;
