import { View, Text, Image } from "react-native";
import React, { FC, useState } from "react";
import CustomButton from "./CustomButton";
import type { IntroPageType } from "../../../screens/feed/Feed";

type WelcomeProps = {
  setIntroPage: React.Dispatch<React.SetStateAction<IntroPageType>>;
};

const Welcome: FC<WelcomeProps> = ({ setIntroPage }) => {
  const [textWidth, setTextWidth] = useState<number>();
  const [textHeight, setTextHeight] = useState<number>();
  const [containerWidth, setContainerWidth] = useState<number>();

  return (
    <View className="flex-1 justify-center items-center">
      <View
        className="relative"
        onLayout={(e) => {
          const { width } = e.nativeEvent.layout;
          setContainerWidth(width);
        }}
      >
        <Image
          source={require("../../../../assets/images/feed/Subtract.png")}
        />
        <Text
          style={{
            transform: [
              { translateX: textWidth ? -textWidth / 2 : 0 },
              { translateY: textHeight ? -textHeight / 2 : 0 },
            ],
            position: "absolute",
            left: containerWidth ? containerWidth / 2 : 0,
            top: 0,
            fontSize: 24,
            fontWeight: "900",
            color: "#fff",
            textTransform: "uppercase",
          }}
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            setTextHeight(height);
            setTextWidth(width);
          }}
        >
          Welcome, John!
        </Text>
      </View>

      <View className="mt-[50px]">
        <CustomButton text="Let's begin" onPress={() => setIntroPage("demo")} />
      </View>
    </View>
  );
};

export default Welcome;
