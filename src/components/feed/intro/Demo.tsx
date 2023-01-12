import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { IntroPageType } from "../../../screens/feed/Feed";
import CustomButton from "./CustomButton";
import { HeartIcon, ShareIcon, ThreeDotsIcon } from "../../icons";
import { BusinessProfile } from "../../search";
import { BrandInfo, ProgressiveBar } from "../post";

type DemoProps = {
  setIntroPage: React.Dispatch<React.SetStateAction<IntroPageType>>;
  setIsIntroOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Demo: FC<DemoProps> = ({ setIntroPage, setIsIntroOpen }) => {
  const [showArr, setShowArr] = useState<boolean[]>([]);

  useEffect(() => {
    let count = 0;

    const intervalId = setInterval(() => {
      setShowArr((prev) => [...prev, true]);
      count++;
    }, 2000);

    if (count === 6) clearInterval(intervalId);

    () => {
      return clearInterval(intervalId);
    };
  }, []);

  return (
    <Pressable
      className="mx-[17px] mt-[69px] mb-[117px] flex-1"
      onPress={() =>
        setShowArr((prev) => {
          if (prev.length < 7) return [...prev, true];
          else return prev;
        })
      }
    >
      {/* skip button */}
      <View className="flex flex-row justify-end">
        <TouchableOpacity
          onPress={() => {
            setIsIntroOpen(false);
            setIntroPage("welcome");
          }}
        >
          <Text className="text-[17px] leading-[22px] font-bold text-white">
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      {/* continue button */}
      <View className="flex-row justify-center mt-9">
        <CustomButton text="Continue" onPress={() => setIntroPage("finish")} />
      </View>

      {/* icon list */}
      <View className="flex-row justify-end mt-[153px]">
        <View className=" items-center ">
          <View className="relative">
            <BusinessProfile width={48} height={48} borderRadius={24} />
            <View
              className="absolute right-16 bottom-6"
              style={{ display: showArr[0] ? "flex" : "none" }}
            >
              <Image
                source={require("../../../../assets/images/feed/businessLine.png")}
              />
            </View>
          </View>
          <View className="mt-[30px] relative">
            <HeartIcon size={29} color="white" />
            <View
              className="absolute right-16 bottom-2"
              style={{ display: showArr[1] ? "flex" : "none" }}
            >
              <Image
                source={require("../../../../assets/images/feed/likeLine.png")}
              />
            </View>
          </View>
          <View className="mt-[30px] relative">
            <ShareIcon size={29} color="white" />
            <View
              className="absolute right-16 bottom-2"
              style={{ display: showArr[2] ? "flex" : "none" }}
            >
              <Image
                source={require("../../../../assets/images/feed/shareLine.png")}
              />
            </View>
          </View>
          <View className="mt-[30px] relative">
            <ThreeDotsIcon size={29} color="white" />
            <View
              className="absolute right-16 bottom-2"
              style={{ display: showArr[3] ? "flex" : "none" }}
            >
              <Image
                source={require("../../../../assets/images/feed/reportLine.png")}
              />
            </View>
          </View>
        </View>
      </View>

      {/* brand info and prgoressive bar */}
      <View className="mt-[85.5px]">
        <View className="relative">
          <BrandInfo isStatic />
          <View
            className="absolute left-0 bottom-20"
            style={{ display: showArr[4] ? "flex" : "none" }}
          >
            <Image
              source={require("../../../../assets/images/feed/nameLine.png")}
            />
          </View>
          <View
            className="absolute left-[108px] bottom-[84px]"
            style={{ display: showArr[5] ? "flex" : "none" }}
          >
            <Image
              source={require("../../../../assets/images/feed/followLine.png")}
            />
          </View>
        </View>

        <View className="mt-[19px] relative">
          <ProgressiveBar durationMillis={1000 * 10} positionMillis={3000} />
          <View
            className="absolute right-0 bottom-6"
            style={{ display: showArr[6] ? "flex" : "none" }}
          >
            <Image
              source={require("../../../../assets/images/feed/barLine.png")}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Demo;
