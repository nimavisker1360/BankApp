import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useRef } from "react";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const NewPin = () => {
  const router = useRouter();
  const [pin, setPin] = useState(["", "", "", ""]);
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef([]);

  const handlePinChange = (value, index) => {
    if (value === "" || /^\d+$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Move to next input if current one is filled
      if (value !== "" && index < 3) {
        setActiveInput(index + 1);
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleBackspace = () => {
    if (activeInput > 0) {
      const newPin = [...pin];
      newPin[activeInput - 1] = "";
      setPin(newPin);
      setActiveInput(activeInput - 1);
      inputRefs.current[activeInput - 1]?.focus();
    } else if (activeInput === 0 && pin[0] !== "") {
      const newPin = [...pin];
      newPin[0] = "";
      setPin(newPin);
    }
  };

  const onContinue = () => {
    if (pin.every((digit) => digit !== "")) {
      // Handle PIN confirmation
      console.log("PIN set:", pin.join(""));
      // Navigate to next screen
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <View className="flex-1 px-4">
        <View className="mt-10 mb-6">
          <TouchableOpacity onPress={() => router.back()} className="p-1">
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="items-center mb-16">
          <Text className="text-3xl font-psemibold text-black-100">
            Create New PIN
          </Text>
          <Text className="text-base text-center mt-2 text-gray-300">
            Add a PIN number to make your account more secure.
          </Text>
        </View>

        <View className="flex-row justify-center space-x-4 mb-8">
          {pin.map((digit, index) => (
            <TouchableOpacity
              key={index}
              className={`w-14 h-14 border rounded-xl justify-center items-center ${
                activeInput === index
                  ? "border-blue-500 border-2"
                  : "border-gray-200"
              }`}
              onPress={() => {
                setActiveInput(index);
                inputRefs.current[index]?.focus();
              }}
            >
              <TextInput
                ref={(el) => (inputRefs.current[index] = el)}
                value={digit}
                onChangeText={(value) => handlePinChange(value, index)}
                keyboardType="numeric"
                maxLength={1}
                className="text-2xl font-pmedium text-black w-full h-full text-center"
                secureTextEntry={true}
                autoFocus={index === 0 && activeInput === 0}
              />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={onContinue}
          disabled={!pin.every((digit) => digit !== "")}
          className={`py-4 rounded-full ${
            pin.every((digit) => digit !== "") ? "bg-blue-500" : "bg-blue-300"
          }`}
        >
          <Text className="text-white text-center font-psemibold text-lg">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewPin;
