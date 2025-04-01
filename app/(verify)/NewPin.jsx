import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function NewPin() {
  const [pin, setPin] = useState("");
  const router = useRouter();

  const handleNumberPress = (number) => {
    if (pin.length < 4) {
      setPin((prev) => prev + number);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const handleContinue = () => {
    if (pin.length === 4) {
      // Save PIN logic here
      router.push("/(app)");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Create New PIN</Text>
      </View>

      <Text style={styles.subtitle}>
        Add a PIN number to make your account more secure.
      </Text>

      <View style={styles.pinContainer}>
        {[0, 1, 2, 3].map((index) => (
          <View
            key={index}
            style={[styles.pinBox, index < pin.length && styles.pinBoxFilled]}
          >
            {index < pin.length && <Text style={styles.pinDot}>|</Text>}
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.continueButton,
          pin.length === 4 && styles.continueButtonActive,
        ]}
        onPress={handleContinue}
        disabled={pin.length !== 4}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.keypadContainer}>
        <View style={styles.keypadRow}>
          {[1, 2, 3].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.keypadButton}
              onPress={() => handleNumberPress(num.toString())}
            >
              <Text style={styles.keypadButtonText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keypadRow}>
          {[4, 5, 6].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.keypadButton}
              onPress={() => handleNumberPress(num.toString())}
            >
              <Text style={styles.keypadButtonText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keypadRow}>
          {[7, 8, 9].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.keypadButton}
              onPress={() => handleNumberPress(num.toString())}
            >
              <Text style={styles.keypadButtonText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keypadRow}>
          <View style={styles.keypadButton} />
          <TouchableOpacity
            style={styles.keypadButton}
            onPress={() => handleNumberPress("0")}
          >
            <Text style={styles.keypadButtonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton} onPress={handleDelete}>
            <Ionicons name="backspace-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  pinBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  pinBoxFilled: {
    borderColor: "#2196F3",
    backgroundColor: "white",
  },
  pinDot: {
    fontSize: 24,
    color: "#2196F3",
  },
  continueButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  continueButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  keypadContainer: {
    marginTop: "auto",
  },
  keypadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  keypadButton: {
    width: "30%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  keypadButtonText: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
