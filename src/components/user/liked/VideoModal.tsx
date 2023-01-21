import { View, Text, Modal, Button } from "react-native";
import React, { FC } from "react";

type VideoModalProps = {
  modalVisible: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const VideoModal: FC<VideoModalProps> = ({ modalVisible, setIsModalOpen }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View className="flex-1 bg-white">
        <Text>video modal</Text>

        <Text>video modal</Text>
        <Text>video modal</Text>
        <Button
          title="close"
          onPress={() => setIsModalOpen(false)}
          color="black"
        />
      </View>
    </Modal>
  );
};

export default VideoModal;
