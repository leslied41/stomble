import { View, Text, Animated, Easing } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { OneFingerIcon } from "../../svg";

const FingerScrollUp = () => {
  const moveDis = useState(new Animated.Value(0))[0];

  const animateLoop = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveDis, {
          toValue: 50,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(moveDis, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [moveDis]);

  useEffect(() => {
    animateLoop();
  }, [animateLoop, moveDis]);

  return (
    <View>
      <Animated.View
        style={{ transform: [{ translateY: moveDis }], alignItems: "center" }}
      >
        <OneFingerIcon />
      </Animated.View>

      <Text className="mt-[63px] text-[12px] leading-[14.4px] font-bold text-white">
        Scroll up to watch the next video
      </Text>
    </View>
  );
};

export default FingerScrollUp;
