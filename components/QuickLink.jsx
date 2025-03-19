import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";

const QuickLink = () => {
    return (
        <View className="w-full mt-1 p-3">
            <Text className="text-lg">Quick links</Text>

            <View className="flex-row mt-3">
                {[
                    { icon: icons.phone2, bg: "#AF2BBF", label: "Airtime" },
                    { icon: icons.lightbulb, bg: "#00EB97", label: "Electricity" },
                    { icon: icons.wifiIcon, bg: "#FF4EF8", label: "Data" },
                    { icon: icons.menu, bg: "#0A2463", label: "Others" }
                ].map((item, index) => (
                    <TouchableOpacity key={index} className="items-center flex-1">
                        <View className="w-[40px] h-[40px] rounded-full" style={{ backgroundColor: item.bg, justifyContent: 'center', alignItems: 'center' }}>
                            <Image className="w-5 h-5" source={item.icon} resizeMode="contain" />
                        </View>
                        <Text className="font-pregular mt-3">{item.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default QuickLink;
