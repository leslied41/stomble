import { View, Pressable, Image, Dimensions } from "react-native";
import React, { FC } from "react";

type SingleProps = {
  deleteOn: boolean;
  selectedItems: (number | string)[];
  setSelectedItems: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  id: number | string;
};

const VideoSingleThumbnail: FC<SingleProps> = ({
  deleteOn,
  selectedItems,
  setSelectedItems,
  id,
}) => {
  const toggleSelection = (targetId: string | number) => () => {
    setSelectedItems((prev) => {
      if (prev.includes(targetId)) {
        return prev.filter((i) => i !== targetId);
      } else {
        return [...prev, targetId];
      }
    });
  };

  return (
    <View
      key={id}
      style={{
        width: (Dimensions.get("window").width - 6) / 3,
        position: "relative",
      }}
    >
      <Image
        source={require("../../../../assets/images/user/test2.png")}
        style={{ width: "100%" }}
        resizeMode="contain"
      />
      {/* overlay */}
      {deleteOn && (
        <Pressable
          className="inset-0 absolute"
          style={{
            backgroundColor: selectedItems?.includes(id)
              ? "transparent"
              : "rgba(92, 92, 92, 0.8)",
          }}
          onPress={toggleSelection(id)}
        >
          <View
            className="absolute top-[6px] right-[6px] h-[14px] w-[14px] rounded-[7px] border-[#E0E0E0] border justify-center items-center"
            style={{
              backgroundColor: selectedItems?.includes(id)
                ? "#00A25B"
                : "transparent",
            }}
          />
        </Pressable>
      )}
    </View>
  );
};

export default VideoSingleThumbnail;
