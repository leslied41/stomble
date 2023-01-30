import React from "react";
import Svg, { Path, G, Defs, Circle, Rect, ClipPath } from "react-native-svg";

const EmptyCheckCircle = () => {
    return (
        <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <G clipPath="url(#clip0_526_26403)">
                <Circle cx="7.5" cy="7.5" r="7" fill="white" stroke="#ABABAB" />
            </G>
            <Defs>
                <ClipPath id="clip0_526_26403">
                    <Rect width="15" height="15" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default EmptyCheckCircle;
