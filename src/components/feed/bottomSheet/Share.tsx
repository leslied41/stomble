import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Share = () => {
  return (
    <View>
      {/* clip info */}
      <View className="flex-row items-center  px-[23px] pb-4 border-b border-[#5C5C5C]">
        <View className="w-[70px] h-[70px] rounded-[35px] overflow-hidden justify-center items-center">
          <Image source={require("../../../../assets/images/search/BG.png")} />
        </View>
        <View className="ml-[14px]">
          <Text className="text-[15px] leading-5 font-semibold text-white">
            Share this clip with your friends
          </Text>
          <Text className="text-[13px] leading-[18px] font-normal text-white">
            stomble.com
          </Text>
        </View>
      </View>
      {/* social media list */}
      <View className="mx-[23px]">
        <View className="flex-row justify-between mt-[17px]">
          <TouchableOpacity>
            <Image
              source={require("../../../../assets/images/feed/messanger.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../../assets/images/feed/whatsapp.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../../../assets/images/feed/fb.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../../../assets/images/feed/ig.png")} />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mt-[25px]">
          <TouchableOpacity>
            <Image
              source={require("../../../../assets/images/feed/link.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../../assets/images/feed/twitter.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../../assets/images/feed/email.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../../assets/images/feed/options.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Share;
