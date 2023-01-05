import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import { CustomButton, BusinessProfile } from "../../search";
import { ShareIcon, HeartIcon, ThreeDotsIcon } from "../../icons";
import { PlayIcon } from "../../svg";

type PostOverlayProps = {
  pause: () => void;
  play: () => void;
  checkIsPlaying: () => Promise<boolean>;
};

const PostOverlay: FC<PostOverlayProps> = ({ pause, play, checkIsPlaying }) => {
  const [playing, setPlaying] = useState<boolean>(true);
  const operatePlay = async () => {
    const isPlaying = await checkIsPlaying();
    if (isPlaying) {
      pause();
      setPlaying(false);
    } else {
      play();
      setPlaying(true);
    }
  };

  return (
    <Pressable
      className="absolute z-50 bottom-0 left-0 top-0 right-0"
      onPress={operatePlay}
    >
      {/* overlay background color */}
      <View
        className="absolute  bottom-0 left-0 top-0 right-0"
        style={{
          backgroundColor: playing ? "transparent" : "#5C5C5C",
          opacity: playing ? 1 : 0.5,
        }}
      />
      {/* play Icon */}
      {!playing && (
        <View className="absolute top-1/2 left-1/2 -translate-x-[33.5px] z-10">
          <PlayIcon />
        </View>
      )}
      {/* brand info */}
      <View className="absolute bottom-[26px] left-[17px] right-[17px] z-10">
        <View className="flex-row">
          <Text className="mr-5 text-[16px] leading-[19.2px] font-bold text-white">
            @Nike
          </Text>
          <CustomButton
            variant="follow"
            size="small"
            borderRadius={5}
            onPress={() => console.log("pressed follow button")}
          />
        </View>
        <Text className="mt-[13px] text-[13px] leading-[15.6px] font-normal text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id
          et in lectus.
          <Text
            className="font-black text-[13px] leading-[15.6px]  text-white"
            onPress={() => console.log("read more")}
          >
            Read more
          </Text>
        </Text>
      </View>
      {/* buttons group */}
      <View className="absolute right-[17px] bottom-[142px] items-center z-10">
        <TouchableOpacity onPress={() => console.log("press brand")}>
          <BusinessProfile width={48} height={48} borderRadius={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("press heart")}
          className="mt-[30px]"
        >
          <HeartIcon size={29} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("press share")}
          className="mt-[30px]"
        >
          <ShareIcon size={29} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("press three dots")}
          className="mt-[30px]"
        >
          <ThreeDotsIcon size={29} color="white" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default PostOverlay;
