import { View, Text, Pressable } from 'react-native'
import React, { FC, useState } from 'react'
import { GenderCard } from '../../../components/settings'
import { ScreenLayout } from '../../../components/common'
import Toast from "react-native-toast-message";
import { CommonScreenProps } from '../../../types/navigation';



const data = [
    {
        id: "00",
        title: 'Male',
        enabled: true,
    },
    {
        id: "01",
        title: 'Female',
        enabled: false,
    },
    {
        id: "02",
        title: 'Prefer not to say',
        enabled: false,
    },
]

const Gender: FC<CommonScreenProps<"Gender">> = ({ navigation }) => {
    const [selected, setSelected] = useState("Male")

    const onPress = () => {
        // import Toast from "react-native-toast-message";
        console.log("gender save pressed")
        navigation.goBack()

        Toast.show({
            position: 'bottom',
            bottomOffset: -10,
            type: 'settingToast',
            visibilityTime: 3000,
            text1: "Great! Your gender has been successfully changed"
        });
    }


    return (
        <>
            <ScreenLayout header="Gender" done={onPress}>
                <View className="py-6">
                    {data.map((item, i) => {
                        return (
                            <GenderCard key={item.id} title={item.title} selected={selected} onPress={() => setSelected(item.title)} />
                        )
                    })}
                </View>
            </ScreenLayout>
        </>
    )
}

export default Gender