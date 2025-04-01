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
  const images = [
    require("../../assets/images/spotify.png"),
    require("../../assets/images/watson.png"),
    require("../../assets/images/Burgerking.png"),
  ];

  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setCurrentImageIndex(index);
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
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <ScrollView className="flex-1 bg-gray-50 mb-16">
      {/* Services Icons */}
      <View className="flex-row justify-between px-5 py-6">
        <View className="items-center">
          <View className="h-16 w-16 rounded-full border border-gray-200 items-center justify-center bg-white">
            <Ionicons name="fast-food-outline" size={28} color="green" />
          </View>
          <Text className="text-xs mt-2 text-center">Ramadan{"\n"}Feast</Text>
        </View>

        <View className="items-center">
          <View className="h-16 w-16 rounded-full border border-gray-200 items-center justify-center bg-white">
            <Ionicons name="document-text-outline" size={28} color="green" />
          </View>
          <Text className="text-xs mt-2 text-center">Announcements</Text>
        </View>

        <View className="items-center">
          <View className="h-16 w-16 rounded-full border border-gray-200 items-center justify-center bg-white">
            <Ionicons name="globe-outline" size={28} color="green" />
          </View>
          <Text className="text-xs mt-2 text-center">
            International{"\n"}Money Transfer
          </Text>
        </View>

        <View className="items-center">
          <View className="h-16 w-16 rounded-full border border-gray-200 items-center justify-center bg-white">
            <AntDesign name="creditcard" size={28} color="green" />
          </View>
          <Text className="text-xs mt-2 text-center">BankApp Card</Text>
        </View>

        <View className="items-center">
          <View className="h-16 w-16 rounded-full border border-gray-200 items-center justify-center bg-white">
            <FontAwesome5 name="plane" size={25} color="green" />
          </View>
          <Text className="text-xs mt-2 text-center">
            Travel{"\n"}Privilege
          </Text>
        </View>
      </View>

      {/* Account Card - Main section */}
      <View className="bg-white p-5">
        <View className="flex-row items-center mb-3">
          <Text className="text-red-500 text-2xl mr-2">₺</Text>
          <Text className="text-xl font-semibold">Turkish Lira Account</Text>
        </View>

        <View className="flex-row items-center mb-3">
          <Text className="text-4xl font-bold">₺1.264,97</Text>
          <TouchableOpacity className="ml-2">
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <View className="mb-5">
          <Text className="text-gray-500">Your IBAN:</Text>
          <Text className="font-semibold">
            TR85 0082 9000 0949 1658 6381 91
          </Text>
        </View>

        <View className="flex-row">
          <TouchableOpacity className="flex-1 mr-2 border border-gray-300 rounded-lg py-3 flex-row items-center justify-center">
            <Ionicons name="document-outline" size={20} color="black" />
            <Text className="font-semibold ml-2">Deposit/Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 ml-2 bg-black rounded-lg py-3 flex-row items-center justify-center">
            <Ionicons name="paper-plane" size={20} color="white" />
            <Text className="font-semibold text-white ml-2">Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dots Indicator */}
      <View className="flex-row justify-center py-4">
        <View className="h-2 w-2 rounded-full bg-black mx-1" />
        <View className="h-2 w-2 rounded-full bg-gray-300 mx-1" />
        <View className="h-2 w-2 rounded-full bg-gray-300 mx-1" />
        <View className="h-2 w-2 rounded-full bg-gray-300 mx-1" />
        <View className="h-2 w-2 rounded-full bg-gray-300 mx-1" />
        <View className="h-2 w-2 rounded-full bg-gray-300 mx-1" />
      </View>

      {/* Monthly Summary */}
      <View className="px-4 py-3 bg-white border-t border-gray-100">
        <View className="flex-row items-center">
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
              <Text className="text-gray-500">Papara Card</Text>
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
                  borderRadius: 10,
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
