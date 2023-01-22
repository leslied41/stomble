import { View } from "react-native";
import React, { Fragment } from "react";
import SingleHint from "./SingleHint";

const fakeBusiness = ["Nike"];
const fakeHints = [
  "Nike shoes",
  "Nike clothes",
  "Nike men",
  "Nike women",
  "Nike Air max 97",
];
const Hint = () => {
  return (
    <View className="mx-[27px] mt-2">
      {/* business hint */}
      <View>
        {fakeBusiness.map((b) => (
          <Fragment key={b}>
            <SingleHint isBusiness hint={b} />
          </Fragment>
        ))}
      </View>
      {/* hints */}
      <View>
        {fakeHints.map((h) => (
          <Fragment key={h}>
            <SingleHint hint={h} />
          </Fragment>
        ))}
      </View>
    </View>
  );
};

export default Hint;
