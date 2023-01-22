import { View, Image } from "react-native";
import React, { FC } from "react";

type Props = {
  image?: string;
  width: number;
  height: number;
  borderRadius: number;
};

const BusinessProfile: FC<Props> = ({ width, height, borderRadius }) => {
  return (
    <View
      className="bg-white justify-center items-center"
      style={{ width: width, height: height, borderRadius: borderRadius }}
    >
      <Image
        source={require("../../../../assets/images/search/Nike-logo.png")}
        //for static image, it cannot be passed as props as it need to be built here.
        //but for https image it can be done using uri.
      />
    </View>
  );
};

export default BusinessProfile;
