import React, { useEffect } from "react";
import { View, Text, Modal, TouchableOpacity, Dimensions } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
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

const ProfileMenu = ({ visible, onClose }) => {
  const { height } = Dimensions.get("window");
  const translateY = useSharedValue(height);

  const handleDelayedClose = () => {
    setTimeout(() => {
      onClose();
    }, 200);
  };

  useEffect(() => {
    if (visible) {
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
      if (event.translationY > 0) {
        translateY.value = ctx.startY + event.translationY;
      }
    },
    onEnd: (event) => {
      if (event.translationY > 100) {
        translateY.value = withTiming(height, {
          duration: 350,
          easing: Easing.out(Easing.cubic),
        });
        runOnJS(handleDelayedClose)();
      } else {
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
      id: "better-bank",
      icon: <AntDesign name="bars" size={24} color="black" />,
      title: "A Better BankApp",
      rightElement: (
        <View className="bg-yellow-100 px-3 py-1 rounded-full">
          <Text className="text-yellow-800">3 / 4</Text>
        </View>
      ),
    },
    {
      id: "profile-photo",
      icon: <AntDesign name="picture" size={24} color="black" />,
      title: "Choose Profile Photo",
    },
    {
      id: "account-details",
      icon: <Ionicons name="person-outline" size={24} color="black" />,
      title: "Account Details",
    },
    {
      id: "account-transactions",
      icon: <Ionicons name="time-outline" size={24} color="black" />,
      title: "Account Transactions",
    },
    {
      id: "bank-accounts",
      icon: <MaterialIcons name="account-balance" size={24} color="black" />,
      title: "Bank Accounts",
    },
    {
      id: "cards",
      icon: <AntDesign name="creditcard" size={24} color="black" />,
      title: "Debit/Credit Cards",
    },
    {
      id: "addresses",
      icon: <Feather name="map-pin" size={24} color="black" />,
      title: "Manage Easy Addresses",
    },
    {
      id: "invite",
      icon: <Ionicons name="gift-outline" size={24} color="black" />,
      title: "Invite a Friend",
      rightElement: (
        <View className="bg-green-100 px-3 py-1 rounded-full">
          <Text className="text-green-800">EARN 200 TL</Text>
        </View>
      ),
    },
    {
      id: "settings",
      icon: <Ionicons name="settings-outline" size={24} color="black" />,
      title: "Settings",
    },
    {
      id: "signout",
      icon: <Ionicons name="log-out-outline" size={24} color="black" />,
      title: "Sign out",
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
                      className="flex-row items-center px-6 py-4 border-b border-gray-100"
                      onPress={() => onClose()}
                    >
                      <View className="w-8">{item.icon}</View>
                      <Text className="text-lg ml-4 flex-1">{item.title}</Text>
                      {item.rightElement && item.rightElement}
                    </TouchableOpacity>
                  ))}
                </View>

                <TouchableOpacity
                  className="bg-black py-4 mx-6 mt-6 mb-8 rounded-2xl items-center"
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

export default ProfileMenu;
