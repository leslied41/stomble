import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ArrowDown } from '../svg'

type Props = {
    onPress: () => void;
    selected: string;
    placeHolder: string;
}

const SelectionDropDown = ({ onPress, selected, placeHolder }: Props) => {
    return (
        <Pressable onPress={onPress}>
            <View className="bg-[#5c5c5c] rounded-md h-[32px] justify-center items-center">
                <Text className="text-[#ababab] leading-[19px] font-[400] text-[16px] ">{selected ? selected : placeHolder}</Text>
                <View className="self-end absolute right-2">
                    <ArrowDown />
                </View>
            </View>
        </Pressable>
    )
}

export default SelectionDropDown