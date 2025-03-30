import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const CountrySelector = ({ selectedCountry, onSelectCountry }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
    onSelectCountry(country);
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
    <>
      <TouchableOpacity
        className="flex-row items-center pr-3 border-r border-gray-300"
        onPress={openCountryModal}
      >
        <Text className="text-xl mr-2">{selectedCountry.flag}</Text>
        <Text className="text-base">{selectedCountry.code}</Text>
        <Ionicons name="chevron-down" size={16} color="gray" className="ml-1" />
      </TouchableOpacity>

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
    </>
  );
};

export default CountrySelector;
