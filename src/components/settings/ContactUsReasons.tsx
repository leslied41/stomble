import { View, Text, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { RadioBtnOff, RadioBtnOn } from '../icons'

type Props = {
    onPress: (value: string) => void;
    data: Array<{ id: string, title: string }>
}


const ContactUsReasons = ({ onPress, data }: Props) => {
    const [selected, setSelected] = useState<string>(data[0]?.title)

    function renderItem({ item }: any) {
        return (
            <Pressable className="flex-row mb-[20px]" onPress={() => setSelected(item.title)}>
                {selected === item.title ? <RadioBtnOn /> : <RadioBtnOff />}
                <Text className="text-white ml-[18px] text-[15px] font-[500] leading-[18px]">{item.title}</Text>
            </Pressable>
        )
    }

    return (
        <View>
            <View className="border-b border-[#5C5C5C] px-[18px] pb-[19px]">
                <Pressable className="self-end" onPress={() => onPress(selected)}>
                    <Text className="text-[#326FCB] text-[20px] leading-[24px] font-bold">
                        Done
                    </Text>
                </Pressable>
            </View>
            <FlatList data={data} keyExtractor={item => item.id}
                renderItem={renderItem}
                className="px-[17px] mt-[31px]"
            />
        </View>
    )
}

export default ContactUsReasons