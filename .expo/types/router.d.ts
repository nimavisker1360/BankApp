/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(Onboarding)` | `/(Onboarding)/OnboardingOne` | `/(Onboarding)/OnboardingThree` | `/(Onboarding)/OnboardingTwo` | `/(auth)` | `/(auth)/Experience` | `/(auth)/ForgotPassword` | `/(auth)/Login` | `/(auth)/Register` | `/(auth)/ResetPassword` | `/(auth)/Signup` | `/(tabs)` | `/(tabs)/DepositWithdrawModal` | `/(tabs)/HamburgerMenu` | `/(tabs)/Home` | `/(tabs)/MoneyTransferModal` | `/(tabs)/Payments` | `/(tabs)/ProfileMenu` | `/(tabs)/QRTransactionsModal` | `/(tabs)/SendMoney` | `/(verify)` | `/(verify)/Congratulation` | `/(verify)/Identify` | `/(verify)/NewPin` | `/(verify)/PassReset` | `/(verify)/Pointer` | `/(verify)/Profile` | `/(verify)/ProofIdCard` | `/(verify)/ProofResidence` | `/(verify)/Selfie` | `/(verify)/VerifyCode` | `/Congratulation` | `/DepositWithdrawModal` | `/Experience` | `/ForgotPassword` | `/HamburgerMenu` | `/Home` | `/Identify` | `/Loading` | `/Login` | `/MoneyTransferModal` | `/NewPin` | `/OnboardingOne` | `/OnboardingThree` | `/OnboardingTwo` | `/PassReset` | `/Payments` | `/Pointer` | `/Profile` | `/ProfileMenu` | `/ProofIdCard` | `/ProofResidence` | `/QRTransactionsModal` | `/Register` | `/ResetPassword` | `/Selfie` | `/SendMoney` | `/Signup` | `/VerifyCode` | `/_sitemap` | `/components/DepositWithdraw`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
