import {
  Ionicons,
  AntDesign,
  EvilIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
export const UserPlus = () => {
  return <AntDesign name="adduser" size={24} color="black" />;
};

export const UserMinus = () => {
  return <AntDesign name="deleteuser" size={24} color="black" />;
};

export const KeyIcon = () => {
  return <Ionicons name="ios-key-outline" size={24} color="black" />;
};

export const ChevronRight = () => {
  return <EvilIcons name="chevron-right" size={48} color="black" />;
};

export const ArrowDown = ({ size = 22, color = "white" }) => (
  <MaterialIcons name="keyboard-arrow-down" size={size} color={color} />
);

export const EyeIcon = () => <Entypo name="eye" size={22} color="white" />;

export const EyeCloseIcon = () => (
  <Entypo name="eye-with-line" size={22} color="white" />
);

export const ErrorIcon = () => (
  <AntDesign name="closesquareo" size={14} color="red" />
);

export const CheckIcon = () => (
  <AntDesign name="checksquareo" size={14} color="red" />
);

export const CircleCheckIcon = () => (
  <Feather name="check-circle" size={20} color="red" />
);

export const RadioBtnOff = () => (
  <Ionicons name="radio-button-off" size={15} color="white" />
);

export const RadioBtnOn = () => (
  <Ionicons name="radio-button-on" size={15} color="white" />
);
