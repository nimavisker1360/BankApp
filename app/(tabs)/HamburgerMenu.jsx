import React, { useEffect } from "react";
import { View, Text, Modal, TouchableOpacity, Dimensions } from "react-native";
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
  Easing,
} from "react-native-reanimated";

const HamburgerMenu = ({ visible, onClose }) => {
  const { height } = Dimensions.get("window");

  // Initialize at full height (off-screen)
  const translateY = useSharedValue(height);

  // Helper function for delayed close
  const handleDelayedClose = () => {
    setTimeout(() => {
      onClose();
    }, 200);
  };

  // Animate to full open position when visible changes to true
  useEffect(() => {
    if (visible) {
      // Slide up to fully show the menu (with a small margin from top)
      translateY.value = withTiming(0, {
        duration: 350,
        easing: Easing.out(Easing.cubic),
      });
    } else {
      translateY.value = height;
    }
  }, [visible, height]);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      // Only allow downward swipes (to close)
      if (event.translationY > 0) {
        translateY.value = ctx.startY + event.translationY;
      }
    },
    onEnd: (event) => {
      // If swiped down enough, close the menu
      if (event.translationY > 100) {
        // Close smoothly with custom easing
        translateY.value = withTiming(height, {
          duration: 350,
          easing: Easing.out(Easing.cubic),
        });

        // Use runOnJS with the helper function
        runOnJS(handleDelayedClose)();
      }
      // Otherwise, return to fully open position
      else {
        translateY.value = withTiming(0, {
          duration: 300,
          easing: Easing.out(Easing.cubic),
        });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
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
        <View className="flex-1 bg-black/50">
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={animatedStyle}>
              <View className="bg-white rounded-t-3xl absolute bottom-0 left-0 right-0">
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
                  className="bg-black py-4 mx-6 mt-4 mb-6 rounded-2xl items-center"
                  onPress={onClose}
                >
                  <Text className="text-white text-lg font-medium">Cancel</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default HamburgerMenu;
