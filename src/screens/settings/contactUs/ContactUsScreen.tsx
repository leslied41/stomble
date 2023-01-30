import { View, Text } from 'react-native'
import React, { useState, FC } from 'react'

import { CommonScreenProps } from "../../../types/navigation";
import { BottomSheetLayout, ScreenLayout } from '../../../components/common';
import { ContactUsReasons, SelectionDropDown } from '../../../components/settings';
import { TextInput } from 'react-native-gesture-handler';
import { CustomButton } from '../../../components/auth';



const data = [
    {
        id: '00',
        title: 'Feature Request'
    },
    {
        id: '01',
        title: 'Account Issues'
    },
    {
        id: '02',
        title: 'Bugs and Errors'
    },
    {
        id: '03',
        title: 'Other'
    },
]

const ContactUs: FC<CommonScreenProps<"ContactUs">> = ({ navigation }) => {
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const [form, setForm] = useState<{ reason: string, description: string }>({ reason: '', description: '' })
    const disabled = form.reason !== "" && form.description.length > 0

    function onPress(value: string) {
        setIsOpen(false)
        setForm({ ...form, reason: value })
    }

    const onFormSubmit = () => {
        navigation.goBack()
    }

    return (
        <>
            <ScreenLayout header="Contact us">
                <View className='mt-[22px]'>
                    <SelectionDropDown onPress={() => setIsOpen(!isOpen)} selected={form.reason} placeHolder="Reason" />
                </View>

                <View className='relative py-[4px] px-[10px] mt-[20px] bg-[#5c5c5c] rounded-[5px] h-[136px] mb-[106px]'>
                    <TextInput
                        multiline
                        selectionColor={'#fff'}
                        className='bg-[#5c5c5c] leading-[19px] h-[95px] rounded-[5px]  text-[16px] text-white font-[400]'
                        placeholder='Problem Description'
                        placeholderTextColor={'#fff'}
                        maxLength={500}
                        onChangeText={(value: string) => setForm({ ...form, description: value })}
                    />
                    <Text className="right-[9px] bottom-[9px] absolute text-[10px] text-white leading-[12px] font-[400]">{`${form.description.length} / 500`}</Text>
                </View>

                <CustomButton text="Continue" onPress={onFormSubmit} borderRadius={100} disabled={!disabled} />

            </ScreenLayout>

            <BottomSheetLayout
                snapPoint="40%"
                isBottomSheetOpen={isOpen}
                closeBottomSheet={() => setIsOpen(false)}
                variant="auth"
            >
                <ContactUsReasons onPress={onPress} data={data} />
            </BottomSheetLayout>
        </>
    )
}

export default ContactUs