import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const VerifyCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [isResendActive, setIsResendActive] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsResendActive(true);
      setIsButtonVisible(true);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleCodeChange = (text, index) => {
    if (text.length <= 1) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      // Auto focus next input
      if (text.length === 1 && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && code[index] === "") {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleResendCode = () => {
    if (isResendActive) {
      setCode(["", "", "", ""]);
      setTimer(60);
      setIsResendActive(false);
      setIsButtonVisible(false);

      // Focus the first input after resending
      inputRefs[0].current.focus();
    }
  };

  const verifyCode = () => {
    const verificationCode = code.join("");
    if (verificationCode.length === 4) {
      // Here you would verify the code with your backend
      router.push("/(auth)/Login");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-5">
          <View className="absolute top-10 left-5 z-10">
            <TouchableOpacity onPress={() => router.back()}>
             
            </TouchableOpacity>
          </View>

          <View className="flex-1 items-center pt-24">
            <Text className="text-3xl font-bold mb-10">Verification Code</Text>

            <Text className="text-center text-gray-500 mb-16 px-6">
              We have sent the verification code to your mobile number +90 ***
              *** 99
            </Text>

            <View className="flex-row justify-center space-x-6 mb-16">
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  className="w-16 h-16 border border-gray-300 rounded-lg text-center text-xl font-bold"
                  maxLength={1}
                  keyboardType="number-pad"
                  value={digit}
                  onChangeText={(text) => handleCodeChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                />
              ))}
            </View>

            <View className="flex-row justify-center items-center mb-12">
              <Text className="text-gray-500">Don't receive code? </Text>
              {isButtonVisible && (
                <TouchableOpacity
                  onPress={handleResendCode}
                  disabled={!isResendActive}
                >
                  <Text
                    className={`font-medium ${
                      isResendActive ? "text-[#4285F4]" : "text-gray-400"
                    }`}
                  >
                    {isResendActive ? (
                      "Resend"
                    ) : (
                      <Text>
                        Resend <Text className="text-[#4285F4]">{timer}s</Text>
                      </Text>
                    )}
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity
              className={`w-full py-4 rounded-full items-center mb-4 
                ${code.join("").length === 4 ? "bg-[#4285F4]" : "bg-gray-300"}`}
              onPress={verifyCode}
              disabled={code.join("").length !== 4}
            >
              <Text className="text-white text-lg font-semibold">Verify</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyCode;
