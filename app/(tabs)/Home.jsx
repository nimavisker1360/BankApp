import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const images = [
    require("../../assets/images/spotify.png"),
    require("../../assets/images/watson.png"),
    require("../../assets/images/Burgerking.png"),
  ];

  const accountCards = [
    {
      id: 1,
      icon: "flag-outline",
      iconColor: "#e11d48",
      iconType: "Ionicons",
      title: "Turkish Lira Account",
      amount: "₺1.264,97",
      iban: "TR85 0082 9000 0949 1658 6381 91",
      buttons: [
        { title: "Deposit/Withdraw", icon: "document-outline", dark: false },
        { title: "Send", icon: "paper-plane", dark: true },
      ],
    },
    {
      id: 2,
      icon: "gold",
      iconColor: "#eab308",
      iconType: "MaterialCommunityIcons",
      title: "Precious Metals",
      amount: "₺0,00",
      subAmount: "₺0,00",
      tabs: ["All", "Gold", "Silver", "Platinum"],
      selectedTab: "All",
      detail: "My Precious Metal Assets",
      button: "All Precious Metals",
    },
    {
      id: 3,
      icon: "line-chart",
      iconColor: "#0369a1",
      iconType: "FontAwesome",
      title: "Investment Account",
      subtitle: "Buy / Sell stocks",
      markets: ["Nasdaq", "NYSE", "BORSA ISTANBUL"],
      button: "Join The Waitlist",
    },
    {
      id: 4,
      icon: "bank",
      iconColor: "#a855f7",
      iconType: "FontAwesome",
      title: "Savings Account",
      subtitle: "Set a goal, save money.",
      button: "Open a Savings Account",
    },
    {
      id: 5,
      icon: "wallet-outline",
      iconColor: "#000000",
      iconType: "Ionicons",
      title: "My Assets",
      amount: "₺1.264,97",
      accounts: [
        {
          name: "Turkish Lira Account",
          amount: "₺1.264,97",
          icon: "flag-outline",
          color: "#e11d48",
        },
        {
          name: "Precious Metals",
          amount: "₺0,00",
          icon: "gold",
          color: "#eab308",
        },
        {
          name: "Investment Account",
          amount: "—",
          icon: "line-chart",
          color: "#0369a1",
        },
        {
          name: "Savings Account",
          amount: "—",
          icon: "bank",
          color: "#a855f7",
        },
      ],
    },
  ];

  const flatListRef = useRef(null);
  const cardListRef = useRef(null);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentImageIndex(index);
  };

  const handleCardScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentCardIndex(index);
  };

  // Auto-scroll functionality every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (flatListRef.current) {
        const nextIndex = (currentImageIndex + 1) % images.length;
        flatListRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        setCurrentImageIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  // Render the appropriate icon based on icon type
  const renderIcon = (iconName, iconType, iconColor) => {
    switch (iconType) {
      case "FontAwesome":
        return <FontAwesome name={iconName} size={24} color={iconColor} />;
      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
        );
      case "Ionicons":
      default:
        return <Ionicons name={iconName} size={24} color={iconColor} />;
    }
  };

  const renderCardItem = ({ item }) => {
    switch (item.id) {
      case 1: // Turkish Lira Account
        return (
          <View
            className="bg-white p-4 rounded-xl mx-2"
            style={{ width: width - 40, height: 220 }}
          >
            <View className="flex-row items-center mb-2">
              <Text className="text-red-500 text-lg mr-2">₺</Text>
              <Text className="text-base font-semibold">{item.title}</Text>
            </View>

            <View className="flex-row items-center mb-2">
              <Text className="text-3xl font-bold">{item.amount}</Text>
              <TouchableOpacity className="ml-2">
                <Ionicons
                  name="information-circle-outline"
                  size={22}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            <View className="mb-3">
              <Text className="text-gray-500">Your IBAN:</Text>
              <Text className="font-semibold text-sm">{item.iban}</Text>
            </View>

            <View className="flex-row">
              <TouchableOpacity className="flex-1 mr-2 border border-gray-300 rounded-lg py-2 flex-row items-center justify-center">
                <Ionicons name={item.buttons[0].icon} size={18} color="black" />
                <Text className="font-semibold ml-2 text-sm">
                  {item.buttons[0].title}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-1 ml-2 bg-black rounded-lg py-2 flex-row items-center justify-center">
                <Ionicons name={item.buttons[1].icon} size={18} color="white" />
                <Text className="font-semibold text-white ml-2 text-sm">
                  {item.buttons[1].title}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );

      case 2: // Precious Metals
        return (
          <View
            className="bg-white p-4 rounded-xl mx-2"
            style={{ width: width - 40, height: 220 }}
          >
            <View className="flex-row">
              {item.tabs.map((tab, index) => (
                <View
                  key={index}
                  className={`mr-3 ${
                    tab === item.selectedTab
                      ? "border-b-2 border-black pb-1"
                      : "pb-1"
                  }`}
                >
                  <TouchableOpacity className="flex-row items-center">
                    <View
                      className={`h-5 w-5 rounded-full ${
                        tab === "All"
                          ? "bg-amber-300"
                          : tab === "Gold"
                          ? "bg-yellow-400"
                          : tab === "Silver"
                          ? "bg-gray-300"
                          : "bg-gray-200"
                      } mr-1 items-center justify-center`}
                    >
                      <MaterialCommunityIcons
                        name="gold"
                        size={14}
                        color={
                          tab === "Silver" || tab === "Platinum"
                            ? "white"
                            : "#a16207"
                        }
                      />
                    </View>
                    <Text className="font-semibold text-xs">{tab}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            <View className="my-4">
              <Text className="text-gray-500 text-xs">{item.detail}</Text>
              <Text className="text-3xl font-bold mt-1">{item.amount}</Text>
              <Text className="text-red-500 mt-1 text-sm">
                ▼ {item.subAmount}
              </Text>
            </View>

            <TouchableOpacity className="border-t border-gray-200 pt-4">
              <View className="flex-row items-center justify-between">
                <Text className="text-base font-bold">{item.button}</Text>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        );

      case 3: // Investment Account
        return (
          <View
            className="bg-white p-4 rounded-xl mx-2"
            style={{ width: width - 40, height: 220 }}
          >
            <View className="flex-row items-center mb-3">
              <View className="flex-row items-center">
                <FontAwesome name="line-chart" size={24} color="#0369a1" />
                <View className="flex-row ml-2">
                  {item.markets.map((market, index) => (
                    <Text
                      key={index}
                      className={`mr-2 ${
                        index === 0
                          ? "text-blue-600 font-bold"
                          : "text-gray-700"
                      } text-xs`}
                    >
                      {market === "BORSA ISTANBUL" ? (
                        <Text className="text-teal-500 text-[8px]">
                          BORSA ISTANBUL
                        </Text>
                      ) : (
                        market
                      )}
                    </Text>
                  ))}
             
                </View>
                
              </View>
              
            </View>
            

            <View className="mb-3">
              <Text className="text-xl font-bold mb-1">
                Investment{"\n"}Account
              </Text>
              <Text className="text-gray-500 mb-1 text-xs">
                {item.subtitle}
              </Text>
            </View>

          

            <TouchableOpacity className="bg-white border border-gray-300 rounded-lg py-2 flex-row items-center justify-between px-4 mt-5">
              <Text className="text-sm font-semibold">{item.button}</Text>
              <Ionicons name="notifications-outline" size={22} color="black" />
            </TouchableOpacity>
            
          </View>
          
        );

      case 4: // Savings Account
        return (
          <View
            className="bg-white p-4 rounded-xl mx-2"
            style={{ width: width - 40, height: 220 }}
          >
            <View className="mb-3">
              <View className="h-12 w-12 rounded-full bg-purple-100 items-center justify-center mb-2">
                <FontAwesome name="bank" size={24} color="#a855f7" />
              </View>
              <Text className="text-2xl font-bold">{item.title}</Text>
              <Text className="text-gray-500 mt-1 text-xs">
                {item.subtitle}
              </Text>
            </View>

            <View className="w-2/3 mb-2">
              {/* <Image
                source={require("../../assets/images/poster01.png")}
                className="h-32 w-32"
                resizeMode="contain"
              /> */}
            </View>

            <TouchableOpacity className="bg-white border border-gray-300 rounded-lg py-2 flex-row items-center justify-between px-4 mt-5">
              <Text className="text-sm font-semibold">{item.button}</Text>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
          </View>
        );

      case 5: // My Assets
        return (
          <View
            className="bg-white p-4 rounded-xl mx-2"
            style={{ width: width - 40, height: 220 }}
          >
            <View className="flex-row items-center justify-between mb-2">
              <View className="flex-row items-center">
                <View className="h-8 w-8 rounded-full bg-black items-center justify-center mr-2">
                  <Text className="text-white font-bold">B</Text>
                </View>
                <Text className="text-base font-bold">{item.title}</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-base font-bold mr-2">{item.amount}</Text>
                <TouchableOpacity className="h-8 w-12 bg-black rounded-full items-center justify-center">
                  <Text className="text-white font-bold">₺</Text>
                </TouchableOpacity>
              </View>
            </View>

            {item.accounts.map((account, index) => (
              <View
                key={index}
                className="flex-row items-center justify-between py-1 border-t border-gray-100"
              >
                <View className="flex-row items-center">
                  <View
                    className={`h-8 w-8 rounded-full ${
                      account.name === "Turkish Lira Account"
                        ? "bg-red-100"
                        : account.name === "Precious Metals"
                        ? "bg-yellow-100"
                        : account.name === "Investment Account"
                        ? "bg-blue-100"
                        : "bg-purple-100"
                    } items-center justify-center mr-2`}
                  >
                    {account.name === "Turkish Lira Account" ? (
                      <Ionicons name="flag-outline" size={16} color="#e11d48" />
                    ) : account.name === "Precious Metals" ? (
                      <MaterialCommunityIcons
                        name="gold"
                        size={16}
                        color="#eab308"
                      />
                    ) : account.name === "Investment Account" ? (
                      <FontAwesome
                        name="line-chart"
                        size={16}
                        color="#0369a1"
                      />
                    ) : (
                      <FontAwesome name="bank" size={16} color="#a855f7" />
                    )}
                  </View>
                  <Text className="font-semibold text-xs">{account.name}</Text>
                </View>
                <Text className="font-bold text-xs">{account.amount}</Text>
              </View>
            ))}
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 mb-16">
      {/* Services Icons */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-4 py-5"
      >
        <View className="items-center w-16 mx-2">
          <View className="h-12 w-12 rounded-full border border-gray-200 items-center justify-center bg-white shadow-sm">
            <Ionicons name="fast-food-outline" size={20} color="green" />
          </View>
          <Text className="text-[10px] mt-1 text-center">
            Ramadan{"\n"}Feast
          </Text>
        </View>
        

        <View className="items-center w-16 mx-2">
          <View className="h-12 w-12 rounded-full border border-gray-200 items-center justify-center bg-white shadow-sm">
            <Ionicons name="document-text-outline" size={20} color="green" />
          </View>
          <Text className="text-[10px] mt-1 text-center">Announcements</Text>
        </View>

        <View className="items-center w-16 mx-2">
          <View className="h-12 w-12 rounded-full border border-gray-200 items-center justify-center bg-white shadow-sm">
            <Ionicons name="globe-outline" size={20} color="green" />
          </View>
          <Text className="text-[10px] mt-1 text-center h-8">
            International{"\n"}Transfer
          </Text>
        </View>

        <View className="items-center w-16 mx-2">
          <View className="h-12 w-12 rounded-full border border-gray-200 items-center justify-center bg-white shadow-sm">
            <AntDesign name="creditcard" size={20} color="green" />
          </View>
          <Text className="text-[10px] mt-1 text-center">BankApp Card</Text>
        </View>

        <View className="items-center w-16 mx-2">
          <View className="h-12 w-12 rounded-full border border-gray-200 items-center justify-center bg-white shadow-sm">
            <FontAwesome5 name="plane" size={18} color="green" />
          </View>
          <Text className="text-[10px] mt-1 text-center">
            Travel{"\n"}Privilege
          </Text>
        </View>

        {/* New icons from the image */}
        <View className="items-center w-16 mx-2">
          <View className="h-12 w-12 rounded-full border border-gray-200 items-center justify-center bg-white shadow-sm">
            <FontAwesome5 name="id-card" size={18} color="green" />
          </View>
          <Text className="text-[10px] mt-1 text-center">
            Verified{"\n"}Account
          </Text>
        </View>

        <View className="items-center w-16 mx-2">
          <View className="h-12 w-12 rounded-full border border-gray-200 items-center justify-center bg-white shadow-sm">
            <MaterialIcons name="savings" size={20} color="green" />
          </View>
          <Text className="text-[10px] mt-1 text-center">
            Savings{"\n"}Account
          </Text>
        </View>

        <View className="items-center w-16 mx-2">
          <View className="h-12 w-12 rounded-full border border-gray-200 items-center justify-center bg-white shadow-sm">
            <MaterialIcons name="school" size={20} color="green" />
          </View>
          <Text className="text-[10px] mt-1 text-center">{"<"}18</Text>
        </View>

        <View className="items-center w-16 mx-2">
          <View className="h-12 w-12 rounded-full border border-gray-200 items-center justify-center bg-white shadow-sm">
            <FontAwesome name="calendar" size={18} color="green" />
          </View>
          <Text className="text-[10px] mt-1 text-center">
            Monthly{"\n"}Summary
          </Text>
        </View>

        <View className="items-center w-16 mx-2">
          <View className="h-12 w-12 rounded-full border border-gray-200 items-center justify-center bg-white shadow-sm">
            <MaterialCommunityIcons
              name="bank-transfer"
              size={20}
              color="green"
            />
          </View>
          <Text className="text-[10px] mt-1 text-center">Payment</Text>
        </View>
      </ScrollView>

      {/* Account Card - Main section */}
      <View className="my-3">
        <FlatList
          ref={cardListRef}
          data={accountCards}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleCardScroll}
          renderItem={renderCardItem}
          keyExtractor={(item) => item.id.toString()}
          snapToInterval={width - 36}
          decelerationRate="fast"
          getItemLayout={(data, index) => ({
            length: width - 36,
            offset: (width - 36) * index,
            index,
          })}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />

        {/* Pagination dots */}
        <View className="flex-row justify-center my-4">
          {accountCards.map((_, index) => (
            <View
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentCardIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </View>
      </View>

      {/* Monthly Summary */}
      <View
        className="mx-4 bg-white rounded-xl shadow-lg"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 4, height: 6 },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          elevation: 8,
        }}
      >
        <View className="p-4 flex-row items-center">
          <View className="h-12 w-12 bg-orange-100 rounded-md items-center justify-center mr-4">
            <Ionicons name="document-text-outline" size={24} color="#f97316" />
          </View>
          <View className="flex-1">
            <Text className="text-gray-500">Today 06:00</Text>
            <Text className="text-lg font-bold">
              Your monthly summary is ready.
            </Text>
            <Text className="text-gray-500">
              Click to see the summary of March
            </Text>
          </View>
          <View className="h-6 w-6 bg-red-500 rounded-full items-center justify-center">
            <Text className="text-white font-bold">3</Text>
          </View>
        </View>
      </View>

      {/* Account Transactions */}
      <View className="px-4 pt-6 pb-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-500 uppercase font-medium">
            ACCOUNT TRANSACTIONS
          </Text>
          <TouchableOpacity>
            <Ionicons name="arrow-forward" size={18} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Transaction Items */}
      <View className="px-4">
        <View className="flex-row items-center justify-between py-4">
          <View className="flex-row items-center">
            <View className="h-12 w-12 bg-blue-900 rounded-full items-center justify-center mr-4">
              <FontAwesome5 name="dollar-sign" size={24} color="white" />
            </View>
            <View>
              <Text className="text-lg font-bold">Golnaz</Text>
              <Text className="text-gray-500">FAST Money Transfer</Text>
            </View>
          </View>
          <View className="items-end">
            <Text className="text-lg font-bold text-red-500">₺2.500,00</Text>
            <Text className="text-gray-500">Today 17:16</Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between py-4 border-t border-gray-100">
          <View className="flex-row items-center">
            <View className="h-12 w-12 bg-blue-100 rounded-full items-center justify-center mr-4">
              <Text className="text-blue-600 font-bold text-lg">P</Text>
            </View>
            <View>
              <Text className="text-lg font-bold">İspark</Text>
              <Text className="text-gray-500">ApBank Card</Text>
            </View>
          </View>
          <View className="items-end">
            <Text className="text-lg font-bold text-red-500">₺200,00</Text>
            <Text className="text-gray-500">Yesterday 18:27</Text>
          </View>
        </View>
      </View>

      {/* Cashback */}
      <View className="px-4 pt-6 pb-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-500 uppercase font-medium">CASHBACK</Text>
          <TouchableOpacity>
            <Ionicons name="arrow-forward" size={18} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Cashback Earnings Card */}
      <View className="mx-4 my-3 bg-white p-5 rounded-xl shadow-sm">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-gray-500">Earned this month</Text>
            <Text className="text-3xl font-bold mt-1">₺0,00</Text>
          </View>
          <View className="items-end">
            <Text className="text-gray-500">More to earn this month</Text>
            <Text className="text-3xl font-bold mt-1">₺1.975,00</Text>
          </View>
        </View>
        <View className="mt-3 flex-row items-center">
          <View className="h-10 w-10 rounded-full bg-white border border-gray-200 items-center justify-center">
            <Text className="text-xl font-bold">P</Text>
          </View>
          <View className="h-1 flex-1 bg-gray-200 ml-2" />
        </View>
      </View>

      {/* Cashback Promo Card */}
      <View className="mx-4 my-3 bg-white p-5 rounded-xl shadow-sm">
        <View className="flex-row">
          <View className="mr-5">
            <View className="flex-row items-center mb-2">
              <View>
                <Text className="mt-2 font-bold text-lg">Spring</Text>
                <Text className="font-bold text-lg">2025</Text>
              </View>
              <View className="h-14 w-14 rounded-full bg-green-100 items-center justify-center ml-3">
                <Ionicons name="leaf-outline" size={28} color="#10b981" />
              </View>
            </View>

            <View className="mt-4 bg-green-100 py-2 px-4 rounded-lg">
              <Text className="text-2xl font-bold">₺1.975</Text>
            </View>
            <Text className="mt-2 text-lg">earn instant cash</Text>
          </View>

          <View className="flex-1 justify-end items-end">
            <Image
              source={require("../../assets/images/poster01.png")}
              className="h-56 w-48 absolute right-0 top-0"
              resizeMode="contain"
            />
            {/*  add icons */}
          </View>
        </View>
      </View>

      {/* Cashback Image Slider */}
      <View className="my-3 px-4">
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          renderItem={({ item }) => (
            <View style={{ width: width - 20, marginRight: 2 }}>
              <Image
                source={item}
                style={{
                  flex: 1,
                  height: 300,
                  width: width - 40,
                  borderRadius: 20,
                }}
                resizeMode="cover"
              />
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={width - 25}
          decelerationRate="fast"
          getItemLayout={(data, index) => ({
            length: width - 20,
            offset: (width - 20) * index,
            index,
          })}
        />
      </View>

      {/* Invite Friends Card */}
      <View className="mx-4 my-3 mb-10 bg-pink-100 p-5 rounded-xl">
        <View className="flex-row justify-between">
          <View className="w-3/5">
            <Text className="text-2xl font-bold">
              Invite Your Friend, Win Together
            </Text>
            <TouchableOpacity className="mt-4">
              <Text className="text-lg underline">Detailed Information</Text>
            </TouchableOpacity>
          </View>
          <View className="items-end">
            <Image
              source={require("../../assets/images/gift.png")}
              className="h-[150px] w-[150px]"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
