import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { FC } from "react";

type DeleteBarProps = {
  setDeleteOn: (value: React.SetStateAction<boolean>) => void;
  selectedItems: (number | string)[];
  setSelectedItems: React.Dispatch<React.SetStateAction<(string | number)[]>>;
};

const DeleteBar: FC<DeleteBarProps> = ({
  setDeleteOn,
  selectedItems,
  setSelectedItems,
}) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-[#222222]">
      <View className="flex-row h-[57px] items-center justify-between pl-[25px] pr-[11px] ">
        <Button
          title="Cancel"
          color="white"
          onPress={() => {
            setDeleteOn(false);
            setSelectedItems([]);
          }}
        />
        <TouchableOpacity
          className="w-[114px] h-[38px] justify-center items-center bg-[#326FCB] rounded-[100px]"
          disabled={selectedItems?.length === 0 || !selectedItems}
        >
          <Text className="text-[16px] leading-[19.2px] font-medium text-white">
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteBar;
