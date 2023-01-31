import { View, Text, Pressable } from 'react-native'
import React, { FC, useRef, useState } from 'react'
import { BottomSheetLayout, ScreenLayout } from '../../../components/common';
import { ArrowDown } from '../../../components/svg';
import { BirthdayBottomSheet } from '../../../components/settings';
import Toast from "react-native-toast-message";
import { CommonScreenProps } from '../../../types/navigation';
import RNDateTimePicker from "@react-native-community/datetimepicker";


const Birthday: FC<CommonScreenProps<"Birthday">> = ({ navigation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const closeBottomSheet = () => {
        setIsOpen(false)
    }

    const onPress = () => {
        // import Toast from "react-native-toast-message";
        console.log("birthday save pressed")
        navigation.goBack()

        Toast.show({
            position: 'bottom',
            bottomOffset: -10,
            type: 'settingToast',
            visibilityTime: 3000,
            text1: "Great! Your birthday has been successfully changed"
        });
    }

    return (
        <>
            <ScreenLayout header="Birthday" done={onPress}>
                <Pressable onPress={() => setIsOpen(!isOpen)}>
                    <View className="bg-[#5c5c5c] mt-6 rounded-md h-[32px] justify-center items-center">
                        <Text className="text-white">{date.toDateString()}</Text>
                        <View className="self-end absolute right-2">
                            <ArrowDown />
                        </View>
                    </View>
                </Pressable>
            </ScreenLayout>

            {/* birthday bottom sheet */}
            <BottomSheetLayout
                snapPoint="40%"
                isBottomSheetOpen={isOpen}
                closeBottomSheet={() => setIsOpen(false)}
                variant="auth"
            >
                <BirthdayBottomSheet date={date} closeBottomSheet={closeBottomSheet} onChange={onChange} isBirthdayBottomSheetOpen={isOpen} />
            </BottomSheetLayout>

        </>
    )
}

export default Birthday