import { Image } from "react-native";
import React, { FC } from "react";

type BusinessProfileProps = {
  variant?: "small" | "large";
  image?: string;
};

const BusinessProfile: FC<BusinessProfileProps> = ({ variant = "small" }) => {
  return (
    <Image
      source={require("../../../../assets/images/user/test.png")}
      resizeMode="cover"
      style={{
        width: variant === "small" ? 40 : 73,
        height: variant === "small" ? 40 : 73,
        borderRadius: variant === "small" ? 20 : 73 / 2,
        overflow: "hidden",
      }}
    />
  );
};

export default BusinessProfile;
