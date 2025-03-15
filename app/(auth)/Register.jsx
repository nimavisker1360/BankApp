import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import {Link} from "expo-router";
import Checkbox from "expo-checkbox";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({
    phone: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    terms: checked,
  });

  // Toggle terms and conditions
  const ToggleTerms = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    setForm({ ...form, terms: newChecked });
  };

  // Handle date selection
  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      setForm({ ...form, dateOfBirth: selectedDate.toLocaleDateString() });
    }
    setShowDatePicker(false); // Close the picker after selection
  };

  return (
    <SafeAreaView className="bg-primary w-full h-full justify-center">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mx-2 mb-2"
        contentContainerStyle={{ minHeight: "100%", justifyContent: "center" }}
      >
        <View className="w-full justify-center items-center mt-7">
          <Text className="text-2xl font-pbold text-secondary">Welcome</Text>
          <Text className="text-gray-200 text-lg">Register to get Started</Text>
        </View>

        {/* Phone Input */}
        <View className="mt-6 rounded-3xl border-2 border-[#E7E7E7] flex-row items-center w-full h-[56px] px-4">
          <Image
            className="w-6 h-6"
            source={icons.phone}
            resizeMode="contain"
          />
          <TextInput
            className="flex-1 font-pmedium ml-2"
            placeholder="Phone number"
            keyboardType="number-pad"
          />
        </View>

        {/* Email Input */}
        <View className="mt-6 rounded-3xl border-2 border-[#E7E7E7] flex-row items-center w-full h-[56px] px-4">
          <Image className="w-6 h-6" source={icons.mail} resizeMode="contain" />
          <TextInput
            className="flex-1 font-pmedium ml-2"
            placeholder="Email Address"
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View className="mt-6 rounded-3xl border-2 border-[#E7E7E7] flex-row items-center w-full h-[56px] px-4">
          <Image className="w-6 h-6" source={icons.lock} resizeMode="contain" />
          <TextInput
            className="flex-1 font-pmedium ml-2"
            placeholder="Password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              className="w-6 h-6"
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* First Name */}
        <View className="mt-6 rounded-3xl border-2 border-[#E7E7E7] flex-row items-center w-full h-[56px] px-4">
          <Image className="w-6 h-6" source={icons.user} resizeMode="contain" />
          <TextInput
            className="flex-1 font-pmedium ml-2"
            placeholder="First Name"
          />
        </View>

        {/* Last Name */}
        <View className="mt-6 rounded-3xl border-2 border-[#E7E7E7] flex-row items-center w-full h-[56px] px-4">
          <Image className="w-6 h-6" source={icons.user} resizeMode="contain" />
          <TextInput
            className="flex-1 font-pmedium ml-2"
            placeholder="Last Name"
          />
        </View>

        {/* Date Picker */}
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          className="mt-6 rounded-3xl border-2 border-[#E7E7E7] flex-row items-center w-full h-[56px] px-4"
        >
          <Image
            className="w-6 h-6"
            source={icons.calendar}
            resizeMode="contain"
          />
          <Text className="flex-1 text-gray-300 ml-2">
            {form.dateOfBirth || "Select Date of Birth"}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={onChange}
          />
        )}
        <View className="flex-row items-center w-full h-[56px] px-4">
          <Checkbox value={checked} onValueChange={setChecked} />
          <Text className="ml-3">I agree to the terms and conditions</Text>
        </View>

        <TouchableOpacity className="bg-secondary mt-5 flex-row p-3 rounded-full items-center justify-center">
          <Text className="ml-3 text-lg text-white items-center justify-center">
            Submit
          </Text>
        </TouchableOpacity>

        <View className="w-full justify-end items-center pt-3 flex-row">
          <Text className="font-pregular text-gray-200">
            Already have an account?{" "}
          </Text>
          <Link href="/Login" className="text-lg text-secondary mx-2">
            Login
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
