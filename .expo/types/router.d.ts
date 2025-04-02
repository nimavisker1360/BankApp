/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(Onboarding)` | `/(Onboarding)/OnboardingOne` | `/(Onboarding)/OnboardingThree` | `/(Onboarding)/OnboardingTwo` | `/(auth)` | `/(auth)/Experience` | `/(auth)/ForgotPassword` | `/(auth)/Login` | `/(auth)/Register` | `/(auth)/ResetPassword` | `/(auth)/Signup` | `/(tabs)` | `/(tabs)/HamburgerMenu` | `/(tabs)/Home` | `/(verify)` | `/(verify)/Congratulation` | `/(verify)/Identify` | `/(verify)/NewPin` | `/(verify)/PassReset` | `/(verify)/Pointer` | `/(verify)/Profile` | `/(verify)/ProofIdCard` | `/(verify)/ProofResidence` | `/(verify)/Selfie` | `/(verify)/VerifyCode` | `/Congratulation` | `/Experience` | `/ForgotPassword` | `/HamburgerMenu` | `/Home` | `/Identify` | `/Loading` | `/Login` | `/NewPin` | `/OnboardingOne` | `/OnboardingThree` | `/OnboardingTwo` | `/PassReset` | `/Pointer` | `/Profile` | `/ProofIdCard` | `/ProofResidence` | `/Register` | `/ResetPassword` | `/Selfie` | `/Signup` | `/VerifyCode` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
