import React from "react";
import { icons } from "../../constants";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex-1 items-center justify-center mt-2" style={{ paddingVertical: 6 }}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 28, height: 28 }} // افزایش سایز آیکون برای وضوح بیشتر
      />
      <Text
        className={`${focused ? "font-pbold" : "font-pregular"} text-xs`}
        style={{
          color,
          marginTop: 2,
          textAlign: "center",
          fontSize: 8, // افزایش سایز فونت
          flexWrap: "nowrap", // جلوگیری از شکسته شدن متن
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00EB97",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: 64, // افزایش ارتفاع برای نمایش بهتر متن
          paddingBottom: 10, // کمی فاصله از پایین برای وضوح بهتر
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="Budget"
        options={{
          title: "Budget",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.chartPie} color={color} name="Budget" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="Investment"
        options={{
          title: "Investment",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.investment} color={color} name="Investment" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
