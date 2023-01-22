import { Dimensions, View } from "react-native";
import React, { FC } from "react";

type ProgressiveBarProps = {
  positionMillis: number | undefined;
  durationMillis: number | undefined;
};

const ProgressiveBar: FC<ProgressiveBarProps> = ({
  positionMillis,
  durationMillis,
}) => {
  return (
    <View className="h-[22px] items-center justify-center">
      <View
        style={{
          width: Dimensions.get("window").width - 40,
          height: 4,
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width:
              (Dimensions.get("window").width - 40) *
              (!durationMillis
                ? 0
                : (positionMillis ? positionMillis : 0) / durationMillis),
            height: 4,
            backgroundColor: "#ABABAB",
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export default ProgressiveBar;
