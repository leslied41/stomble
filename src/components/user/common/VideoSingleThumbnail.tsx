import { Text, View, Pressable, Image, Dimensions } from "react-native";
import React, { FC, useState } from "react";
import { useEffectSkipInitial } from "../../../hooks";

type SingleProps = {
  deleteOn: boolean;
  selectedItems: (number | string)[];
  setSelectedItems: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  id: number | string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectItemsIncreasing: boolean;
  setSelectItemsIncreasing: React.Dispatch<React.SetStateAction<boolean>>;
  pressedVideoIndex: number | undefined;
  setPressedVideoIndex: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
};

const VideoSingleThumbnail: FC<SingleProps> = ({
  deleteOn,
  selectedItems,
  setSelectedItems,
  id,
  setIsModalOpen,
  selectItemsIncreasing,
  setSelectItemsIncreasing,
  pressedVideoIndex,
  setPressedVideoIndex,
}) => {
  const [videoIndex, setVideoIndex] = useState<number>();

  const toggleSelection = (targetId: string | number) => () => {
    let temp = selectedItems;
    let increasing = false;

    if (temp.includes(targetId)) {
      temp = temp.filter((i) => i !== targetId);
      increasing = false;
      setSelectItemsIncreasing(false);
      setPressedVideoIndex(videoIndex);
    } else {
      temp = [...temp, targetId];
      increasing = true;
      setSelectItemsIncreasing(true);
    }
    if (increasing) {
      setVideoIndex(temp.length);
    } else {
      setVideoIndex(undefined);
    }
    setSelectedItems(temp);
  };

  useEffectSkipInitial(() => {
    if (!selectItemsIncreasing && videoIndex !== undefined) {
      if (pressedVideoIndex! < videoIndex) {
        setVideoIndex(videoIndex - 1);
      }
    }
    if (selectedItems.length === 0) setVideoIndex(undefined);
  }, [selectedItems]);

  return (
    <Pressable
      onPress={() => setIsModalOpen(true)}
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
          >
            <Text className="text-white text-[10px] leanding-3">
              {videoIndex}
            </Text>
          </View>
        </Pressable>
      )}
    </Pressable>
  );
};

export default VideoSingleThumbnail;
