import { View, Text, Switch } from 'react-native'
import React, { FC, useState } from 'react'
import { ScreenLayout } from '../../../components/common'
import { CommonScreenProps, } from '../../../types/navigation';

const Notifications: FC<CommonScreenProps<"SettingNotification">> = ({ navigation }) => {
    const [textNotification, setTextNotification] = useState(false)
    const [videoNotification, setVideoNotification] = useState(false)
    return (
        <ScreenLayout header="Notifications">
            <View className="gap-[26px] py-[27px]">
                <View className="flex-row items-center justify-between">
                    <Text className="text-[18px] leading-[22px] font-[700] text-white">Text notifications</Text>
                    <Switch
                        style={{ transform: [{ scale: .8 }] }}
                        trackColor={{ false: '#5c5c5c', true: '#fff' }}
                        thumbColor={textNotification ? '#5c5c5c' : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setTextNotification(!textNotification)}
                        value={textNotification}
                    />
                </View>

                <View className="flex-row items-center justify-between">
                    <Text className="text-[18px] leading-[22px] font-[700] text-white">Upload video notification</Text>
                    <Switch
                        style={{ transform: [{ scale: .8 }] }}
                        trackColor={{ false: '#5c5c5c', true: '#fff' }}
                        thumbColor={videoNotification ? '#5c5c5c' : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setVideoNotification(!videoNotification)}
                        value={videoNotification}
                    />
                </View>

            </View>
        </ScreenLayout>
    )
}

export default Notifications