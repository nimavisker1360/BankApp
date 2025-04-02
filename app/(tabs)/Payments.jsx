import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";

const PaymentCategoryItem = ({
  icon,
  title,
  subtitle,
  badge,
  showDivider = true,
}) => {
  return (
    <>
      <TouchableOpacity style={styles.categoryItem}>
        <View style={styles.categoryLeft}>
          {icon}
          <View style={styles.categoryTextContainer}>
            <Text style={styles.categoryTitle}>{title}</Text>
            {subtitle && (
              <Text style={styles.categorySubtitle}>{subtitle}</Text>
            )}
          </View>
        </View>
        <View style={styles.categoryRight}>
          {badge && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
          <MaterialIcons name="chevron-right" size={24} color="#999" />
        </View>
      </TouchableOpacity>
      {showDivider && <View style={styles.divider} />}
    </>
  );
};

const InsuranceItem = () => {
  return (
    <View style={styles.insuranceContainer}>
      <TouchableOpacity style={styles.insuranceItem}>
        <View style={styles.categoryLeft}>
          <Ionicons name="shield" size={24} color="#4361ee" />
          <View style={styles.categoryTextContainer}>
            <Text style={styles.categoryTitle}>Insurance</Text>
            <Text style={styles.insuranceSubtitle}>
              Papara Sigorta is now on its own website.
            </Text>
          </View>
        </View>
        <View style={styles.categoryRight}>
          <View style={styles.cashbackContainer}>
            <Text style={styles.cashbackText}>5% Cashback</Text>
            <MaterialIcons name="chevron-right" size={14} color="#888" />
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#999" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const NearbyPaymentOption = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.nearbyOption}>
      <View style={styles.nearbyIconContainer}>{icon}</View>
      <Text style={styles.nearbyTitle}>{title}</Text>
      <Text style={styles.nearbySubtitle}>{subtitle}</Text>
    </View>
  );
};

const Payments = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Payments</Text>
        <TouchableOpacity style={styles.summaryButton}>
          <View style={styles.summaryIcon}>
            <View
              style={[
                styles.summaryIconSegment,
                { backgroundColor: "#4CAF50" },
              ]}
            />
            <View
              style={[
                styles.summaryIconSegment,
                { backgroundColor: "#FFC107" },
              ]}
            />
            <View
              style={[
                styles.summaryIconSegment,
                { backgroundColor: "#F44336" },
              ]}
            />
            <View
              style={[
                styles.summaryIconSegment,
                { backgroundColor: "#2196F3" },
              ]}
            />
          </View>
          <Text style={styles.summaryText}>Summary</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Frequently Used Section */}
        <View style={styles.frequentlyUsedContainer}>
          <View style={styles.frequentlyUsedHeader}>
            <Text style={styles.frequentlyUsedTitle}>
              Frequently Used Actions and Instructions
            </Text>
            <TouchableOpacity>
              <Text style={styles.editDeleteText}>Edit/Delete</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.nearbyScrollView}
          >
            <NearbyPaymentOption
              icon={<Ionicons name="heart" size={28} color="white" />}
              title="İstanbulkart"
              subtitle="Travel Cards"
            />
            <NearbyPaymentOption
              icon={<FontAwesome5 name="snowflake" size={28} color="white" />}
              title="İgdaş"
              subtitle="Natural Gas"
            />
            <NearbyPaymentOption
              icon={<Ionicons name="sunny" size={28} color="white" />}
              title="Enerjisa Aye..."
              subtitle="Electricity"
            />
            <NearbyPaymentOption
              icon={<Ionicons name="water" size={28} color="white" />}
              title="İski"
              subtitle="Water"
            />
            <NearbyPaymentOption
              icon={<MaterialIcons name="router" size={28} color="white" />}
              title="Turk Telekom"
              subtitle="Internet"
            />
          </ScrollView>
        </View>

        {/* Insurance Section (Separate) */}
        <InsuranceItem />

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <PaymentCategoryItem
            icon={
              <MaterialIcons name="phone-android" size={24} color="#e07a5f" />
            }
            title="GSM TL/Package"
            badge="NEW"
          />

          <PaymentCategoryItem
            icon={
              <MaterialCommunityIcons
                name="train-car"
                size={24}
                color="#22c55e"
              />
            }
            title="Travel Cards"
          />

          <PaymentCategoryItem
            icon={<Ionicons name="game-controller" size={24} color="#7c3aed" />}
            title="Games & Digital Codes"
          />

          <PaymentCategoryItem
            icon={
              <MaterialCommunityIcons name="ticket" size={24} color="#3b82f6" />
            }
            title="Game of Chance"
            badge="NEW"
          />

          <PaymentCategoryItem
            icon={<Ionicons name="heart" size={24} color="#ef4444" />}
            title="Donation"
          />

          <PaymentCategoryItem
            icon={
              <FontAwesome5 name="luggage-cart" size={24} color="#0d9488" />
            }
            title="Airport Services"
          />

          <PaymentCategoryItem
            icon={<Feather name="smartphone" size={24} color="#22c55e" />}
            title="Phone"
          />

          <PaymentCategoryItem
            icon={<Ionicons name="water-outline" size={24} color="#0ea5e9" />}
            title="Water"
          />

          <PaymentCategoryItem
            icon={<MaterialIcons name="wifi" size={24} color="#9ca3af" />}
            title="Internet & TV"
          />

          <PaymentCategoryItem
            icon={
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={24}
                color="#facc15"
              />
            }
            title="Electricity"
          />

          <PaymentCategoryItem
            icon={
              <MaterialCommunityIcons name="fire" size={24} color="#ea580c" />
            }
            title="Natural Gas"
          />

          <PaymentCategoryItem
            icon={<FontAwesome name="gift" size={24} color="#ec4899" />}
            title="Gift Card"
            showDivider={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 40,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  summaryButton: {
    flexDirection: "column",
    alignItems: "center",
  },
  summaryIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  summaryIconSegment: {
    width: 12,
    height: 12,
  },
  summaryText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginHorizontal: 16,
    marginVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 50,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333",
  },
  scrollView: {
    flex: 1,
  },
  frequentlyUsedContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  frequentlyUsedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  frequentlyUsedTitle: {
    fontSize: 14,
    color: "#888",
  },
  editDeleteText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  nearbyScrollView: {
    flexDirection: "row",
  },
  nearbyOption: {
    alignItems: "center",
    marginRight: 20,
    width: 80,
  },
  nearbyIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  nearbyTitle: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  nearbySubtitle: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
  insuranceContainer: {
    backgroundColor: "#f9f9f9",
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  insuranceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  insuranceSubtitle: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
  cashbackContainer: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  cashbackText: {
    color: "#666",
    fontSize: 10,
    fontWeight: "500",
  },
  categoriesContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 100, // Extra space for bottom navigation
  },
  categoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  categoryLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryTextContainer: {
    marginLeft: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  categorySubtitle: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
  categoryRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  badgeContainer: {
    backgroundColor: "#e53e3e",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  badgeContainer2: {
    backgroundColor: "#22c55e",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
  },
  badgeText2: {
    color: "white",
    fontSize: 12,
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginLeft: 56,
  },
});

export default Payments;
