import { View, Modal } from "react-native";
import React, { ReactNode, FC } from "react";

type IntroOverlayProps = {
  children: ReactNode;
  modalVisible: boolean;
};

const IntroOverlay: FC<IntroOverlayProps> = ({ children, modalVisible }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View className="flex-1 bg-[#5c5c5c]/80 ">{children}</View>
    </Modal>
  );
};

export default IntroOverlay;
