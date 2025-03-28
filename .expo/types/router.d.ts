/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(Onboarding)` | `/(Onboarding)/OnboardingOne` | `/(Onboarding)/OnboardingThree` | `/(Onboarding)/OnboardingTwo` | `/(auth)` | `/(auth)/Login` | `/(auth)/Register` | `/(auth)/Signup` | `/Login` | `/OnboardingOne` | `/OnboardingThree` | `/OnboardingTwo` | `/Register` | `/Signup` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
