import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Try to import Contacts - this may throw an error if the package is not installed
let Contacts;
try {
  Contacts = require("expo-contacts");
} catch (error) {
  console.error("expo-contacts is not installed", error);
}

const SendMoney = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("phone");
  const [searchQuery, setSearchQuery] = useState("");
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showInstallMessage, setShowInstallMessage] = useState(!Contacts);
  const [activeSubTab, setActiveSubTab] = useState("paparaNo");
  const [paparaNumber, setPaparaNumber] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    if (!Contacts) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
            sort: Contacts.SortTypes.FirstName,
          });

          if (data.length > 0) {
            // Filter contacts with phone numbers
            const contactsWithPhones = data.filter(
              (contact) =>
                contact.phoneNumbers && contact.phoneNumbers.length > 0
            );

            // Format the phone numbers
            const formattedContacts = contactsWithPhones.map((contact) => {
              const phoneNumber = contact.phoneNumbers[0].number.replace(
                /\s+/g,
                ""
              );
              // Generate random to simulate if they use Papara or not (for demo purposes)
              const usesPapara = Math.random() > 0.3;

              return {
                id: contact.id,
                name: contact.name,
                phoneNumber: phoneNumber,
                image: contact.imageAvailable ? contact.image.uri : null,
                usesPapara,
                initials: getInitials(contact.name),
              };
            });

            setContacts(formattedContacts);
          }
        } else {
          Alert.alert(
            "Permission Denied",
            "You need to grant contacts permission to use this feature",
            [{ text: "OK", onPress: () => router.back() }]
          );
        }
      } catch (err) {
        console.error("Error fetching contacts:", err);
        Alert.alert("Error", "There was an error accessing your contacts.");
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const getInitials = (name) => {
    if (!name) return "?";
    const names = name.split(" ");
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (
      names[0].charAt(0) + names[names.length - 1].charAt(0)
    ).toUpperCase();
  };

  const filterContacts = () => {
    if (!searchQuery) return contacts;
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.phoneNumber.includes(searchQuery)
    );
  };

  const handleContactPress = (contact) => {
    // Navigate to amount entry screen or process the selection
    Alert.alert("Contact Selected", `You selected ${contact.name}`);
    // In a real app, you would navigate to the next step:
    // router.push({ pathname: '/amount-entry', params: { contactId: contact.id } });
  };

  // Generate a consistent color based on initials
  const generateAvatarColor = (initials) => {
    const colors = [
      "#6366f1",
      "#8b5cf6",
      "#d946ef",
      "#ec4899",
      "#f43f5e",
      "#ef4444",
      "#f97316",
      "#eab308",
      "#84cc16",
      "#22c55e",
      "#10b981",
      "#14b8a6",
      "#06b6d4",
      "#0ea5e9",
      "#3b82f6",
      "#6366f1",
    ];
    const index = (initials.charCodeAt(0) || 0) % colors.length;
    return colors[index];
  };

  // Quick contact for the demo (you would replace this with actual quick contacts)
  const quickContacts = [
    {
      id: "quick1",
      name: "آيدين",
      image: null,
      initials: "آ",
    },
  ];

  const renderQuickContact = ({ item }) => (
    <TouchableOpacity style={styles.quickContactItem}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.quickContactImage} />
      ) : (
        <View
          style={[styles.quickContactAvatar, { backgroundColor: "#e5e7eb" }]}
        >
          <Text style={styles.quickContactInitials}>{item.initials}</Text>
        </View>
      )}
      <Text style={styles.quickContactName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderContactItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => handleContactPress(item)}
    >
      <View style={styles.contactLeftSection}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.contactImage} />
        ) : (
          <View
            style={[
              styles.contactAvatar,
              { backgroundColor: generateAvatarColor(item.initials) },
            ]}
          >
            <Text style={styles.contactInitials}>{item.initials}</Text>
          </View>
        )}
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactPhone}>+{item.phoneNumber}</Text>
        </View>
      </View>

      {item.usesPapara && (
        <View style={styles.paparaIcon}>
          <Text style={styles.paparaText}>P</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const renderQuickTransactions = () => {
    const quickTransactions = [
      {
        id: "1",
        name: "Kozaparak Toplu...",
        color: "#22c55e",
        initials: "K",
      },
      {
        id: "2",
        name: "BURGAZ BLOCK...",
        color: "#22c55e",
        initials: "B",
      },
      {
        id: "3",
        name: "Golnaz",
        color: "#3b82f6",
        initials: "$",
      },
      {
        id: "4",
        name: "NIMA BAGHERI...",
        color: "#3b82f6",
        initials: "$",
      },
    ];

    return (
      <View style={styles.quickContactsContainer}>
        <View style={styles.quickContactsHeader}>
          <Text style={styles.quickContactsTitle}>Quick Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.addEditButton}>Add/Edit</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={quickTransactions}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.quickContactItem}>
              <View
                style={[
                  styles.quickContactAvatar,
                  { backgroundColor: item.color },
                ]}
              >
                <Text style={[styles.quickContactInitials, { color: "white" }]}>
                  {item.initials}
                </Text>
              </View>
              <Text style={styles.quickContactName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickContactsList}
        />
      </View>
    );
  };

  const renderPaparaNoPanelContent = () => {
    return (
      <View style={styles.paparaNoContent}>
        {/* Sub tabs for Papara No/IBAN and Easy Address */}
        <View style={styles.subTabContainer}>
          <TouchableOpacity
            style={[
              styles.subTabButton,
              activeSubTab === "paparaNo" && styles.activeSubTabButton,
            ]}
            onPress={() => setActiveSubTab("paparaNo")}
          >
            <Text
              style={[
                styles.subTabButtonText,
                activeSubTab === "paparaNo" && styles.activeSubTabButtonText,
              ]}
            >
              Papara No/IBAN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.subTabButton,
              activeSubTab === "easyAddress" && styles.activeSubTabButton,
            ]}
            onPress={() => setActiveSubTab("easyAddress")}
          >
            <Text
              style={[
                styles.subTabButtonText,
                activeSubTab === "easyAddress" && styles.activeSubTabButtonText,
              ]}
            >
              Easy Address
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input field for Papara Number */}
        <View style={styles.paparaInputContainer}>
          <TextInput
            style={styles.paparaInput}
            placeholder="Papara Number or IBAN"
            value={paparaNumber}
            onChangeText={setPaparaNumber}
            placeholderTextColor="#6b7280"
          />
          <TouchableOpacity style={styles.cameraButton}>
            <Ionicons name="camera-outline" size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Money</Text>
        <TouchableOpacity style={styles.infoButton}>
          <Ionicons name="information-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {showInstallMessage ? (
        <View style={styles.installMessageContainer}>
          <Text style={styles.installTitle}>Missing Dependency</Text>
          <Text style={styles.installText}>
            To use this feature, you need to install the expo-contacts package.
          </Text>
          <Text style={styles.codeBlock}>
            npm install expo-contacts{"\n"}
            npx expo install expo-contacts
          </Text>
          <Text style={styles.installText}>
            After installing, rebuild your app and try again.
          </Text>
          <TouchableOpacity
            style={styles.backToHomeButton}
            onPress={() => router.push("/Home")}
          >
            <Text style={styles.backToHomeText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === "phone" && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab("phone")}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === "phone" && styles.activeTabButtonText,
                ]}
              >
                Phone Number
              </Text>
              {activeTab === "phone" && (
                <View style={styles.activeTabIndicator} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === "papara" && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab("papara")}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === "papara" && styles.activeTabButtonText,
                ]}
              >
                Papara No/IBAN
              </Text>
              {activeTab === "papara" && (
                <View style={styles.activeTabIndicator} />
              )}
            </TouchableOpacity>
          </View>

          {/* Main content view */}
          <View style={styles.mainContentContainer}>
            {/* Render appropriate content based on active tab */}
            {activeTab === "phone" ? (
              <>
                {/* Quick Contacts */}
                <View style={styles.quickContactsContainer}>
                  <View style={styles.quickContactsHeader}>
                    <Text style={styles.quickContactsTitle}>
                      Quick contacts
                    </Text>
                    <TouchableOpacity>
                      <Text style={styles.addEditButton}>Add/Edit</Text>
                    </TouchableOpacity>
                  </View>

                  <FlatList
                    data={quickContacts}
                    renderItem={renderQuickContact}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.quickContactsList}
                  />
                </View>

                {/* Search */}
                <View style={styles.searchContainer}>
                  <Ionicons
                    name="search"
                    size={22}
                    color="#9ca3af"
                    style={styles.searchIcon}
                  />
                  <TextInput
                    style={styles.searchInput}
                    placeholder="To Whom?"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholderTextColor="#9ca3af"
                  />
                </View>

                {/* Contact list header */}
                <View style={styles.contactsHeader}>
                  <Text style={styles.contactsHeaderText}>
                    Contacts using Papara •{" "}
                    {contacts.filter((c) => c.usesPapara).length}
                  </Text>
                </View>

                {/* Contact List */}
                {loading ? (
                  <View style={styles.loadingContainer}>
                    <Text>Loading contacts...</Text>
                  </View>
                ) : (
                  <FlatList
                    data={filterContacts()}
                    renderItem={renderContactItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.contactsList}
                    showsVerticalScrollIndicator={false}
                  />
                )}
              </>
            ) : (
              <>
                {/* Quick Transactions for Papara No Tab */}
                {renderQuickTransactions()}

                {/* Papara No/IBAN Content */}
                {renderPaparaNoPanelContent()}
              </>
            )}
          </View>

          {/* Continue Button - Now positioned at bottom of screen */}
          {activeTab === "papara" && (
            <View style={[styles.continueButtonContainer, keyboardVisible]}>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  infoButton: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    position: "relative",
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  tabButtonText: {
    fontSize: 14,
    color: "#9ca3af",
    fontWeight: "500",
  },
  activeTabButtonText: {
    color: "#000",
    fontWeight: "600",
  },
  activeTabIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#000",
  },
  quickContactsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  quickContactsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  quickContactsTitle: {
    fontSize: 14,
    color: "#6b7280",
  },
  addEditButton: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  quickContactsList: {
    paddingRight: 10,
    alignItems: "flex-start",
  },
  quickContactItem: {
    alignItems: "center",
    marginRight: 8,
    width: 60,
  },
  quickContactImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  quickContactAvatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
  },
  quickContactInitials: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },
  quickContactName: {
    marginTop: 8,
    fontSize: 12,
    color: "#374151",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    paddingHorizontal: 16,
    height: 45,
    backgroundColor: "#f9fafb",
    borderRadius: 28,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#1f2937",
  },
  contactsHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  contactsHeaderText: {
    fontSize: 12,
    color: "#6b7280",
  },
  contactsList: {
    paddingHorizontal: 16,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  contactLeftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  contactAvatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  contactInitials: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  contactInfo: {
    justifyContent: "center",
  },
  contactName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
  },
  contactPhone: {
    fontSize: 12,
    color: "#6b7280",
  },
  paparaIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
  },
  paparaText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  installMessageContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  installTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  installText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  codeBlock: {
    fontFamily: "monospace",
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
  },
  backToHomeButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backToHomeText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subTabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginTop: 10,
  },
  subTabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  activeSubTabButton: {
    backgroundColor: "#000",
  },
  subTabButtonText: {
    fontSize: 14,
    color: "#9ca3af",
    fontWeight: "500",
  },
  activeSubTabButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  paparaNoContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  paparaInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 45,
    marginBottom: 30,
  },
  paparaInput: {
    flex: 1,
    fontSize: 14,
    color: "#1f2937",
    height: "100%",
  },
  cameraButton: {
    padding: 8,
  },
  mainContentContainer: {
    flex: 1,
  },
  continueButtonContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  continueButtonWithKeyboard: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  continueButton: {
    backgroundColor: "#BEBEBE",
    height: 45,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

export default SendMoney;
