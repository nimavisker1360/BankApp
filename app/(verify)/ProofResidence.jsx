import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  Modal,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ProofResidence = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "United States of America",
    code: "us",
    flag: "https://flagcdn.com/w320/us.png",
  });

  // Animation values
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Open modal with animation
  const openModal = () => {
    setModalVisible(true);
    // Reset position before animation starts
    slideAnim.setValue(Dimensions.get("window").height);
    fadeAnim.setValue(0);

    // Start animations
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Close modal with animation
  const closeModal = (country = null) => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: Dimensions.get("window").height,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setModalVisible(false);
      setShowCountryModal(false);
      if (country) {
        setSelectedCountry(country);
      }
    });
  };

  // Trigger open modal when showCountryModal changes
  useEffect(() => {
    if (showCountryModal) {
      openModal();
    }
  }, [showCountryModal]);

  const countries = [
    {
      name: "Afghanistan",
      code: "af",
      flag: "https://flagcdn.com/w320/af.png",
    },
    {
      name: "Åland Islands",
      code: "ax",
      flag: "https://flagcdn.com/w320/ax.png",
    },
    { name: "Albania", code: "al", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Algeria", code: "dz", flag: "https://flagcdn.com/w320/dz.png" },
    {
      name: "American Samoa",
      code: "as",
      flag: "https://flagcdn.com/w320/as.png",
    },
    { name: "Andorra", code: "ad", flag: "https://flagcdn.com/w320/ad.png" },
    { name: "Angola", code: "ao", flag: "https://flagcdn.com/w320/ao.png" },
    { name: "Anguilla", code: "ai", flag: "https://flagcdn.com/w320/ai.png" },
    { name: "Antarctica", code: "aq", flag: "https://flagcdn.com/w320/aq.png" },
    {
      name: "Antigua and Barbuda",
      code: "ag",
      flag: "https://flagcdn.com/w320/ag.png",
    },
    { name: "Argentina", code: "ar", flag: "https://flagcdn.com/w320/ar.png" },
    { name: "Armenia", code: "am", flag: "https://flagcdn.com/w320/am.png" },
    { name: "Aruba", code: "aw", flag: "https://flagcdn.com/w320/aw.png" },
    { name: "Australia", code: "au", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Austria", code: "at", flag: "https://flagcdn.com/w320/at.png" },
    { name: "Azerbaijan", code: "az", flag: "https://flagcdn.com/w320/az.png" },
  ];

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
          Prove you live in {selectedCountry.name}
        </Text>

        {/* Nationality Section */}
        <View className="mb-8">
          <Text className="text-xl font-semibold mb-4">Nationality</Text>

          <TouchableOpacity className="flex-row items-center justify-between p-4 bg-white border-[0.5px] border-gray-100 rounded-2xl">
            <View className="flex-row items-center">
              <Image
                source={{ uri: selectedCountry.flag }}
                className="w-8 h-5 mr-3"
                resizeMode="contain"
              />
              <Text className="text-base">{selectedCountry.name}</Text>
            </View>
            <Text
              className="text-[#2D7BF6] font-medium"
              onPress={() => setShowCountryModal(true)}
            >
              Change
            </Text>
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

      {/* Country Selection Modal */}
      <Modal visible={modalVisible} animationType="none" transparent={false}>
        <Animated.View
          className="flex-1 bg-[#2D7BF6]"
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <View className="flex-row justify-between items-center px-5 pt-12 pb-3">
            <View style={{ width: 24 }} />
            <Text className="text-xl font-semibold text-white">
              Select Country
            </Text>
            <TouchableOpacity onPress={() => closeModal()}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <ScrollView className="flex-1 bg-[#2D7BF6]">
            {countries.map((country) => (
              <TouchableOpacity
                key={country.code}
                className="flex-row items-center px-5 py-4 border-b border-[#ffffff20]"
                onPress={() => closeModal(country)}
              >
                <Image
                  source={{ uri: country.flag }}
                  className="w-8 h-5 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-lg text-white">{country.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      </Modal>
    </View>
  );
};

export default ProofResidence;
