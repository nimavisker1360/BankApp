/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(Onboarding)` | `/(Onboarding)/OnboardingOne` | `/(Onboarding)/OnboardingThree` | `/(Onboarding)/OnboardingTwo` | `/(auth)` | `/(auth)/Experience` | `/(auth)/Login` | `/(auth)/Register` | `/(auth)/Signup` | `/(verify)` | `/(verify)/Identify` | `/(verify)/ProofResidence` | `/Experience` | `/Identify` | `/Login` | `/OnboardingOne` | `/OnboardingThree` | `/OnboardingTwo` | `/ProofResidence` | `/Register` | `/Signup` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
