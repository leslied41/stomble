import { View, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import {
  DeleteBar,
  NoContent,
  VideoSingleThumbnail,
  VideoModal,
} from "../../components/user";
import { LikedNoContent } from "../../components/svg";
import { UserScreenNavigationProps } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { BinIcon } from "../../components/icons";

let hasLikedVideo = true;

const DATA = [
  { id: 1, src: "" },
  { id: 2, src: "" },
  { id: 3, src: "" },
  { id: 4, src: "" },
  { id: 5, src: "" },
  { id: 6, src: "" },
  { id: 7, src: "" },
  { id: 8, src: "" },
  { id: 9, src: "" },
];

const LikedScreen = () => {
  const [deleteOn, setDeleteOn] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Array<number | string>>(
    []
  );
  const [selectItemsIncreasing, setSelectItemsIncreasing] = useState(true);
  const [pressedVideoIndex, setPressedVideoIndex] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigation = useNavigation<UserScreenNavigationProps<"Following">>();

  const turnOnDelete = () => {
    setDeleteOn(true);
  };

  return (
    <View className="flex-1 bg-[#222222]">
      {hasLikedVideo ? (
        <View className="flex-1 relative">
          <VideoModal
            modalVisible={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          <View className="h-[33.5px] items-end justify-center mx-4">
            <Pressable onPress={turnOnDelete}>
              <BinIcon />
            </Pressable>
          </View>
          <FlatList
            data={DATA}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <VideoSingleThumbnail
                id={item.id}
                deleteOn={deleteOn}
                setSelectedItems={setSelectedItems}
                selectedItems={selectedItems}
                setIsModalOpen={setIsModalOpen}
                selectItemsIncreasing={selectItemsIncreasing}
                setSelectItemsIncreasing={setSelectItemsIncreasing}
                pressedVideoIndex={pressedVideoIndex}
                setPressedVideoIndex={setPressedVideoIndex}
              />
            )}
          />
          {deleteOn && (
            <DeleteBar
              setDeleteOn={setDeleteOn}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          )}
        </View>
      ) : (
        <View className="mt-[70px]">
          <NoContent
            text="Sorry, you haven’t liked any video yet"
            Icon={<LikedNoContent />}
            onPress={() => navigation.navigate("Feed")}
          />
        </View>
      )}
    </View>
  );
};

export default LikedScreen;
