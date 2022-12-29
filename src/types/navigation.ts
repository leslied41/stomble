/**
 * documentation:https://reactnavigation.org/docs/typescript/#annotating-usenavigation
 */
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps } from "@react-navigation/native";

export type HomeTabParamList = {
  VideoPlay: undefined;
  Search: undefined;
  User: undefined;
  Settings: undefined;
};

export type AuthStackParamList = {
  Landing: undefined;
  Login: { title: string };
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

export type RootStackParamList = AuthStackParamList &
  CommonStackParamList & {
    Home: undefined;
  };

/**
 * the screens inside the tab in homeroutes. this is the nesting navigator.
 */
export type HomeScreenTabProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

/**
 * AuthScreenNavigationType is the type of navigation.
 * scenario: const navigation = useNavigation<AuthScreenNavigationType<"Login">>();
 * AuthScreenProps is the type of props include both navigation and route.
 * scenarios: const Landing = ({ navigation }: AuthScreenProps<"Landing">) => {
 */
export type AuthScreenNavigationType<T extends keyof AuthStackParamList> =
  NativeStackNavigationProp<AuthStackParamList, T>;
export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

/**
 * Common routes
 */
export type CommonScreenNavigationType<T extends keyof CommonStackParamList> =
  NativeStackNavigationProp<CommonStackParamList, T>;
export type CommonScreenProps<T extends keyof CommonStackParamList> =
  NativeStackScreenProps<CommonStackParamList, T>;

/**
 * RootScreenProps and RootScreenNavigationType include both AuthScreenProps and CommonScreenProps
 */
export type RootScreenNavigationType<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
export type RootScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

/**
 * declared these ParamList globally
 */
declare global {
  namespace ReactNavigation {
    interface HomeParamList extends HomeTabParamList {}
    interface AuthParamList extends AuthStackParamList {}
    interface CommonParamList extends CommonStackParamList {}
    interface RootParamList extends RootStackParamList {}
  }
}
