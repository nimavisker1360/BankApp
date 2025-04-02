import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const MoneyTransferModal = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (visible) {
      // Instantly set the background to visible
      // Animate only the content sliding up with spring animation
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 45,
        friction: 7,
        useNativeDriver: true,
      }).start();
    } else {
      slideAnim.setValue(300);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.modalContainer}>
      <Animated.View
        style={[
          styles.modalContent,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            // Handle Send Money
            onClose();
          }}
        >
          <Ionicons name="paper-plane-outline" size={24} color="black" />
          <Text style={styles.optionText}>Send Money</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            // Handle Request Money
            onClose();
          }}
        >
          <Ionicons name="arrow-undo-outline" size={24} color="black" />
          <Text style={styles.optionText}>Request Money</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            // Handle International Money Transfer
            onClose();
          }}
        >
          <Ionicons name="globe-outline" size={24} color="black" />
          <Text style={styles.optionText}>International Money Transfer</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            // Handle Secure Payment Transfer
            onClose();
          }}
        >
          <Ionicons name="shield-checkmark-outline" size={24} color="black" />
          <Text style={styles.optionText}>Secure Payment Transfer</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            // Handle Recurring Transfer
            onClose();
          }}
        >
          <Ionicons name="refresh-outline" size={24} color="black" />
          <Text style={styles.optionText}>Recurring Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    zIndex: 1000,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: -1,
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    zIndex: 1,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  cancelButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  cancelText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MoneyTransferModal;
