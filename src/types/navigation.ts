import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeTabParamList = {
  VideoPlay: undefined;
  Search: undefined;
  User: undefined;
  Settings: undefined;
};

export type AuthStackParamList = {
  Landing: undefined;
  Login: undefined;
  LoginVerifyCodes: { title: string };
  ForgetPasswordVerifyCodes: undefined;
  ChangePassword: undefined;
  PersonalRegister: undefined;
  BusinessRegister: undefined;
  ChooseAccountType: undefined;
  PersonalRegisterVerifyCodes: undefined;
  BusinessRegisterVerifyCodes: undefined;
};

export type CommonStackParamList = {
  FullName: undefined;
  PersonalInfo: undefined;
};

export type authScreenNavigationType<T extends keyof AuthStackParamList> =
  NativeStackNavigationProp<AuthStackParamList, T>;
