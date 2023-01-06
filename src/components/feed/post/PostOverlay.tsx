import { View, Text, Pressable } from "react-native";
import React, { FC, Suspense, useState, startTransition } from "react";
import ButtonsGroup from "./ButtonsGroup";
import BrandInfo from "./BrandInfo";
import ProgressiveBar from "./ProgressiveBar";
import { PlayIcon } from "../../svg";
import { AVPlaybackStatusSuccess } from "expo-av";
import { convertMills } from "../../../services/utils";

type PostOverlayProps = {
  pause: () => void;
  play: () => void;
  checkVideoStatus: () => Promise<
    AVPlaybackStatusSuccess | { isPlaying: boolean }
  >;
  positionMillis: number | undefined;
  durationMillis: number | undefined;
};

/**
 * type guard
 * @param obj
 * @returns
 */
function isAVPlaybackStatusSuccess(
  obj: AVPlaybackStatusSuccess | { isPlaying: boolean }
): obj is AVPlaybackStatusSuccess {
  return (obj as AVPlaybackStatusSuccess).positionMillis !== undefined;
}

const SliderBar = React.lazy(() => import("./SliderBar"));

const PostOverlay: FC<PostOverlayProps> = ({
  pause,
  play,
  checkVideoStatus,
  positionMillis,
  durationMillis,
}) => {
  const [playing, setPlaying] = useState<boolean>(true);
  const [playedMills, setPlayedMills] = useState<number>();
  const [videoMills, setVideoMills] = useState<number>();

  /**
   * to play or pause of video and grab
   * positionMillis,durationMillis when video paused.
   */
  const operatePlay = async () => {
    const result = await checkVideoStatus();

    if (isAVPlaybackStatusSuccess(result)) {
      const { positionMillis: p, durationMillis: d } = result;
      setPlayedMills(p);
      setVideoMills(d);
    }
    const { isPlaying } = result;

    if (isPlaying) {
      pause();
      startTransition(() => {
        setPlaying(false);
      });
    } else {
      play();
      startTransition(() => {
        setPlaying(true);
      });
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
            {convertMills(playedMills!)} / {convertMills(videoMills!)}
          </Text>
        </View>
      )}

      {/*brandinfo and slider */}
      <View className="absolute bottom-[26px] left-[17px] right-[17px]">
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
                durationMillis={videoMills}
                positionMillis={playedMills}
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
