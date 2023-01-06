import { View, Text, Pressable } from "react-native";
import React, { FC, Suspense } from "react";
import ButtonsGroup from "./ButtonsGroup";
import BrandInfo from "./BrandInfo";
import ProgressiveBar from "./ProgressiveBar";
import { PlayIcon } from "../../svg";
import { convertMills } from "../../../services/utils";

type PostOverlayProps = {
  pause: () => void;
  play: () => void;
  playing: boolean;
  positionMillis: number | undefined;
  durationMillis: number | undefined;
  updatePositionMillis: (millis: number) => Promise<void>;
};

const SliderBar = React.lazy(() => import("./SliderBar"));

const PostOverlay: FC<PostOverlayProps> = ({
  pause,
  play,
  playing,
  positionMillis,
  durationMillis,
  updatePositionMillis,
}) => {
  /**
   * to play or pause of video and grab
   * positionMillis,durationMillis when video paused.
   */
  const operatePlay = async () => {
    if (playing) {
      pause();
    } else {
      play();
    }
  };

  return (
    <Pressable
      className="absolute z-50 bottom-0 left-0 top-0 right-0"
      onPress={operatePlay}
    >
      <View
        className="absolute  bottom-0 left-0 top-0 right-0"
        style={{
          backgroundColor: playing ? "transparent" : "#5C5C5C",
          opacity: playing ? 1 : 0.5,
        }}
      />

      {/* play Icon */}
      {!playing && (
        <View className="absolute top-1/2 left-1/2 -translate-x-[33.5px] -translate-y-[45px] z-10 items-center">
          <PlayIcon />
          <Text className="text-[20px] leading-6 font-extrabold text-white mt-[13px] text-center">
            {convertMills(positionMillis!)} / {convertMills(durationMillis!)}
          </Text>
        </View>
      )}

      {/*brandinfo and slider */}
      <View className="absolute bottom-[15px] left-[17px] right-[17px]">
        <BrandInfo />
        <View className="mt-[19px]">
          <Suspense>
            {playing === true ? (
              <ProgressiveBar
                durationMillis={durationMillis}
                positionMillis={positionMillis}
              />
            ) : (
              <SliderBar
                durationMillis={durationMillis}
                positionMillis={positionMillis}
                updatePositionMillis={updatePositionMillis}
              />
            )}
          </Suspense>
        </View>
      </View>

      {/* buttons group */}
      <View className="absolute right-[17px] bottom-[142px] items-center z-10">
        <ButtonsGroup />
      </View>
    </Pressable>
  );
};

export default PostOverlay;
