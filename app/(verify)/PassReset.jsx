import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

const PassReset = () => {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Forgot Password</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.resetIconContainer}>
          <Ionicons name="lock-open-outline" size={60} color="#2979FF" />
        </View>

        <Text style={styles.title}>Enter to Your Email</Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={24}
            color="#888"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
            onPress={() => setRememberMe(!rememberMe)}
          >
            {rememberMe && <Ionicons name="checkmark" size={18} color="#000" />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View>

        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rememberLink}>
          <Text style={styles.rememberLinkText}>Remember the password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <Link href="/signup" asChild>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  resetIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#f0f7ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#2979FF",
    marginBottom: 30,
  },
  avatarText: {
    fontSize: 70,
    color: "#2979FF",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 30,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#f0f0f0",
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#333",
  },
  resetButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#2979FF",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  rememberLink: {
    marginBottom: 30,
  },
  rememberLinkText: {
    color: "#2979FF",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 16,
    color: "#333",
  },
  signUpText: {
    fontSize: 16,
    color: "#2979FF",
    fontWeight: "bold",
  },
});

export default PassReset;
