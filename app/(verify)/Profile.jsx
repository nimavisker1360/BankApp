import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import CountrySelector from "../../components/CountrySelector";
import { Feather as FeatherIcon } from "@expo/vector-icons";
import calendarIcon from "../../assets/icons/calendar.png"; // adjust the path as needed
import DateTimePicker from "@react-native-community/datetimepicker";
const Profile = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showDateOfBirth, setShowDateOfBirth] = useState(false);
  const [date, setDate] = useState(new Date());

  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+90",
    name: "Turkey",
    flag: "🇹🇷",
  });

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDateOfBirth(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 p-4 mt-8">
          {/* Header */}
          <View className="flex-row items-center mb-6">
            <TouchableOpacity onPress={() => router.back()} className="p-2">
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold ml-2">Fill Your Profile</Text>
          </View>

          {/* Form */}
          <View className="space-y-4 mt-4">
            <TextInput
              placeholder="Full Name"
              value={fullName}
              onChangeText={setFullName}
              className="bg-gray-50 p-4 rounded-lg text-base"
            />
            <TextInput
              placeholder="Nickname"
              value={nickname}
              onChangeText={setNickname}
              className="bg-gray-50 p-4 rounded-lg text-base"
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              className="bg-gray-50 p-4 rounded-lg text-base"
            />

            {/* Password Field */}
            <View className="bg-gray-50 p-4 rounded-lg flex-row items-center">
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                className="flex-1 text-base"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather
                  name={showPassword ? "eye-off" : "eye"}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            {/* Date Field */}
            <TouchableOpacity
              className="bg-gray-50 p-4 rounded-lg flex-row justify-between items-center"
              onPress={() => setShowDateOfBirth(true)}
            >
              <Image
                source={calendarIcon}
                className="w-6 h-6 mr-2"
                resizeMode="contain"
              />
              <Text className="flex-1 text-gray-300 ml-2">
                {date.toLocaleDateString()} Date of Birth
              </Text>
            </TouchableOpacity>
            {showDateOfBirth && (
              <DateTimePicker
                value={date}
                mode="date"
                display="calendar"
                onChange={onChange}
              />
            )}

            {/* Phone Number Field */}
            <View className="flex-row bg-gray-50 rounded-lg overflow-hidden">
              <CountrySelector
                selectedCountry={selectedCountry}
                onSelectCountry={handleSelectCountry}
              />
              <TextInput
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                className="flex-1 p-4 text-base"
              />
            </View>
          </View>

          {/* Bottom Buttons */}
          <View className="flex-row justify-center mt-12 mb-4">
            <TouchableOpacity
              className="bg-blue-500 rounded-full py-4 px-8 flex-1 items-center"
              onPress={() => router.push("/Pointer")}
            >
              <Text className="text-white font-semibold text-base">Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
