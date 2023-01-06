import { Dimensions } from "react-native";
import React, { memo, FC } from "react";
import Slider from "@react-native-community/slider";

type SliderBarProps = {
  positionMillis: number | undefined;
  durationMillis: number | undefined;
  updatePositionMillis: (millis: number) => Promise<void>;
};

const SliderBar: FC<SliderBarProps> = ({
  positionMillis,
  durationMillis,
  updatePositionMillis,
}) => {
  return (
    <Slider
      value={
        !durationMillis
          ? 0
          : (positionMillis ? positionMillis : 0) / durationMillis
      }
      onSlidingComplete={async (v) => {
        await updatePositionMillis(v * (durationMillis ? durationMillis : 0));
      }}
      style={{ width: Dimensions.get("window").width - 34, height: 22 }}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#ABABAB"
      maximumTrackTintColor="#fff"
      thumbImage={require("../../../../assets/images/feed/thumbBtn.png")}
    />
  );
};

export default memo(SliderBar);
