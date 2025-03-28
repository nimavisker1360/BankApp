import React from "react";
import * as Animatable from "react-native-animatable";
import OnboardingOne from "../app/(Onboarding)/OnboardingOne";
import OnboardingTwo from "../app/(Onboarding)/OnboardingTwo";
import OnboardingThree from "../app/(Onboarding)/OnboardingThree";

const OnboardingView = ({ activeItem }) => {
  const screens = [<OnboardingOne />, <OnboardingTwo />, <OnboardingThree />];

  return (
    <Animatable.View
      key={activeItem}
      animation="fadeIn"    
      duration={800}
      style={{ flex: 1 }}
    >
      {screens[activeItem]}
    </Animatable.View>
  );
};
export default OnboardingView;
