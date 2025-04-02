import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

const HamburgerMenu = ({ visible, onClose }) => {
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      // Only allow downward swipes
      if (event.translationY > 0) {
        translateY.value = ctx.startY + event.translationY;
      }
    },
    onEnd: (event) => {
      // If swiped down enough, close the menu
      if (event.translationY > 100) {
        translateY.value = withTiming(10, {
          duration: 100,
        });
        runOnJS(onClose)();
      } else {
        // Otherwise, snap back to original position
        translateY.value = withTiming(0, {
          duration: 300,
        });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const menuItems = [
    {
      id: "notifications",
      icon: <Ionicons name="notifications-outline" size={24} color="black" />,
      title: "Notifications",
      badge: 7,
    },
    {
      id: "search-atm",
      icon: <Ionicons name="location-outline" size={24} color="black" />,
      title: "Search ATM",
    },
    {
      id: "withdraw-deposit",
      icon: <MaterialIcons name="account-balance" size={24} color="black" />,
      title: "Withdraw/Deposit",
    },
    {
      id: "split-bill",
      icon: (
        <MaterialCommunityIcons name="call-split" size={24} color="black" />
      ),
      title: "Split Bill",
    },
    {
      id: "papara-edu",
      icon: <Ionicons name="book-outline" size={24} color="black" />,
      title: "Papara Edu",
    },
    {
      id: "cashback",
      icon: (
        <MaterialCommunityIcons name="cash-refund" size={24} color="black" />
      ),
      title: "Cashback",
    },
    {
      id: "streamer-account",
      icon: <Feather name="video" size={24} color="black" />,
      title: "Streamer Account",
    },
    {
      id: "monthly-summary",
      icon: <Ionicons name="calendar-outline" size={24} color="black" />,
      title: "Monthly Summary",
    },
    {
      id: "fees-limits",
      icon: <Ionicons name="calculator-outline" size={24} color="black" />,
      title: "Fees & Limits",
    },
    {
      id: "commercial-account",
      icon: <Ionicons name="business-outline" size={24} color="black" />,
      title: "Commercial Account",
    },
    {
      id: "faq",
      icon: <Ionicons name="help-circle-outline" size={24} color="black" />,
      title: "Frequently Asked Questions",
    },
    {
      id: "customer-support",
      icon: <Ionicons name="headset-outline" size={24} color="black" />,
      title: "Customer Support",
    },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View className="flex-1 bg-black/50 justify-end">
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={animatedStyle}>
              <Animatable.View
                animation="slideInUp"
                duration={300}
                className="bg-white rounded-t-3xl"
              >
                <View className="w-16 h-1 bg-gray-300 rounded-full self-center my-2"></View>
                <View>
                  {menuItems.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      className="flex-row items-center px-6 py-3 border-b border-gray-100"
                      onPress={() => onClose()}
                    >
                      <View className="w-8">{item.icon}</View>
                      <Text className="text-lg font-medium ml-4 flex-1">
                        {item.title}
                      </Text>
                      {item.badge && (
                        <View className="h-7 w-7 bg-red-500 rounded-full items-center justify-center">
                          <Text className="text-white font-bold">
                            {item.badge}
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>

                <View className="py-4 items-center"></View>
                <TouchableOpacity
                  className="bg-black py-4 mx-6 mt-4 mb-2 rounded-2xl items-center"
                  onPress={onClose}
                >
                  <Text className="text-white text-lg font-medium">Cancel</Text>
                </TouchableOpacity>
              </Animatable.View>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default HamburgerMenu;
