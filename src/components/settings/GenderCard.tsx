import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { RadioBtnOff, RadioBtnOn } from '../../components/icons'

type GenderCardProps = {
    title: string,
    key: string,
    selected?: string,
    onPress: () => void
}


const GenderCard: FC<GenderCardProps> = ({ title, onPress, selected }) => {
    return (
        <Pressable onPress={onPress}>
            <View className="flex-row items-center justify-between mb-[20.4px]">
                <Text className="text-[18px] font-bold text-white leading-[22px] ">{title}</Text>
                {selected === title ? <RadioBtnOn /> : <RadioBtnOff />}
            </View>
        </Pressable>
    )
}

export default GenderCard

const styles = StyleSheet.create({})