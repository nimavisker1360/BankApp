/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(Onboarding)` | `/(Onboarding)/OnboardingOne` | `/(Onboarding)/OnboardingThree` | `/(Onboarding)/OnboardingTwo` | `/(auth)` | `/(auth)/Experience` | `/(auth)/ForgotPassword` | `/(auth)/Login` | `/(auth)/Register` | `/(auth)/ResetPassword` | `/(auth)/Signup` | `/(verify)` | `/(verify)/FingerScanner` | `/(verify)/Identify` | `/(verify)/NewPin` | `/(verify)/PassReset` | `/(verify)/Pointer` | `/(verify)/Profile` | `/(verify)/ProofIdCard` | `/(verify)/ProofResidence` | `/(verify)/Selfie` | `/(verify)/VerifyCode` | `/Experience` | `/FingerScanner` | `/ForgotPassword` | `/Identify` | `/Login` | `/NewPin` | `/OnboardingOne` | `/OnboardingThree` | `/OnboardingTwo` | `/PassReset` | `/Pointer` | `/Profile` | `/ProofIdCard` | `/ProofResidence` | `/Register` | `/ResetPassword` | `/Selfie` | `/Signup` | `/VerifyCode` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
