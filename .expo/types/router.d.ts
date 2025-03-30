/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(Onboarding)` | `/(Onboarding)/OnboardingOne` | `/(Onboarding)/OnboardingThree` | `/(Onboarding)/OnboardingTwo` | `/(auth)` | `/(auth)/Experience` | `/(auth)/ForgotPassword` | `/(auth)/Login` | `/(auth)/Register` | `/(auth)/ResetPassword` | `/(auth)/Signup` | `/(verify)` | `/(verify)/Identify` | `/(verify)/PassReset` | `/(verify)/ProofResidence` | `/(verify)/VerifyCode` | `/Experience` | `/ForgotPassword` | `/Identify` | `/Login` | `/OnboardingOne` | `/OnboardingThree` | `/OnboardingTwo` | `/PassReset` | `/ProofResidence` | `/Register` | `/ResetPassword` | `/Signup` | `/VerifyCode` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
