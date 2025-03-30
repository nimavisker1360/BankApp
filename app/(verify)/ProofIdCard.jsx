import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const ProofIdCard = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Photo ID Card</Text>
      <Text style={styles.subtitle}>
        Please point the camera at the ID card
      </Text>

      <View style={styles.cameraFrame}>
        <View style={styles.idCardPreview}>
          <View style={styles.idCard}>
            <View style={styles.idCardLeft}>
              <Image
                source={require("../../assets/images/IDCARD.jpg")}
                style={styles.profilePhoto}
              />
              <Text style={styles.signature}>Signature</Text>
            </View>

            <View style={styles.idCardRight}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>ID</Text>
                <Text style={styles.infoValue}>3637 4738 4899</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Name</Text>
                <Text style={styles.infoValue}>Andrew Ainsley</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>DoB</Text>
                <Text style={styles.infoValue}>12/27/1995</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Gender</Text>
                <Text style={styles.infoValue}>Male</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Address</Text>
                <Text style={styles.infoValue}>3517 W. Gray</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Religion</Text>
                <Text style={styles.infoValue}>Christian</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Marital</Text>
                <Text style={styles.infoValue}>Single</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Nationality</Text>
                <Text style={styles.infoValue}>United States</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Expired date</Text>
                <Text style={styles.infoValue}>09/10/2030</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cameraControls}>
        <TouchableOpacity style={styles.galleryButton}>
          <Text style={styles.galleryIcon}>🖼️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.captureButton}>
          <View style={styles.captureButtonInner} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.docButton}>
          <Text style={styles.docIcon}>📄</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A25",
    padding: 16,
    alignItems: "center",
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 24,
    left: 16,
    zIndex: 10,
    padding: 8,
  },
  backIcon: {
    color: "white",
    fontSize: 32,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 80,
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 40,
    textAlign: "center",
  },
  cameraFrame: {
    width: "100%",
    height: 300,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#4285F4",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  idCardPreview: {
    width: "90%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  idCard: {
    width: "100%",
    height: "100%",
    backgroundColor: "#4285F4",
    borderRadius: 16,
    flexDirection: "row",
    padding: 16,
  },
  idCardLeft: {
    width: "30%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profilePhoto: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#e0e0e0",
  },
  signature: {
    color: "white",
    fontStyle: "italic",
    fontFamily: "cursive",
    fontSize: 16,
  },
  idCardRight: {
    width: "70%",
    paddingLeft: 10,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  infoLabel: {
    color: "white",
    width: 80,
    fontSize: 10,
  },
  infoValue: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  cameraControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    width: "100%",
  },
  galleryButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  galleryIcon: {
    fontSize: 24,
  },
  captureButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#4285F4",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
  },
  captureButtonInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "white",
  },
  docButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
  docIcon: {
    fontSize: 24,
  },
});

export default ProofIdCard;
