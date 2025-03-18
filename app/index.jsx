import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnBoardingView from "../components/OnboardingView";
import { icons } from "../constants";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGlobalStore } from "@/context/globalStore";
import Loader from "@/components/Loader";

const Index = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [firstTime, setFirstTime] = useState(null);
  const { loading, userData, isLogged } = useGlobalStore();

  useEffect(() => {
    const checkFirstTimeOpen = async () => {
      const isFirstTime= await AsyncStorage.getItem("isFirstTime");

      if (isFirstTime === null) {
        //first time the app is opend after installation
        await AsyncStorage.setItem("isFirstTime", "false");
        setFirstTime("true");
      } else {
        setFirstTime("false");
      }
    };

    checkFirstTimeOpen();
  }, []);

  useEffect(() => {
    //After checking for the first time,proceed with the login check

    if (firstTime === false && loading) {
      if (isLogged && userData) {
        router.replace("/Home");
      } else {
        router.replace("/Login");
      }
    }
  }, [firstTime, isLogged, userData]);

  if (firstTime === null || loading) {
    //show the loader while waiting for the first time checks or global loading

    return <Loader/>
  }

  const handleNext = () => {
    if (activeItem < 2) {
      setActiveItem(activeItem + 1);
    } else {
      router.push("/Register");
    }
  };
  if(firstTime){
    return(
      <SafeAreaView className="flex-1 bg-primary">
      <OnBoardingView activeItem={activeItem} />

      {activeItem !== 2 && (
        <View className="flex-row justify-between items-center mx-2 mb-12">
          <TouchableOpacity onPress={() => router.replace("/Register")}>
            <Text className="text-gray-200 text-center text-lg">Skip</Text>
          </TouchableOpacity>

          <View className="flex-row items-center justify-center">
            <Text
              className={`w-[12px] h-[12px] rounded-full ${
                activeItem === 0 ? "bg-secondary" : "bg-gray-100"
              }`}
            ></Text>
            <Text
              className={`w-[12px] mx-2 h-[12px] rounded-full ${
                activeItem === 1 ? "bg-secondary" : "bg-gray-100"
              }`}
            ></Text>
            <Text
              className={`w-[12px] h-[12px] rounded-full ${
                activeItem === 2 ? "bg-secondary" : "bg-gray-100"
              }`}
            ></Text>
          </View>

          <TouchableOpacity
            className="bg-secondary p-5 rounded-full items-center justify-center"
            onPress={handleNext}
          >
            <Image
              className="w-[24px] h-[24px]"
              resizeMode="contain"
              source={icons.arrowRM}
            />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
    )
  }
  return null //loading animation
};
export default Index;
