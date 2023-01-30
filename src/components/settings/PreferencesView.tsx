import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, { FC } from 'react'
import ArrowRight from '../../components/svg/ArrowRight'

type PreferencesViewProps = {
    darkEnabled: boolean,
    onPress: () => void
}

const PreferencesView: FC<PreferencesViewProps> = ({ darkEnabled, onPress }) => {
    return (
        <>
            <Text className="font-[400] text-[18px] mb-[27px] mt-[21px] leading-[22px] text-[#ADADAD]">Preferences</Text>
            <View className="gap-[21px]">
                <View className="flex-row items-center justify-between mb-[21px]">
                    <Text className=" font-[400] text-[18px] leading-[22px] text-white">Dark mode</Text>
                    <Switch
                        style={{ transform: [{ scale: .8 }] }}
                        trackColor={{ false: '#5c5c5c', true: '#fff' }}
                        thumbColor={darkEnabled ? '#5c5c5c' : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={onPress}
                        value={darkEnabled} />
                </View>
            </View>
        </>
    )
}

export default PreferencesView